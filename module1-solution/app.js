(function() {
'use strict';
    var EMPTY_DATA_MESSAGE = 'Please enter data first';
    var EMPTY_DATA_CLASS = 'text-danger';

    var GOOD_DATA_MESSAGE = 'Enjoy!';
    var GOOD_DATA_CLASS = 'text-success';

    var BAD_DATA_MESSAGE = 'Too much!';
    var BAD_DATA_CLASS = 'text-warning';

    angular.module('LunchCheck', []).controller('LunchCheckContoller', function($scope) {
        $scope.messageText = '';
        $scope.messageClass = '';
        $scope.updateMessage = function() {
            console.log($scope.dishes === '');
            if ($scope.dishes === '') {
                $scope.messageText = EMPTY_DATA_MESSAGE;
                $scope.messageClass = EMPTY_DATA_CLASS;
            } else {
                if (isNumberGood($scope.getDishesNumber())) {
                    $scope.messageText = GOOD_DATA_MESSAGE;
                    $scope.messageClass = GOOD_DATA_CLASS;
                } else {
                    $scope.messageText = BAD_DATA_MESSAGE;
                    $scope.messageClass = BAD_DATA_CLASS;
                }
            }
        };
        $scope.getDishesNumber = function() {
            return $scope.dishes.split(',').filter(function(str) {
                return str.trim() !== '';
            }).length;
        };
        function isNumberGood(number) {
            return number <= 3;
        }
    });
})();
