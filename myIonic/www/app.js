// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Faz3a', ['ionic',
                        'Faz3a.Auth',
                        'Faz3a.home',
                        'Faz3a.map',
                        'Faz3z.Profile',
                        'Faz3z.addLoan',
                        'Faz3a.index',
                        'Faz3a.Servces',
                        'ui.router'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('signin', {
      url: '/signin',
      templateUrl: 'js/templates/singin.html',
      controller:'Authcontroller'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'js/templates/signup.html',
    controller: 'Authcontroller'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'js/templates/map.html',
    controller: 'MapController'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'js/templates/home.html',
    controller: 'HomeController'
  })

  .state('home.borrow', {
          url: '/borrow',
          views: {
            'borrow-tab': {
              templateUrl: 'js/templates/borrow.html',
              controller: 'HomeController'
            }
          }
  })

  .state('home.borrowitem', {
          url: '/borrowitem',
          views: {
            'borrowitem-tab': {
              templateUrl: 'js/templates/borrowitem.html',
              controller: 'HomeController'
            }
          }
  })

  .state('home.lend', {
          url: '/lend',
          views: {
            'lend-tab': {
              templateUrl: 'js/templates/lend.html',
              controller: 'HomeController'
            }
          }
  })

  .state('userProfile', {
    url: '/userProfile',
    templateUrl: 'js/templates/userProfile.html',
    controller: 'userProfileController'
  })

  .state('addloan', {
    url: '/addloan',
    templateUrl: 'js/templates/addloan.html',
    controller: 'addLoanController'
  });

  $urlRouterProvider.otherwise('/signin');

 });

  // if none of the above states are matched, use this as the fallback


