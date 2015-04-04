## Filters
Let's clean up that [date](https://docs.angularjs.org/api/ng/filter/date)
```
<div ng-controller="todoController as todo">
    <div>
        <h2>
            {{todo.item.name}}
            <span>{{todo.item.release | date:'mediumDate'}}</span>
        </h2>
        <h3>International Gross: ${{todo.item.gross}}<h3>
        <div>
            <p>{{todo.item.shortDescription}}</p>
        </div>
    </div>
</div>
```

Note:
- Well that's all nice but what's with that date, tho?
sample custom filter
myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
});


## Filters
And the revenue
```
<div ng-controller="todoController as todo">
    <div>
        <h2>
            {{todo.item.name}}
            <span>{{todo.item.release | date:'mediumDate'}}</span>
        </h2>
        <h3>International Gross: ${{todo.item.gross * 1000000 | currency:'$' }}<h3>
        <div>
            <p>{{todo.item.shortDescription}}</p>
        </div>
    </div>
</div>
```


## More Built-in Filters
[https://docs.angularjs.org/api/ng/filter](https://docs.angularjs.org/api/ng/filter)
