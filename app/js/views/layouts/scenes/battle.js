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
        this.className += ' battle-scene';
        
        _.bindAll(this, 'renderTeams');
    },
    
    
    render: function() {
        Battle.__super__.render.apply(this, arguments);
        this.$el.html(this.template.render());
        this.teamViews = new Map();
        this.renderTeams();
        
        return this;
    },
    
    renderTeams: function() {
        console.log(this.teams);
        this.teams.forEach(function(team, index) {
            console
            let teamId = team.at(0).get('team');
            let teamView = new TeamView({
                team: team,
                teamId: teamId
            });
            console.log(teamId);
            this.teamViews.set(team, teamView);
            this.$('.scene-container').append(teamView.render().$el);
        }, this);
    },
    
    
});

export default Battle;