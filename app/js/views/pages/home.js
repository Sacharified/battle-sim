import Backbone from 'backbone';
import _ from 'underscore';
import Component from '../../component';
import template from '../templates/pages/home.html';
import ModalView from '../components/modal';
import CharacterCreateModal from '../forms/charactercreate';
import CharacterMetaView from '../layouts/charactermeta';
import BattleScene from '../layouts/scenes/battle';
import TeamCollection from '../../collections/team';

export default Backbone.View.extend({
    template,

    className: 'home',

    initialize: function() {
        this.characterCreateModal = new CharacterCreateModal({
          model: App.Models.Player
        });

        _.bindAll(this, 'onCharacterCreate', 'createScene');
        this.characterCreateModal.on('character:created', this.onCharacterCreate);
    },
  
    render: function() {
        this.$el.html(this.template.render());
        this.$el.append(this.characterCreateModal.render().$el);
        this.characterCreateModal.setChar({
            name: 'dev',
            class: 'god'
        });
        return this;
    },
  
    onCharacterCreate: function(model) {
        this.characterCreateModal.remove();


        this.playerMetaView = new CharacterMetaView({ model: App.Models.Player });
        this.$el.append(this.playerMetaView.render().$el);
        
        var team1 = new TeamCollection([App.Models.Player]);
        var team2 = new TeamCollection();
        this.createScene('battle', { teams: { 'one' : team1, 'two' : team2 } });
    },
    
    createScene: function(sceneType, data) {
        if(this.scene)
            this.scene.remove();
            
        switch(sceneType) {
            case 'battle':
            default:
                this.scene = new BattleScene(data);
                this.$('.js-scene').append(this.scene.render().$el);
        }
    }

});
