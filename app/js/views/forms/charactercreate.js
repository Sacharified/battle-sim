import Backbone from 'backbone';
import _ from 'underscore';
import template from '../templates/forms/charactercreate.html';
import PlayerModel from '../../models/player';
import Component from '../../component';

var CharacterCreateForm = Backbone.View.extend({
    template,
    
    className: 'char-create',
    events: {
        'click .js-submit' : 'submit'
    },
    
    initialize: function(options) {
        if(_.isUndefined(options.model))
            this.model = new PlayerModel();
    },
    
    render: function() {
        this.$el.html(this.template.render({ msg: 'Create Your Character:' }));
        
        return this;
    },
    
    setChar: function(data) {
        this.model.set(data);
        console.log(this.model.attributes);
        this.trigger('character:created', this.model);
    },
    
    submit: function(e) {
        e.preventDefault();
        var name = this.$('input[name="name"]').val();
        var klass = this.$('select[name="class"]').val();
        console.log(this.model.attributes);
        this.model.set('name', name);
        this.model.set('class', klass);
        this.trigger('character:created', this.model);
        console.log(this.model);
    }
});

export default CharacterCreateForm;