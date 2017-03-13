import Backbone from 'backbone';

var Character = Backbone.Model.extend({
    
    defaults: {
        "hp": 100,
        "attack": 10,
        "defense": 10,
        "inventory": {},
        "moves": new Map()
    },
    
    initialize: function(options) {
        Character.__super__.initialize.apply(this, arguments);
        this.on('change:name', () => console.log(this));
    }
});

export default Character;