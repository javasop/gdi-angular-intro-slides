/**
 *
 * Created by oalghanmi on 3/19/15.
 */
$(document).ready(function() {

    listArray = [];
    input = $('#list-input');
    submitButton = $('#submit');
    list = $('#list');

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

    updateDisplay = function(){

        list.empty()
        for(i=0;i<listArray.length;i++){
            item = listArray[i];
            listItem = $('<div class=".container"><li id='+item+'>' + item +'</li>'+'<button class="delete">Delete</button></div>');
            list.append(listItem)
        }

    }


    //button to add and delete from list
    submitButton.click(function () {
        value = input.val();
        addToList(value)

    })

    //delete button
    // it's done this way instead of the way the previous button is done becuase
    // we need a delete button on each item we add
    $(document).on('click','.delete', function(el) {
        todo = el.currentTarget;

        sibling = $(todo).siblings('li');

        name = sibling[0].innerHTML;

        deleteFromList(name);

    })


})
