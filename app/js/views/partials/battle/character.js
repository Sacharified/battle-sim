import Backbone from 'backbone';

var CharacterBattleView = Backbone.View.extend({
    render: () => {
        this.$el.html('<div class="battle-character js-character"></div>');
        this.$char = this.$('.js-character');
        
        
        return this;
    }
});

export default CharacterBattleView;