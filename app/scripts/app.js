(function() {

    function config($locationProvider, $stateProvider) {
            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false
                 });

            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HomeCtrl as home',
                    templateUrl: '/templates/home.html'
                });

            $stateProvider
                .state('Room', {
                url: '/Room',
                templateUrl: '/templates/home.html'
                controller: function($scope) {
                  $scope.room = ['all'];
                }
               });
        }

    angular
        .module('projectName', ['ui.router', 'firebase'])
        .config(config);
})();
