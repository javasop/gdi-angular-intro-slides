/**
 *
 * Created by oalghanmi on 3/19/15.
 */
$(document).ready(function() {

    listArray = [];
    input = $('#list-input');
    submitButton = $('#submit');
    list = $('#list');
    deleteButton = $('.delete');

    addToList = function(item){

        listArray.push(item)
        updateDisplay()

    }

    deleteFromList = function(item){



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

    $(document).on('click','#submit',function(el){


    })

    $(document).on('click','.delete', function(el) {
        todo = el.currentTarget;

        sibling = $(todo).siblings('li')

        console.log(sibling[0].innerHTML)

        deleteFromList()
    })


    //$('#submit').submit( function(e) {
    //    e.preventDefault();
    //    return false;
    //});

})
