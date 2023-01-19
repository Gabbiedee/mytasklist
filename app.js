// Define UI VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter= document.querySelector('#filter');
const taskInput= document.querySelector('#task');



  form.addEventListener('submit', addTask)
  

function addTask() {
  if (taskInput.value === '') {
    alert('Add a task')
    
  }
const li= document.createElement('li');
li.className='collection-item'
li.appendChild(document.createTextNode(taskInput.value))
const link= document.createElement('a');
link.className= 'delete-item secondary content'
link.innerHTML= '<i style="float: right" class="fa fa-trash"></i>'
li.appendChild(link);
taskList.appendChild(li);
taskInput.value= '';

console.log(li);
  
  event.preventDefault();
}


// remove task event
taskList.addEventListener('click', removeTask)

function removeTask(e) {
  
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}



// clear task
clearBtn.addEventListener('click', clearTask)

function clearTask() {
  taskList.innerHTML= ''
}

// filter through task

filter.addEventListener('keyup', filterTask);

function filterTask(e) {
const text= e.target.value.toLowercase();

document.querySelectorAll('.collecion-item').forEach(function (task) {
  const items = task.firstChild.textContent;
  if (items.toLowerCase().indexOf(text) != -1) {
    task.style.display = 'block';
  } else {
    text.style.display= 'None'
  }
});
  
}
