import Backbone from 'backbone';
import _ from 'underscore';
import Scene from './scene';
import TeamView from '../../partials/battle/team';
import TeamCollection from '../../../collections/team.js';
var Battle = Scene.extend({
    initialize: function(options) {
        Battle.__super__.initialize.apply(this, arguments);
        
        this.teamOne = options.teams.one;
        this.teamTwo = options.teams.two;
        this.teams = [this.teamOne, this.teamTwo];
        this.teamViews = new Map();
        _.bindAll(this, 'renderTeams');
    },
    
    
    render: function() {
        this.$el.html(this.template.render());
        this.teamViews = new Map();
        this.renderTeams();
        
        return this;
    },
    
    renderTeams: function() {
        this.teams.forEach((team, index) => {
            var teamView = new TeamView({
                team: team
            });
            var team = index + 1;
            console.log(this);
            this.teamViews.set(team, teamView);
        });
    },
    
    
});

export default Battle;