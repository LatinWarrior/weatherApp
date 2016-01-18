weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', forecastController]);

function forecastController($scope, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);    

    $scope.convertToFahrenheit = function (degK) {

        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000);
    }

    //console.log($scope.weatherResult);
};