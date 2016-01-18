weatherApp.service('cityService', function () {

    this.city = 'New York, NY';

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {
        
        var weatherUrl = $resource('//api.openweathermap.org/data/2.5/forecast/daily?APPID=ba5424ca3f94432450390a74e1dfc5c1', {
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });

        return weatherUrl.get({
            q: city,
            cnt: days
        });
    };

}]);