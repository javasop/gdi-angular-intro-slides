## Controllers
Controllers are (from the name) what controls our html file and our data. <!-- .element: class="fragment" -->


## Controllers
First we need to add a controller to our app
```
(function(){
    var app = angular.module('todo', [ ]);

    app.controller('TodoController', function($scope){

    });
})();

```


## Controllers

Let's populate a list of todos here in our controller.
then assign the data to the scope variable
```
(function(){
    var app = angular.module('todo', [ ]);

    app.controller('TodoController', function($scope){
                $scope.myName = "Sam"
                $scope.todo= {mostImportant:"exercise"};
    });
})();
```



## Attaching the Controller
```
<div class="container" ng-controller="TodoController">
    <h1>Hi, {{myName}}.</h1>
    <h2 class="text-{{todo.mostImportant}}">
    Most Important thing you have to do is: {{todo.mostImportant}}
    </h2>
</div>
```



## Understanding Scope
The "scope" of the controller only works inside of the container

```
<div class="container" ng-controller="TodoController">
    <h1>Hi, {{myName}}.</h1>
    <h2 class="text-{{haveTodo.mostImportant}}">Your current status: {{haveTodo.mostImportant}}</h2>
</div>
{{myName}} <!-- doesnt't work! -->
```
