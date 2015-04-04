/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('todo', [ ]);

app.controller('TodoController', function($scope){

    $scope.todos = []
    $scope.currentTodo = ""

    $scope.addTodo = function(todo){
        todoObject = {
            name:todo,
            done:false
        }
        $scope.todos.push(todoObject);
    }
    $scope.deleteTodo = function(todo){
        index = $scope.todos.indexOf(todo)
        $scope.todos.splice(index,1)
    }
});
