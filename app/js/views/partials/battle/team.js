import Backbone from 'backbone';
import CharacterView from './character';

var TeamView = Backbone.View.extend({
    className: 'battle-team',
    
    initialize: function(options) {
        TeamView.__super__.initialize.apply(this, arguments);
        
        this.collection = options.team;
        this.charViews = new Map();
    },
    
    render: function() {
        this.$el.html('<ul class="team-list js-team-list"></ul>');
        this.renderChars();
        return this;
    },
    
    getTeam: function(id) {
        return this.get(id).get('team');
    },
    
    renderChars: function() {
        this.collection.each((character, index, collection) => {
            this.renderChar(character);
        });
    },
    
    renderChar: function(model) {
        let charTeam = model.get('team');
        let $teamList = this.$('.team-list');
        let charView = new CharacterView({ model: model });
        this.charViews.set(model.id, charView);
        
        $teamList.append(charView.render.$el);
    }
});

export default TeamView;