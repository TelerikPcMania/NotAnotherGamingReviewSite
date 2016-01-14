var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        .when('/games', {
            templateUrl: '/partials/games/games-list',
            controller: 'GamesListCtrl'
        })
        .when('/games/:id', {
            templateUrl: '/partials/games/game-details',
            controller: 'GameDetailsCtrl'
        })

        .when('/games/:id/add-review', {
            templateUrl: 'partials/reviews/add-review',
            controller: 'AddReviewController'
        })

        .when('/add-game', {
            templateUrl: '/partials/games/add-game',
            controller: 'AddGameCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/403',{
            templateUrl: '/partials/main/403'
        })
        .otherwise({
            templateUrl: '/partials/main/404',
            controller: 'PageNotFoundCtrl'
        })
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection == '403') {
            $location.rejectPath = current.templateUrl.split('/').pop();
            $location.path('/403');
        }
        if(rejection == 'adminRole'){
            $location.path('/');
        }
    })
});