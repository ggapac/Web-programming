$(document).ready(function() {
  tasksByTags();
  checkUndone();
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

function checkUndone() {
  $('input:checkbox[name=done]').change(function() {
    var id = $(this).parent().parent()[0].id;

    $.ajax({
      type: "POST",
      url: "dones/taskundone",
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
      modal.innerHTML = '<div><a href="#close" title="Close" class="close">X</a>'
                      + '<h3>' + data.task.name + '</h3><p>' + data.task.description
                      + '</p><p>Deadline: ' + deadline + '</p><p>Priority rate: '
                      + data.task.priority + '</p><p>Tags: ' + data.tag.name
                      + '</p></div>'
    }
  });
}

function convertDate(date) {
  function zeros(s) { return (s < 10) ? '0' + s : s; }
  return [zeros(date.getDate()), zeros(date.getMonth()+1), date.getFullYear()].join('.');
}

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
