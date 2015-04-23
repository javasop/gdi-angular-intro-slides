/**
 * Created by osama on 4/4/2015.
 */
var app = angular.module('turing', [ ]);

app.controller('UserController', function($scope){


});

app.directive("todoList",function(){

    return {
        restrict:"E",
        templateUrl:"todoList.html",
        scope:{},
        controller:function($scope){

            $scope.todoList = []

            $scope.currentTodo = ""

            $scope.addTodo = function(){

                if($scope.currentTodo != "") {

                    var todoObject = {
                        name:$scope.currentTodo,
                        done:false
                    }
                    $scope.todoList.push(todoObject)
                }
            }
            $scope.deleteTodo = function(index){
                $scope.todoList.splice(index,1);
            }
            $scope.toggleFinish = function(index){


            }

        }
    }

})

app.directive("todoItem",function(){

    return {
        restrict:"E",
        templateUrl:"todoItem.html"
    }


})

