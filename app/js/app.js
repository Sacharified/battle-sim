import Backbone from 'backbone';
import Player from './models/player';

class App extends Backbone.Model {
    constructor(options) {
        super({options});
        
        this.Views = {};
        this.Models = {};
        this.Collections = {};
        this.Models.Player = new Player();
    }
}

export default App;