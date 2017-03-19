import Backbone from 'backbone';
import _ from 'underscore';
import HitPointsBar from '../../components/valuebar';
import template from '../../templates/partials/battle/character.html';

var CharacterBattleView = Backbone.View.extend({
    template,
    tagName: 'li',
    className: 'team-item',
    
    events: {
        'click .battle-character' : 'onCharClick'
    },
    
    initialize: function(options) {
        CharacterBattleView.__super__.initialize.apply(this, arguments);
        console.log('initchar');
        this.hpBar = new HitPointsBar({
            model: this.model,
            maxKey: 'maxHp',
            valueKey: 'hp'
        });
        _.bindAll(this, 'onCharClick', 'render');
        
        this.model.on('change', this.render);
    },
    
    render: function() {
        CharacterBattleView.__super__.render.apply(this, arguments);
        this.$el.html(this.template.render({
            character: this.model.attributes
        }));
        this.$char = this.$('.js-character');
        this.$hpBar = this.$('.js-hp-bar').append(this.hpBar.render().$el);
        
        return this;
    },
    
    
    onCharClick: function(e) {
        e.preventDefault();
        console.log(this);
    },
    
    setHp: function(value) {
        this.model.setHp(value);
    },
    
    getHp: function() {
        return this.model.get('hp');
    },
    
    getMaxHp: function() {
        return this.model.get('maxHp');
    }
});

export default CharacterBattleView;