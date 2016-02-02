angular.module('applicationApp', ['ngAnimate', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('application', {
        url: '/application',
        templateUrl: 'application.html',
        controller: 'applicationController'
      })

      .state('application.car', {
        url: '/car',
        templateUrl: 'application-car.html'
      })

      .state('application.profile', {
        url: '/profile',
        templateUrl: 'application-profile.html'
      })

    $urlRouterProvider.otherwise('/application/car');
  })

  .controller('applicationController', function($scope) {

    $scope.formData = {};

    $scope.processForm = function() {

      console.log('APPLICATION SUBMISSION');
      alert($scope.formData);

    };

  });
