(function () {
    'use strict';

    var injectParams = ['$scope', '$stateParams'];

    var homeController = function ($scope, $stateParams) {
        $scope.tabSelected = $stateParams.tab;
    };

    homeController.$inject = injectParams;
    angular.module('app').controller('homeController', homeController);
})();