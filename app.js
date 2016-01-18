// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });

});

// SERVICES
weatherApp.service('cityService', function () {

    this.city = "New York, NY";

});

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

weatherApp.controller('homeController', ['$scope', 'cityService', homeController]);

function homeController($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
}

//weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
//    
//    $scope.city = cityService.city;
//    
//}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', forecastController]);

function forecastController($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';

    $scope.weatherUrl = $resource('//api.openweathermap.org/data/2.5/forecast/daily?APPID=ba5424ca3f94432450390a74e1dfc5c1', {
        callback: 'JSON_CALLBACK'
    }, {
        get: {
            method: 'JSONP'
        }
    });

    $scope.weatherResult = $scope.weatherUrl.get({
        q: $scope.city,
        cnt: $scope.days
    });

    $scope.convertToFahrenheit = function (degK) {

        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000);
    }

    //console.log($scope.weatherResult);
}

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