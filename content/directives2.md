## More Directives
Let's add more functionality to our todo app using Angularjs


### ngclass
Let's add a button 
```
<ul class='nav nav-tabs'>
    <li ng-class="{active:tab === 1}"><a href ng-click="tab = 1">Description</a></li>
    <li ng-class="{active:tab === 2}"><a href ng-click="tab = 2">Cast</a></li>
</ul>
```
Note:
Sets a dynamic class based on a value
