import Backbone from 'backbone';
import _ from 'underscore';
import template from './charactermeta.html';

var CharacterMetaView = Backbone.View.extend({
    template,
    
    initialize: function(options) {
        this.model = options.model;
        
        _.bindAll(this, 'render');
        this.model.on('change', this.render);
    },
    
    render: function() {
        this.$el.append(this.template.render({
            character: this.model.attributes
        }));
        
        return this;
    }
});

export default CharacterMetaView;