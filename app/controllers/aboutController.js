(function () {
    'use strict';

    var injectParams = ['$scope'];

    var aboutController = function ($scope) {
        $scope.message = 'About!';
    };

    aboutController.$inject = injectParams;
    angular.module('app').controller('aboutController', aboutController);
})();