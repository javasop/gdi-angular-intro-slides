/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('todo', [ ]);

app.controller('TodoController', function($scope){

    $scope.todos = {
        mostImportant:'exercise',
        leastImportant:'play video games'
    };
    $scope.eatingHealthy = false

});
