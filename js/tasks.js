document.addEventListener("DOMContentLoaded", getTasks())

function getTasks() {
  var request = new XMLHttpRequest();
	request.addEventListener("load", addTasks);
	request.open("GET", "tasks.json");
	request.responseType = "text";
	request.send();
}

function addTasks(event) {
  tasks = JSON.parse(this.responseText);
  var div = document.querySelector(".othertasks");
  console.log(tasks.todos[0].name);

  for(i in tasks.todos) {
    div.innerHTML +='<a href="#ToDoInfo"><div class="card p' + tasks.todos[i].priority + '"><div class="container ellipsis"><b>'
                  + tasks.todos[i].name + '</b><p>Priority rate: ' + tasks.todos[i].priority + '</p><input type="checkbox">DONE</div></div></a>'
  }
}

function otherTasks() {

  var data = new Array();
  var tasks = todos["todo"];

  data_ix = 0;

  for(var i in tasks) {
    console.log(tasks[i]);
    data[data_ix] = tasks[i].name;
    data_ix++;
    data[data_ix] = tasks[i].priority;
    data_ix++;
    data[data_ix] = tasks[i].description;
    data_ix++;
    data[data_ix] = tasks[i].deadline;
    data_ix++;
    data[data_ix] = tasks[i].tags;
    data_ix++;
  }
}
