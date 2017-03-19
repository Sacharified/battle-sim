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
            class: 'god',
            hp: 100,
            maxHp: 100,
            team: 1,
            image: '../../../app/img/avatars/trex.png'
        });
        return this;
    },
  
    onCharacterCreate: function(model) {
        this.characterCreateModal.remove();


        this.playerMetaView = new CharacterMetaView({ model: App.Models.Player });
        this.$el.append(this.playerMetaView.render().$el);
        
        var teams = {
            
            one: new TeamCollection([
                App.Models.Player,
                {
                    name: 'trumpet',
                    class: 'baron',
                    hp: 100,
                    maxHp: 100,
                    team: 1,
                    image: 'app/img/avatars/trumpet.png'
                },
                {
                    name: 'putato',
                    class: 'mage',
                    hp: 100,
                    maxHp: 100,
                    team: 1,
                    image: 'app/img/avatars/putato.png'
                }
            ], { parse: true }),
            two: new TeamCollection([
                {
                    name: 'william',
                    class: 'tech',
                    hp: 100,
                    maxHp: 100,
                    team: 2,
                    image: 'app/img/avatars/bullgates.png'
                },
                {
                    name: 'papa bless',
                    class: 'mage',
                    hp: 100,
                    maxHp: 100,
                    team: 2,
                    image: 'app/img/avatars/vapenaysh.png'
                },
                {
                    name: 'georgie-boy',
                    class: 'dwarf',
                    hp: 100,
                    maxHp: 100,
                    team: 2,
                    image: 'app/img/avatars/costanza.png'
                }
            ], { parse: true })
        }
        this.createScene('battle', { teams: teams });
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
