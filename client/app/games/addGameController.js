app.controller('AddGameCtrl', function($q, $scope, $location, notifier) {
    return {
        post: function (game) {
            var deferred = $q.defer();

            $http.post('/api/games/add-game', game).success(function (response) {
                if (response.success) {
                    notifier.success('Game added successfully!');
                    deferred.resolve(true);
                }
                else {
                    notifier.error('Failed to add game!');
                    deferred.resolve(false);
                }
            });

            return deferred.promise;
        }
    }
});

