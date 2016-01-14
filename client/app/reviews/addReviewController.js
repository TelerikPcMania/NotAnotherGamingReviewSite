app.controller('AddReviewController', function ($scope, $routeParams, $q, $location, $http,  notifier, cachedGames) {

    $scope.addReview = function (review) {
        var deferred = $q.defer();

        $http.post('/api/games/' + $routeParams.id + '/add-review', review)
            .success(function (response) {
                if (response.success) {
                    notifier.success('Review Successfully added to Game!');
                    deferred.resolve(true);

                }
                else {
                    notifier.error('Failed to add review to the game!');
                    deferred.resolve(false);
                }
            });

        return deferred.promise;
    }

});

