'use strict';

angular.module('myAppDirectives', ['myAppServices']).directive('myFunnyButton', ['elementAreaCalculator', function ($elementAreaCalculator) {
    return {
        scope: {
            label: '=',
            siteBackgroundColor: '='
        },
        restrict: 'E',
        templateUrl: 'myFunnyButton.html',
        link: function (scope, element) {
            var height,
                width;
            height = element[0].offsetHeight;
            width = element[0].offsetWidth;
            scope.elementArea = $elementAreaCalculator(height, width)
        },
        controller: ['$scope', function ($scope) {
            $scope.toggleColor = function toggleColor() {
                if ($scope.siteBackgroundColor === 'red') {
                    $scope.siteBackgroundColor = '';
                } else {
                    $scope.siteBackgroundColor = 'red'
                }

            }
        }]
    };
}]);