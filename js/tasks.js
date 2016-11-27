document.addEventListener("DOMContentLoaded", getData())

function getData() {
  var request = new XMLHttpRequest();
	request.addEventListener("load", addTasks);
	request.open("GET", "./json/tasks.json");
	request.responseType = "text";
	request.send();

  var request = new XMLHttpRequest();
	request.addEventListener("load", addTags);
	request.open("GET", "./json/tags.json");
	request.responseType = "text";
	request.send();
}

function addTasks(event) {
  var tasks = JSON.parse(this.responseText);
  var div = document.querySelector(".othertasks");

  for(i in tasks.todos) {
    div.innerHTML += '<div class="card p' + tasks.todos[i].priority + '" id="' + i + '"onclick=showInfo(this.id)><a href="#ToDoInfo"'
                  + 'style="color:#333333; font-size:20px;"> &#9700;</a>'
                  + '<div class="container ellipsis"><b>' + tasks.todos[i].name + '</b><p>Priority rate: '
                  + tasks.todos[i].priority + '</p><input type="checkbox">DONE</div></div>'
  }
}

function addTags(event) {

  var tags = JSON.parse(this.responseText);
  var div = document.querySelector(".tags");
  console.log(div)

  div.innerHTML = '<a class ="add" href="#addTag">+</a><h3>TAGS</h3><ul>';

  for (i in tags.tags) {
    if (tags.tags[i].name == "All") {
      div.innerHTML += '<li><input type="checkbox" checked>' + tags.tags[i].name + '</li>';
    }
    else {
      div.innerHTML += '<li><input type="checkbox">' + tags.tags[i].name + '</li>';
    }
  }
  div.innerHTML += '</ul>';
}

function showInfo(id) {
  console.log(id);
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
