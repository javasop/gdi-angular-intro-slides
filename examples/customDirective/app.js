/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('todo', [ ]);

app.controller('TodoController', function($scope){

});

app.directive('todoList', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoList.html',
        controller:function($scope){

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

        }
    };
});


app.directive('todoItem', function(){
    return{
        restrict: 'E',
        templateUrl: 'todoItem.html'
    };
});
