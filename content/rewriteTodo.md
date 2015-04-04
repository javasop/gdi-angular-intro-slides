## Todo App

Let's go back to our first example and rewrite it completely in Angularjs.


## Start with your Data

* define what data your want to have and bind it to the scope.
* design your html and add directives around it
* let Angular handle the rest



## Step1: our Data

```
    app.controller('TodoController', function($scope){
    
        $scope.todos = []
        $scope.currentTodo = ""
        
        $scope.addTodo = function(todo){
           $scope.todos.push(todo);
         }
         $scope.deleteTodo = function(todo){
            index = $scope.todos.indexOf(todo)
            $scope.todos.splice(index,1)
         }
    });
```



## Step2: Design your html
Write your html and spice it with some Directives to connect to your data.

```
<div class="todo" ng-controller="TodoController">

<input ng-model="currentTodo" id="list-input" placeholder="task"></input>

<button ng-click='addTodo(currentTodo)' id="submit">Add</button>

<ul id="list">

<li ng-repeat="todo in todos" ng-click="deleteTodo(todo)">
</li>

<!-- another way of deleteing would be -->
<li ng-repeat="todo in todos" ng-click="todos.splice($index,1)">
</li>

</ul>

</div>
```
