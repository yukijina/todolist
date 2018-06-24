function myClick() {
  //store input to item
  var item = document.getElementById('toDoInput').value;
  //when you type in input box, it create text note. store value as text
  var text = document.createTextNode(item);
  //create li element
  var newItem = document.createElement('li');

  newItem.appendChild(text);
  //newItem(list) is appended to toDolist(ol)
  document.getElementById('toDoList').appendChild(newItem);

}
