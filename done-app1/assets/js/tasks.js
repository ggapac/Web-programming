console.log("Aaaaaa");

/*function showInfo(id) {
  idTask = id;
  var request = new XMLHttpRequest();
	request.addEventListener("load", function() {
    var tasks = JSON.parse(this.responseText);
    var modal = document.getElementById("ToDoInfo");
    modal.innerHTML = '<div><a class = "edit" href="#edit" onclick="values()">Edit</a><a href="#close" title="Close" class="close">X</a>'
                    + '<h3>' + tasks.todos[idTask].name + '</h3><p>' + tasks.todos[idTask].description
                    + '</p><p>Deadline: ' + tasks.todos[idTask].deadline + '</p><p>Priority rate: '
                    + tasks.todos[idTask].priority + '</p><p>Tags: ' + tasks.todos[idTask].tags
                    + '</p></div>'
  });
	request.open("GET", "./json/tasks.json");
	request.responseType = "text";
	request.send();
}*/

/*function taskId(event, id) {
  console.log(idTask)
  var tasks = JSON.parse(this.responseText);
  var modal = document.getElementById("ToDoInfo");

  modal.innerHTML += '<div><a class = "edit" href="#edit">Edit</a><a href="#close" title="Close" class="close">X</a>'
                  + '<form><h3>' + tasks.todos[idTask].name + '</h3><p>' + tasks.todos[idTask].description
                  + '</p><p>Deadline: ' + tasks.todos[idTask].deadline + '</p><p>Priority rate: '
                  + tasks.todos[idTask].priority + '</p><p>Tags: ' + tasks.todos[idTask].tags
                  + '</p><input type="checkbox">DONE</form></div>'
}*/

/*function hide(id) {
  var card = document.getElementById(id);
  card.style.display = "none";
}

function newTag() {
  var name = document.getElementById("newTag").elements[0].value;
  var div = document.querySelector(".tags");

  div.innerHTML += '<li style="list-style-type: none!important;"><input type="checkbox">' + name + '</li>';
  document.querySelector(".close").click();
  emptyFields(document.getElementById("newTag").elements);
}*/

function newTask() {
  console.log("greta");
  var elements = document.getElementById("newToDo").elements;
  var name = elements[0].value;
  var description = elements[1].value;
  var deadline = elements[2].value;
  var priority = elements[3].value;
  var divTags = document.querySelector(".tagsForNewToDo");
  var checkboxes = divTags.childNodes;
  var tags = [];

  $('input:checkbox[name=t]:checked').each(function() {
       tags.push($(this).next('span').html());
  });

  $.ajax({
    type: "POST",
    url: "newtask",
    data: {
      "taskname": name,
      "description": description,
      "deadline": deadline,
      "priority": priority,
      "tags": tags
    }
  });

  document.querySelector(".close").click();
  emptyFields(elements);
}

function emptyFields(elements) {
  for (var i = 0; i < elements.length; i++ ) {
    if (elements[i].type == 'submit') continue;
    elements[i].value = "";
  }
}
function values() {
  var divInfo = document.querySelector(".lala");
  var elements = divInfo.childNodes;
  console.log(elements);
  var tags = [];
  for (var i = 0; i < checkboxes.length; i++ ) {
    if (checkboxes[i].type == 'checkbox') {
      if (checkboxes[i].checked == true) {
        tags.push(checkboxes[i+1]);
        checkboxes[i].checked = false;
      }
    }
  }
}
