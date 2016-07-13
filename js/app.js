'use strict';

var app = angular.module('myApp',['ngRoute']);

app.
	config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/login',{templateUrl: 'partials/login.html', controller: 'loginCtrl'});
		$routeProvider.when('/dashboard',{templateUrl: 'partials/dashboard.html', controller: 'dashboardCtrl'});
		$routeProvider.when('/dashboard/registration',{templateUrl: 'partials/user_reg.html', controller: 'userRegCtrl'});
		$routeProvider.otherwise({redirectTo: '/dashboard'});
	}]);
app.
	run(function($rootScope,$location,loginService){

		var routesPermission = ['/dashboard'];
		var routesPermission2 = ['/dashboard/registration'];
		$rootScope.$on('$routeChangeStart',function(){
			if(routesPermission.indexOf($location.path())!=-1 )
			{
				var connected = loginService.islogged();
				connected.then(function(msg){
					if(!msg.data) $location.path('/login');



				});

			}
		});
		$rootScope.$on('$routeChangeStart',function(){
			if(routesPermission2.indexOf($location.path())!=-1 )
			{
				var connected = loginService.islogged();
				connected.then(function(msg){
					if(!msg.data) $location.path('/login');



				});

			}
		});
	});
