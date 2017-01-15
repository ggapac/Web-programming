$(document).ready(function() {
  tasksByTags();
  checkUndone();
});

function tasksByTags() {
  $('input:radio[name=tags]').change(function() {
    var label = $(this).next('span').html();
    var id = $(this)[0].id;

    if (label != "All" && label != "Vsi") {
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
      $('#ToDoInfo').attr('taskid', data.task.taskid);
      $('#ToDoInfo').attr('onClick','editTask(' + data.task.taskid + ')');
      var deadline = convertDate(new Date(Date.parse(data.task.deadline)));

      $('.infoDescription').html(data.task.description);
      $('#iDeadline').html(deadline);
      $('#iPriority').html(data.task.priority);
      $('#iTags').html(data.tag.name)
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
