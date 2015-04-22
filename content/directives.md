## Directives: the spices of Angularjs
Angularjs provides a lot of directives that add functionality to our html <!-- .element: class="fragment" -->
Let's add more data to our application

```
app.controller('UserController', function($scope){

    $scope.students =[

    {
        "cohort":"1410",
        "students": [
            "jane",
            "john",
            "jimmy",
            "jones"
        ],
        "color":"blue"
    },
    {
        "cohort":"1412",
        "students": [
            "a",
            "b",
            "c",
            "d"
        ],
        "color":"red"
    }
]

});
```



## ngshow directive
ngShow: show the html element if the value provided is true

```
<div ng-controller="TodoController">
    <div>
    
    </div>
</div>
```
<!-- .element: class="fragment" -->


## ngHide Directive

```
<div ng-controller="TodoController">
    <div>
    </div>
</div>
```
<!-- .element: class="fragment" -->


## Todo list

```
app.controller('TodoController', function(){
    var todos = [
        "Eat",
        "Run",
        "Run",
        "Exercise",
        "Move",
        "Don't just sit here"
    ];
    $scope.todos = todos;
});
```

Note: Bad way: todo.item[0].name, etc.


## NgRepeat

very important directive.

previous todo application could be rewritten using ngRepeat.

```
<div>
    <h2>
    List of Todos
    </h2>
    
    <ul>
    
    <li ng-repeat="todo in todos" >
    
    {{todo}}
    
    </li>
    
    </ul>
    
</div>
```
Note: show good way
