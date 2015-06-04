var app = angular.module('securityCam', ['ngMaterial', 'ui.router'])

	.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
  	$mdThemingProvider.theme('default')
    	.primaryPalette('light-blue')
    	.accentPalette('blue')

  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  		.state('dashboard', {
  			url: '/dashboard',
  			templateUrl: 'js/Templates/DashTmpl.html',
  			controller: 'DashCtrl'
  		})
  		.state('admin', {
  			url: '/admin',
  			templateUrl: 'js/Templates/AdminTmpl.html',
  			controller: 'AdminCtrl'
  		})

  }]) // end config //
