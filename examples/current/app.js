/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('turing', []);

app.controller('UserController', function($scope){

    $scope.todoList = []

    $scope.currentTodo = ""

    $scope.add = function(){

        var todoObject = {
            name:$scope.currentTodo,
            finished:false
        }
        if($scope.currentTodo != ""){
        $scope.todoList.push(todoObject);
        }
        $scope.currentTodo = ""
    }
    $scope.delete = function(index){

        $scope.todoList.splice(index,1)

    }
    $scope.finish = function(index){

        var item = $scope.todoList[index];
        item.finished = !item.finished;

    }


});

