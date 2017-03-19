import Backbone from 'backbone';
import _ from 'underscore';
import Character from '../models/player';

var TeamCollection = Backbone.Collection.extend({
    model: Character,
    comparator: 'team',
    
    parse: function(res) {
        return res;
    },
    
    initialize: function(models, options) {
        TeamCollection.__super__.initialize.apply(this, arguments);
        console.log(this);
    },
    
    assignTeam: function(model) {
        let smallestTeam = this.smallestTeam();
        model.team = smallestTeam;
    },
    
    smallestTeam: function() {
        if(this.length === 0) {
            return 1;
        }
        
        let teams = this.groupBy(function(model) {
            console.log(model.attributes);
            return model.get('team');
        });
        
        console.log(teams);
        return teams[1].length <= teams[2].length ? 1 : 2;
    },
    
    getTeamCount: function(teamId) {
        return this.filter((char) => char.get('team') === teamId).length;
    }
});

export default TeamCollection;