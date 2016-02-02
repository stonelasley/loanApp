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

      .state('application.confirmation', {
        url: '/confirmation',
        templateUrl: 'application-confirmation.html'
      });

    $urlRouterProvider.otherwise('/application/car');
  })

  .controller('applicationController', function($scope) {

    $scope.formData = {};

    $scope.processForm = function() {

      console.log('APPLICATION SUBMISSION');
      alert($scope.formData);

      //TODO

      //validation
      //Flash message
      //validation on previous slides?? prevent progression or send back on submit?
      //Edumunds API Service
      //Form Service to submit

      //SuccessCallback
      //Flash Message
      //set form pristine

    };

  });
