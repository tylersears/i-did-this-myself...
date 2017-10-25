var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
size(600, 400, P2D);
textv = 'para\ngraph';
textAlign(LEFT, TOP);
keyPressed = function () {
  if (keyCode != 8) {
    textv += String.fromCharCode(key);
  } else {
    textv = textv.substring(0, textv.length-2);
  }
};
draw = function() {
  background(0);
  fill(255);
  text(textv, 0, 0);
};
//end processingjs
  }
};
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);
