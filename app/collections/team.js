import Backbone from 'backbone';
import Character from '../models/player';

var TeamCollection = Backbone.Collection.extend({
    model: Character,
    
    initialize: function(models, options) {
        TeamCollection.__super__.initialize.apply(this, arguments);
        
        this.add([
            {
                name: 'foo',
                class: 'warrior'
            },
            {
                name: 'bar',
                class: 'mage'
            },
            {
                name: 'hello',
                class: 'world'
            }
        ]);
        console.log(this);
    }
});

export default TeamCollection;