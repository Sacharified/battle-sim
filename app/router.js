import Backbone from 'backbone';
import HomePage from './views/pages/home';

const routes = {
  '': 'index'
};

// Defining the application router.
class Router extends Backbone.Router {
  constructor(app) {
    super({ routes });
    console.log(app);
  }

  index() {
    console.log('index');
    App.Views.Home.show();
  }
}

export default Router;
