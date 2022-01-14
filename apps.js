const todo =document.getElementById('do');
const add = document.getElementById('add');
const list = document.querySelector('#list');



add.addEventListener('click', function(){

 let li = document.createElement('li');
 li.className = 'list-group-item';
 li.innerHTML = todo.value;
 list.appendChild(li);
 todo.value = '';

})