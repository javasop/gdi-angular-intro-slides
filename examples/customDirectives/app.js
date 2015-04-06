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
        scope:{},
        controller:function($scope){


 $scope.$watch('currentTodo',function(newVal,oldVal){
 	if(newVal.length < 5){
 		$scope.error = "Wrong input"
 	}
 	else{
 		$scope.error = ""
 	}
  })

        $scope.todoList = []

		$scope.addToList = function(){
			todoObject = {
			name:$scope.currentTodo,
			done:true
		};
		$scope.todoList.push(todoObject);
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