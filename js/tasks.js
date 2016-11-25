document.addEventListener("DOMContentLoaded", getTasks())

function getTasks() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    console.log("la")
    if (request.readyState == 4) {
      console.log("la")
      addTasks(JSON.parse(request.responseText));
    }
  };
  request.open("GET", "http://127.0.0.1:8887/json/tasks.json");
  request.setRequestHeader("Access-Control-Allow-Origin", "*");
  request.send();
}

function addTasks(data) {
  console.log("lala")
}

function otherTasks() {
  var div = document.querySelector(".othertasks");
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
