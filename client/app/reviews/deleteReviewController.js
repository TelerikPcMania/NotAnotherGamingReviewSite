app.controller('DeleteReviewController', function ($scope, $routeParams, $q, $location, $http,  notifier, cachedGames) {

    $scope.game = cachedGames.query().$promise.then(function (collection) {
        collection.forEach(function (game) {
            if (game._id === $routeParams.id) {
                $scope.game = game;
            }
        })
    });

    $scope.reviews = $scope.game.reviews;

    $scope.deleteReview = function (review) {
        var deferred = $q.defer();

        $http.delete('/api/games/' + $routeParams.id + '/delete-review/' + $routeParams.review_id, review)
            .success(function (response) {
                if (response.success) {
                    notifier.success('Review Successfully deleted!');
                    deferred.resolve(true);

                }
                else {
                    notifier.error('Failed to add delete review!');
                    deferred.resolve(false);
                }
            });

        return deferred.promise;
    }

});

