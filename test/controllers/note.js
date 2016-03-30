describe('Note Controller', function () {

    var $scope, deferred;

    beforeEach(module('app'));


    beforeEach(inject(function ($controller, $rootScope, $q, noteService) {
        $scope = $rootScope.$new();
        deferred = $q.defer();
        //noteService.getAll = function(){};
        spyOn(noteService, 'getAll').and.returnValue(deferred.promise);
        $controller('homeController', {
            $scope: $scope,
            noteService: noteService
        });
    }));

    it('Test note Controller', function () {
        deferred.resolve({data: 1});
        $scope.$apply();
        expect($scope.notes).toEqual(1);
    });
});
