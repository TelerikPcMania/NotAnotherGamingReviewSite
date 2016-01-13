app.controller('GameDetailsCtrl', function ($scope, $routeParams, cachedGames, $q, $location, $http, notifier) {

    $scope.game = cachedGames.query().$promise.then(function (collection) {
        collection.forEach(function (game) {
            if (game._id === $routeParams.id) {
                $scope.game = game;
            }
        })
    });
    $scope.rateGame = function (rating) {
        console.log(rating);
        var deferred = $q.defer();

        $http.put('/api/games/:id', rating).success(function (response) {
            if (response.success) {
                notifier.success('Game rated successfully!');
                deferred.resolve(true);
            }
            else {
                notifier.error('Failed to rate the game!');
                deferred.resolve(false);
            }
        });

        return deferred.promise;
    }

});
