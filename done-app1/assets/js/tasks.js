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

    $(this).parent().parent().hide();
  });
}

function showInfo(id) {
  $.ajax({
    type: "GET",
    url: "/task/" + id,
    success: function(data) {
      var modal = document.getElementById("ToDoInfo");
      $('#ToDoInfo').attr('taskid', data.task.taskid);
      var deadline = convertDate(new Date(Date.parse(data.task.deadline)));
      modal.innerHTML = '<div><a class = "edit" href="#edit" onclick="editTask(' + data.task.taskid + ')">{{ __("Edit") }}</a><a href="#close" title="Close" class="close">X</a>'
                      + '<h3>' + data.task.name + '</h3><p>' + data.task.description
                      + '</p><p>{{ __("Deadline") }}: ' + deadline + '</p><p>{{ __("Priority rate") }}: '
                      + data.task.priority + '</p><p>{{ __("Tags") }}: ' + data.tag.name
                      + '</p></div>'
    }
  });
}

function convertDate(date) {
  function zeros(s) { return (s < 10) ? '0' + s : s; }
  return [zeros(date.getDate()), zeros(date.getMonth()+1), date.getFullYear()].join('.');
}

function editTask(id) {
  $.ajax({
    type: "GET",
    url: "/task/" + id,
    success: function(data) {
      var deadline = convertDate(new Date(Date.parse(data.task.deadline)));
      $('input[name="edittodoname"]').val(data.task.name);
      $('textarea[name="editdescription"]').val(data.task.description);
      $('input[name="editdeadline"]').val(deadline);
      $('option[name="editpriorityrate"][value=' + data.task.priority + ']').attr('selected', true);
      var tag = "#radio" + data.task.tag;
      $(tag).attr('checked', true);
      $('.edittaskid').val(data.task.taskid);
    }
  });

}

function newTask() {
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
    },
    success: function(data) {
      var tasks = $('.othertasks');
      console.log(data.task.priority);
      console.log(data.task.taskid);
      console.log(data.task.tag);
      console.log(data.task.name);
      //NE DELAAAAA
      tasks.innerHTML += '<div class="card p' + data.task.priority + '" id="' + data.task.taskid + '" '
                      +  'data-tag="' + data.task.tag + '" onclick="showInfo(this.id)">'
                      +  '<a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>'
                      +  '<div class="container ellipsis"><b>' + data.task.name + '</b><p>Priority rate: '
                      +  data.task.priority + '</p><input name="done" type="checkbox">DONE'
                      +  '</div></div>';
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