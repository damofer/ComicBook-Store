"use strict";var app=angular.module("myApp",["ngRoute"]);app.config(["$routeProvider",function(t){t.when("/login",{templateUrl:"partials/login.html",controller:"loginCtrl"}),t.when("/dashboard",{templateUrl:"partials/dashboard.html",controller:"dashboardCtrl"}),t.when("/dashboard/registration",{templateUrl:"partials/user_reg.html",controller:"userRegCtrl"}),t.otherwise({redirectTo:"/dashboard"})}]),app.run(function(t,a,r){var o=["/dashboard"],e=["/dashboard/registration"];t.$on("$routeChangeStart",function(){if(-1!=o.indexOf(a.path())){var t=r.islogged();t.then(function(t){t.data||a.path("/login")})}}),t.$on("$routeChangeStart",function(){if(-1!=e.indexOf(a.path())){var t=r.islogged();t.then(function(t){t.data||a.path("/login")})}})});