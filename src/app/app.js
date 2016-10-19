import angular from 'angular';

import '../style/app.css';

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

angular.module('byu', [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
