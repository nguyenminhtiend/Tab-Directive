/**
 * Created by Messi on 3/30/2016.
 */
(function () {

    var tab = function () {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function (scope, element, attrs, tabsCtrl) {
                tabsCtrl.addTab(scope);
            },
            template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
            '</div>',
            replace: true
        };
    };
    angular.module('app').directive('tab', tab);

}());