## Angular way

What we had to do in the previous example:

- create list element in code and insert them
- update display everytime we make a change
- We are not focusing on the data in our application which is the list of tasks.


## Angular Way

- We can re-write our previous application in a couple of lines in Angualrjs.
- In the next Example, we will use directives, binding and modules to reconstruct our application.


## Step 1: Controllers: where data resides

- data is the center of attention in an angularjs app.

Bind to your data here. Talk about modules a little.

```
    addToList = function(item){

        listArray.push(item)
        updateDisplay()

    }

    deleteFromList = function(item){

        index = listArray.indexOf(item)
        if(index > -1){
            listArray.splice(index,1);
        }
        updateDisplay()

    }
```


## Step2: Use ng-repeat

Let's display our data using ng-repeat. Talk about directives and how they flavor our html