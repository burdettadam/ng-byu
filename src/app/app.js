import angular from 'angular';
import 'angular-ui-router';

import './app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let AppCtrl = ($scope) => {
  $scope.url = 'https://github.com/preboot/angular-webpack';
}

let AppConfig = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/hello')

  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the ng-byu hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}

angular.module('byu', ['ui.router'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(AppConfig)
