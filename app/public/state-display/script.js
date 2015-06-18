angular.module('app', []);

angular.module('app').controller('mainCtrl', ['$scope',
    function($scope) {
        $scope.user1 = {
            name: 'manoj',
            selected: false
        };
    }
]);

angular.module("app").directive('userTile', [

    function() {
        return {
            restrict: 'E',
            scope: {
                user: '=user'
            },
            templateUrl: 'userTile.html',
            controller: function() {

            }
        };
    }
]);

angular.module("app").directive('userClickSelect', [

    function() {
        return {
            link: function(scope, el, attrs) {
                console.log(scope);
                el.on('click', function() {
                    scope.user.selected = !scope.user.selected;
                    scope.$apply();
                });

            }
        };
    }
]);