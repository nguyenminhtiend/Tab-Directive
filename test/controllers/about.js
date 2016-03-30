describe('Hello World example ', function () {
    beforeEach(module('app'));

    describe('Test about controller',function(){ //describe your app name
        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('aboutController', {
                $scope: $scope
            });
        }));
        it('says hello world!', function () {
            expect($scope.message).toEqual("About page");
        });

    });
});
