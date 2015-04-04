## More Directives
How about we display two different two todos for two different people

var myTodos

var herTodos

## Add Tabs
```html
<section>
    <ul class='nav nav-tabs'>
        <li><a href>Description</a></li>
        <li><a href>Cast</a></li>
    </ul>
</section>
```


## ngclick
```
<section>
    <ul class='nav nav-tabs'>
        <li><a href ng-click="tab = 1">Description</a></li>
        <li><a href ng-click="tab = 2">Cast</a></li>
    </ul>
    {{tab}}
</section>
```

Note:
ng-click is a new directive
when clicking on it, it takes an action (in this case changing the value of tab)


## Add panels
```
<section>
    <ul class='nav nav-tabs'>
    ...
    <div class="panel" ng-show="tab === 1">
        <h4>Description</h4>
        <blockquote>{{item.longDescription}}</blockquote>
    </div>
    <div class="panel" ng-show="tab === 2">
        <h4>Cast</h4>
        <table class='table'>
            <tr ng-repeat="member in item.cast">
                <td>{{member.name}}</td>
                <td>{{member.character}}</td>
            </tr>
        </table>
    </div>
</section>
```

Note:
using ng-show to test the value of tab


### nginit
Set an initial tab value
```
<section ng-init="tab=1">
```
Note:
Sets a value when loaded


### ngclass
Set the active tab
```
<ul class='nav nav-tabs'>
    <li ng-class="{active:tab === 1}"><a href ng-click="tab = 1">Description</a></li>
    <li ng-class="{active:tab === 2}"><a href ng-click="tab = 2">Cast</a></li>
</ul>
```
Note:
Sets a dynamic class based on a value



### This is starting to look a little ugly...
```
<section ng-init="tab=1">
    <ul class='nav nav-tabs'>
        <li ng-class="{active:tab === 1}"><a href ng-click="tab = 1">Description</a></li>
        <li ng-class="{active:tab === 2}"><a href ng-click="tab = 2">Cast</a></li>
    </ul>

    <div class="panel" ng-show="tab === 1">
        <h4>Description</h4>
        <blockquote>{{item.longDescription}}</blockquote>
    </div>
    <div class="panel" ng-show="tab === 2">
        <h4>Cast</h4>
        <table class='table'>
            <tr ng-repeat="member in item.cast">
                <td>{{member.name}}</td>
                <td>{{member.character}}</td>
            </tr>
        </table>
    </div>
</section>
```


### Move the logic into a controller
```
<section ng-controller="PanelController as panel">
    <ul class='nav nav-tabs'>
        <li ng-class="{active:panel.isTabSelected(1)}"><a href ng-click="panel.selectTab(1)">Description</a></li>
        <li ng-class="{active:panel.isTabSelected(2)}"><a href ng-click="panel.selectTab(2)">Cast</a></li>
    </ul>

    <div class="panel" ng-show="panel.isTabSelected(1)">
        <h4>Description</h4>
        <blockquote>{{item.longDescription}}</blockquote>
    </div>
    <div class="panel" ng-show="panel.isTabSelected(2)">
        <h4>Cast</h4>
        <table class='table'>
            <tr ng-repeat="member in item.cast">
                <td>{{member.name}}</td>
                <td>{{member.character}}</td>
            </tr>
        </table>
    </div>
</section>
```


### Move the logic into a controller
```
app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
        this.tab = setTab;
    };

    this.isTabSelected = function(checkTab){
        return this.tab === checkTab;
    };
});
```
