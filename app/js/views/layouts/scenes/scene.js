import Backbone from 'backbone';
import template from '../../templates/layouts/scenes/scene.html';

var Scene = Backbone.View.extend({
    template,
    
    className: 'scene-inner',

    render: function() {
        this.$sceneContainer = this.$('.scene-container');
        Scene.__super__.render.apply(this, arguments);
        console.log(this.$sceneContainer);
        return this;
    }
    
    
});

export default Scene;