// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);




// DIRECTIVES
weatherApp.directive('weatherReport', function(){
    
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});

// CONTROLLERS
//weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
//    
//    $scope.city = cityService.city;
//    
//    $scope.$watch('city', function() {
//       cityService.city = $scope.city; 
//    });
//    
//}]);



//weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
//    
//    $scope.city = cityService.city;
//    
//}]);



/*
'use strict';

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/#/forecast', {
        templageUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast', {
        templageUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    ;
});

weatherApp.service('cityService', function(){
    this.city = 'New York, NY';
});

weatherApp.controller('homeController', ['$scope', '$route', '$resource', 'cityService', function($scope, $route, $resource, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
}]);

function homeController($scope, $route, $resource, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
};

weatherApp.controller('forecastController', ['$scope', '$route', '$resource', 'cityService', function($scope, $route, $resource, cityService){
    
     $scope.city = cityService.city;
    
}]);

function forecastController($scope, $route, $resource, cityService){
    
    $scope.city = cityService.city;
    
};

*/