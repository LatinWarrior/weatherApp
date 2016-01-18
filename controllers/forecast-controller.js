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
};