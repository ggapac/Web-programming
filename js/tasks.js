document.addEventListener("DOMContentLoaded", getTasks())

function getTasks() {
  var request = new XMLHttpRequest();
	request.addEventListener("load", addTasks);
	request.open("GET", "./json/tasks.json");
	request.responseType = "text";
	request.send();
}

function addTasks(event) {
  var tasks = JSON.parse(this.responseText);
  var div = document.querySelector(".othertasks");
  console.log(tasks.todos[0].name);

  for(i in tasks.todos) {
    div.innerHTML +='<a href="#ToDoInfo" id="' + i + '" onclick=showInfo(this.id)><div class="card p' + tasks.todos[i].priority + '"><div class="container ellipsis"><b>'
                  + tasks.todos[i].name + '</b><p>Priority rate: ' + tasks.todos[i].priority + '</p><input type="checkbox">DONE</div></div></a>'
  }
}

function showInfo(id) {
  var idTask = id;
  var request = new XMLHttpRequest();
	request.addEventListener("load", function() {
    var tasks = JSON.parse(this.responseText);
    var modal = document.getElementById("ToDoInfo");
    modal.innerHTML = '<div><a class = "edit" href="#edit">Edit</a><a href="#close" title="Close" class="close">X</a>'
                    + '<form><h3>' + tasks.todos[idTask].name + '</h3><p>' + tasks.todos[idTask].description
                    + '</p><p>Deadline: ' + tasks.todos[idTask].deadline + '</p><p>Priority rate: '
                    + tasks.todos[idTask].priority + '</p><p>Tags: ' + tasks.todos[idTask].tags
                    + '</p><input type="checkbox">DONE</form></div>'
  });
	request.open("GET", "./json/tasks.json");
	request.responseType = "text";
	request.send();
}

function taskId(event, id) {
  console.log(idTask)
  var tasks = JSON.parse(this.responseText);
  var modal = document.getElementById("ToDoInfo");

  modal.innerHTML += '<div><a class = "edit" href="#edit">Edit</a><a href="#close" title="Close" class="close">X</a>'
                  + '<form><h3>' + tasks.todos[idTask].name + '</h3><p>' + tasks.todos[idTask].description
                  + '</p><p>Deadline: ' + tasks.todos[idTask].deadline + '</p><p>Priority rate: '
                  + tasks.todos[idTask].priority + '</p><p>Tags: ' + tasks.todos[idTask].tags
                  + '</p><input type="checkbox">DONE</form></div>'
}
