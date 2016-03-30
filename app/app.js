"use strict";
var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home/');

    $stateProvider
        .state('home', {
            url: '/home/:tab',
            templateUrl: 'app/partials/home.html',
            controller: 'homeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/partials/about.html',
            controller: 'aboutController'
        });
}]);
