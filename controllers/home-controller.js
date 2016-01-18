weatherApp.controller('homeController', ['$scope', 'cityService', homeController]);

function homeController($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
};