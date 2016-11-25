document.addEventListener("DOMContentLoaded", graph())

function graph() {

  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  var y = [5, 0, 4, 4, 1, 5, 5, 4, 5, 5, 1, 1, 4, 2, 4, 4, 1, 5, 3, 3, 2, 3, 1,
            3, 2, 1, 1, 5, 4, 5];

  //var y = [2, 17, 17, 19, 17, 20, 11, 13, 15, 11,
  //        12, 16, 11, 8, 15, 16, 5, 11, 11, 17,
  //        10, 16, 17, 10, 12, 11, 17, 17, 14, 5];

  var OFFSET = 20;
  var canvas = document.getElementById("myCanvas");
  var graphdiv = document.getElementById("graph");
  var ctx = canvas.getContext("2d");

  ctx.canvas.width = graphdiv.offsetWidth;
  ctx.canvas.height = graphdiv.offsetHeight;

  var width = ctx.canvas.width - OFFSET*2;
  var height = ctx.canvas.height - OFFSET*2;

  //max vrednost v podatkih
  var max = Math.max.apply(Math, y);
  //korak za x = celotna dolzina canvasa deljena s st elementov v x
  var stepX = width/x.length;
  //korak za y = celotna visina canvasa deljena z max vrednostjo
  var stepY = height/max;



  //axis y
  ctx.beginPath();
  ctx.strokeStyle = '#333333';
  ctx.moveTo(OFFSET, 5);
  ctx.lineTo(OFFSET, OFFSET + height);
  ctx.stroke();

  //axis x
  ctx.beginPath();
  ctx.strokeStyle = '#333333';
  ctx.moveTo(OFFSET, OFFSET + height);
  ctx.lineTo(width + OFFSET, OFFSET + height);
  ctx.stroke();

  for (var i = 1; i < x.length; i++) {
    //izracunaj zacetne in koncne koordinate za crto
    var x1 = OFFSET + i*stepX;
    var x2 = OFFSET + (i+1)*stepX;
    var y1 = OFFSET + height - Math.round(y[i-1]*stepY);
    var y2 = OFFSET + height - Math.round(y[i]*stepY);
    //risi crto
    ctx.beginPath();
    ctx.strokeStyle = '#c44354';
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    //stevilke za os x
    ctx.fillText(x[i-1], x1-2, height + OFFSET*1.5);
    if (i == x.length-1) {
      ctx.fillText(x[i], x2-2, height + OFFSET*1.5);
    }
  }

  //stevilke za os y
  for (var i = 1; i <= max; i++) {
    var y1 = OFFSET + height - i*stepY;
    ctx.fillText(i, 5, y1);
  }
}
