import Backbone from 'backbone';

var Character = Backbone.Model.extend({
    
    defaults: {
        "hp": 100,
        "maxHp": 100,
        "attack": 10,
        "defense": 10,
        "inventory": {},
        "moves": new Map()
    },
    
    initialize: function(options) {
        Character.__super__.initialize.apply(this, arguments);
        this.on('change:name', () => console.log(this));
    },
    
    setHp: function(value) {
        if(value >= this.get('maxHp'))
            value = this.get('maxHp');
            
        if(value <= 0)
            value = 0;
            
        this.set('hp', value);
    },
    
    getHp: function() {
        return this.get('hp');
    }
});

export default Character;