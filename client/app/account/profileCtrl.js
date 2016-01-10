app.controller('ProfileCtrl', function($scope, $location, auth, identity) {
    $scope.user = {
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName,
        userName: identity.currentUser.username
    }

    $scope.update = function(user) {
        auth.update(user).then(function() {
            $scope.firstName = user.firstName;
            $scope.lastName = user.lastName;
            $scope.userName = user.username;
            $location.path('/');
        });
    }
});