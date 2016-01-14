app.controller('GameDetailsCtrl', function ($scope, $routeParams, $q, $location, $http,  notifier, cachedGames) {

    $scope.game = cachedGames.query().$promise.then(function (collection) {
        collection.forEach(function (game) {
            if (game._id === $routeParams.id) {
                $scope.game = game;
            }
        })
    });

    $scope.reviews = $scope.game.reviews;

    $scope.rateGame = function (rating) {
        var deferred = $q.defer();


        $http.put('/api/games/' + $routeParams.id, rating)
            .success(function (response) {
                notifier.success('Game rated successfully!');
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
