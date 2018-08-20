//Create list when button clicked
document.getElementById('submitBtn').addEventListener('click', function() {
  //store input to item
  var item = document.getElementById('toDoInput').value;
  //when you type in input box, it create text note. store value as text
  var text = document.createTextNode(item);
  //create li element
  var newItem = document.createElement('li');
  var list = document.getElementById('toDoList')

  newItem.appendChild(text);
  //newItem(list) is appended to toDolist(ol)
  list.appendChild(newItem);


  var result = document.getElementById('result')
  var clearBtn = document.getElementById('clearBtn')

  //remove list and input text when clear butoon clicked
  //this function needs to be nested inside submit function
  clearBtn.addEventListener('click', function(event) {
    if(event.target.id == 'clearBtn') {
    //removeChild has to be same as appendChild above otherwise get error
    list.removeChild(newItem)
    //(var)item='' does now work. I think it is because input text has changed.
    // you need to get input element again
    document.getElementById('toDoInput').value = ''
    }
  })
})
