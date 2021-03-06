(function () {
    'use strict';

    var emmefxApp = angular.module('emmefxApp', ['ui.router','ApiConnect','angular.css.injector','ultimateDataTableServices','oc.lazyLoad','chartistAngularDirective','menuToogle','ngStorage','ngResource','toastr']);
    emmefxApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider , $ocLazyLoadProvider ) {


        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/account-login.html',
                controller: 'loginctrl'
            })
				
			.state('monitor', {
                url: '/monitor',
                templateUrl: 'views/monitor.html',
                controller: 'monitorCtrl'
            })
			
			.state('home', {
                url: '/home',
                templateUrl: 'views/dashboard-ico.html',
                controller: 'homectrl'
            })
			
			.state('users', {
                url: '/users',
                templateUrl: 'views/users.html',
                controller: 'usersctrl'
            })
			
			.state('newuser', {
                url: '/newuser',
                templateUrl: 'views/newuser.html',
                controller: 'newuserctrl'
            })
			
			.state('edituser', {
                url: '/edituser/:id',
                templateUrl: 'views/edituser.html',
                controller: 'edituserctrl'
            })
		
			.state('accounts', {
                url: '/accounts',
                templateUrl: 'views/accounts.html',
                controller: 'accountsctrl'
            })
			
			.state('clients', {
                url: '/clients',
                templateUrl: 'views/clients.html',
                controller: 'clientsctrl'
            })
			
			.state('wallet', {
                url: '/wallet',
                templateUrl: 'views/wallet.html',
                controller: 'walletctrl'
            })
			
			.state('transactions', {
                url: '/transactions',
                templateUrl: 'views/transactions.html',
                controller: 'transactionsctrl'
            })
			
			.state('buy', {
                url: '/buy',
                templateUrl: 'views/buy-ico.html',
                controller: 'buyctrl'
            })
			
			.state('details', {
                url: '/details',
                templateUrl: 'views/buy-details.html',
                controller: 'detailsctrl'
            })
			
			.state('pool', {
                url: '/pool',
                templateUrl: 'views/pool.html',
                controller: 'poolctrl'
            })
		
         
    });
	emmefxApp.config(['$qProvider', function($qProvider){
   $qProvider.errorOnUnhandledRejections(false);

}]);
	emmefxApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = true;
}]);
    emmefxApp.run(['$rootScope', 
    function ($rootScope) {

       

    }]);
	
})();
