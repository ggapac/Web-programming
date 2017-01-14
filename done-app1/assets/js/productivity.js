$(document).ready(function() {
  getData();
  checkTimePeriod();
});

function checkTimePeriod() {
  $('input:radio[name=timeperiod]').change(function() {
    var label = $(this).next('span').html();
    if ($(this).attr('id') == "time0") getData();
    else {
      $.ajax({
        type: "GET",
        url: "/productivity/getmonthdata",
        success: function(data) {
          graphValues(data, function(values) {draw(values)});
        }
      })
    }
  });
}

function graphValues(data, callback) {
  var x = [];
  var y = [];
  for (i = 0; i < data.tasks.length; i++) {
    var finished = convertDate(new Date(Date.parse(data.tasks[i].finished)));
    var ix = $.inArray(finished, x)
    if (ix == -1) {
      x.push(finished);
      y.push(data.tasks[i].priority);
    }
    else {
      y[ix] += data.tasks[i].priority;
    }
  }
  var values = [];
  for (i = 0; i < x.length; i++) {
    values.push({label: x[i], value: y[i]});
  }
  callback(values);
}

function getData() {
  $.ajax({
    type: "GET",
    url: "/productivity/getdata",
    success: function(data) {
      $('#todos').html(data.user.todos);
      $('#dones').html(data.user.dones);
      graphValues(data, function(values) {draw(values)});
    }
  })
}

function draw(values) {
  FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "xAxisName": "Day",
                "yAxisName": "Productivity",

                //Cosmetics
                "lineThickness" : "2",
                "paletteColors" : "#ac3a4a",
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "showBorder" : "0",
                "bgColor" : "#ffffff",
                "showShadow" : "0",
                "canvasBgColor" : "#ffffff",
                "canvasBorderAlpha" : "0",
                "divlineAlpha" : "100",
                "divlineColor" : "#999999",
                "divlineThickness" : "1",
                "divLineIsDashed" : "1",
                "divLineDashLen" : "1",
                "divLineGapLen" : "1",
                "showXAxisLine" : "1",
                "xAxisLineThickness" : "1",
                "xAxisLineColor" : "#999999",
                "showAlternateHGridColor" : "0",

            },
            "data": values
        }
    });

    visitChart.render();
  });
}

function convertDate(date) {
  function zeros(s) { return (s < 10) ? '0' + s : s; }
  return [zeros(date.getDate()), zeros(date.getMonth()+1), date.getFullYear()].join('.');
}
