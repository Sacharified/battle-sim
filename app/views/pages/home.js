import Backbone from 'backbone';
import _ from 'underscore';
import Component from '../../component';
import template from './home.html';
import ModalView from '../components/modal';
import CharacterCreateModal from '../forms/charactercreate';
import CharacterMetaView from '../layouts/charactermeta.js';

export default Backbone.View.extend({
    template,

    className: 'home',

    initialize: function() {
        this.template.registerPartial('nav', require('../partials/nav.html'));

        this.characterCreateModal = new CharacterCreateModal({
          model: App.Models.Player
        });

        _.bindAll(this, 'onCharacterCreate');
        this.characterCreateModal.on('character:created', this.onCharacterCreate);
    },
  
    render: function() {
        this.$el.html(this.template.render());
        this.$el.append(this.characterCreateModal.render().$el);
        this.characterCreateModal.setChar({
            name: 'dev',
            class: 'streetwalker'
        });
        return this;
    },
  
    onCharacterCreate: function(model) {
        this.characterCreateModal.remove();

        this.playerMetaView = new CharacterMetaView({ model: App.Models.Player });
        this.$el.append(this.playerMetaView.render().$el);
    }

});
