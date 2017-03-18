import Backbone from 'backbone';
import CharacterView from './character';

var TeamView = Backbone.View.extend({
    className: 'battle-team',
    
    initialize: function(options) {
        this.collection = options.team;
        this.charViews = new Map();
    },
    
    render: () => {
        this.$el.html('<ul class="team-list js-team-list"></ul>');
        this.renderChars();
        return this;
    },
    
    getTeam: function(id) {
        return this.get(id).get('team');
    },
    
    renderChars: function() {
        this.team.each((character, index, collection) => {
            this.renderChar(character);
        });
    },
    
    renderChar: function(model) {
        let charTeam = model.get('team');
        let $teamList = this.$('.team-list');
        let charView = new CharacterView({ model: model });
        this.charViews.add(model.id, charView);
        
        $teamList.append(charView.render.$el);
    }
});

export default TeamView;