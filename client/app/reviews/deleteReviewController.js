app.controller('DeleteReviewController', function ($scope, $routeParams, $q, $location, $http,  notifier) {

    $scope.deleteReview = function (review) {
        var deferred = $q.defer();

        $http.delete('/api/games/' + $routeParams.id + '/delete-review/:reviewID/', review)
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

