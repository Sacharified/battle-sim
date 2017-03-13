import Backbone from 'backbone';
import Scene from './scene';
import TeamView from '../../components/team';
import TeamCollection from '../../../collections/team.js';

var Battle = Scene.extend({
    initialize: function(options) {
        Battle.__super__.initialize.apply(this, arguments);
        this.characters = options.characters;
        
        this.createTeams();
    },
    
    
    render: function() {
        this.html(this.template.render());
        this.teamViews = new Map();
        this.renderTeams();
        
        return this;
    },
    
    createTeams: function() {
        var teams = this.characters.groupBy('team');
        this.teams = teams.map((team) => {
            return new TeamCollection(team);
        });
    }
    
    renderTeams: function() {
        this.teams.forEach((team) => {
            var teamView = new TeamView({
                team: team
            });
            var team = team.getTeam(team.at(0));
            this.teamViews.add(team, teamView);
        });
    },
    
    
});

export default Battle;