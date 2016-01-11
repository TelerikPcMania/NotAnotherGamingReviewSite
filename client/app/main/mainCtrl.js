app.controller('MainCtrl', function($scope, cachedGames) {
    $scope.games = cachedGames.query();
    $scope.interval = 5000;

});
