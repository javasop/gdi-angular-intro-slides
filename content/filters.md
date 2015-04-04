## Filters
Serves the purpose of cleaning up our data.
Let's say we want to limit the text displayed to only 10 characters.

```
{{todo.name | limitTo:10}}
```

Note:
- Well that's all nice but what's with that date, tho?
sample custom filter
myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
});


## More Built-in Filters
[https://docs.angularjs.org/api/ng/filter](https://docs.angularjs.org/api/ng/filter)
