/**
 * Created by Messi on 3/30/2016.
 */
(function () {

    var controller = ["$scope", function ($scope) {
        $scope.tabs = [];

        $scope.select = select;

        $scope.removeTab = function (index) {
            $scope.tabs.splice(index, 1);
        };
        this.addTab = function (tab) {
            $scope.tabs.push(tab);
            setSelectByIndex();
        }
        function select(index){
            angular.forEach($scope.tabs, function (tab) {
                tab.selected = false;
            });
            $scope.tabs[index].selected = true;
        }
        function setSelectByIndex(){
            if($scope.tabSelected){
                var tabSelected = parseInt($scope.tabSelected, 10) - 1;
                if($scope.tabs.length > tabSelected){
                    select(tabSelected);
                }
            }else{
                select(0);
            }
        }
    }];
    var injectParams = ['$compile'];

    var tabs = function ($compile) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                tabSelected: '='
            },
            controller: controller,
            templateUrl: 'app/templates/tabs.html',
            replace: true,
            link: function (scope, element, attr, ctrl, transclude) {
                scope.addTab = function () {
                    var newTab = angular.element('<tab title="New tab">New tab</tab>');
                    element.append(newTab);
                    $compile(newTab)(scope);
                }
            }
        };
    };
    tabs.$inject = injectParams;
    angular.module('app').directive('tabs', tabs);

}());