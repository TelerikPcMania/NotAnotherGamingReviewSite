app.controller('AddReviewController', function ($scope, $routeParams, $q, $location, $http,  notifier, cachedGames) {

    $scope.reviews = cachedGames.query().$promise.then(function (collection) {
        collection.forEach(function (game) {
            if (game._id === $routeParams.id) {
                $scope.reviews = game.reviews;
            }
        })
    });



});

