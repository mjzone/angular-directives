angular.module('app', []);

angular.module('app').controller('mainCtrl', ['$scope',
    function($scope) {
        $scope.data = {
            message: "i have not been clicked"
        };

        $scope.clickHandler = function(p) {
            p.message = "Now i am clicked.";
        };
    }
]);

angular.module('app').directive('myClick', ['$parse',
    function($parse) {
        return {
            link: function(scope, el, attrs) {
                var fn = $parse(attrs['myClick']);
                el.on('click', function() {
                    scope.$apply(function() {
                        fn(scope);
                    });
                });
            }
        };
    }
])