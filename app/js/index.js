require('backbone-forms');

import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Router from './router';
import AppModel from './app';
import HomePageView from './views/pages/home';

// Define your master router on the application namespace and trigger all
// navigation from this instance.

// Trigger the initial route and enable HTML5 History API support, set the root
// folder to '/' by default.
Backbone.history.start({ pushState: true, root: '/' });

App = new AppModel();
App.Views.Home = new HomePageView();

var $container = $('#main');
$container.html(App.Views.Home.render().$el);

const router = new Router(App);
