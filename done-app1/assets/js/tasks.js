$(document).ready(function() {
  tasksByTags();
  checkDone();
});

function tasksByTags() {
  $('input:radio[name=tags]').change(function() {
    var label = $(this).next('span').html();
    var id = $(this)[0].id;

    if (label != "All") {
      $('.othertasks > .card').hide();
      $(".othertasks > [data-tag='" + id + "']").show();
    }
    else {
      $('.othertasks > .card').show();
    }
  });
}

function checkDone() {
  $('input:checkbox[name=done]').change(function() {
    var id = $(this).parent().parent()[0].id;

    $.ajax({
      type: "POST",
      url: "taskdone",
      data: {"id": id}
    });
  });
}

function showInfo(id) {
  $.ajax({
    type: "GET",
    url: "/task/" + id,
    success: function(data) {
      var modal = document.getElementById("ToDoInfo");
      var date = data.task.deadline.substring(0,10);
      var deadline = date.split("-").reverse().join(".");
      modal.innerHTML = '<div><a class = "edit" href="#edit" onclick="values()">Edit</a><a href="#close" title="Close" class="close">X</a>'
                      + '<h3>' + data.task.name + '</h3><p>' + data.task.description
                      + '</p><p>Deadline: ' + deadline + '</p><p>Priority rate: '
                      + data.task.priority + '</p><p>Tags: ' + data.tag.name
                      + '</p></div>'
    }
  });
}

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

  var radio = $('input:radio[name=t]:checked');
  var tag = radio[0].id;

  $.ajax({
    type: "POST",
    url: "newtask",
    data: {
      "taskname": name,
      "description": description,
      "deadline": deadline,
      "priority": priority,
      "tag": tag
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
