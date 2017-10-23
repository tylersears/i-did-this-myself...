clik = [];
var l10s;
var l10sp;
var l10m = 0;
var l1s;
var l1sp;
var l1m = 0;
function AddClick() {
  clik.push(new Date());
}
function Loop() {
  cd = new Date();
  pd = new Date(cd);
  pd.setSeconds(cd.getSeconds() - 10);
  for (var i = 0; i < clik.length; i++) {
    if (clik[i] < pd) {
      clik[i] = 'ell';
    }
  }
  while (clik[0] == 'ell') {
    clik.splice(0, 1);
  }
  l10s = clik.length;
  l10sp = l10s / 10;
  l10m = Math.max(l10sp, l10m);
  l1s = 0;
  cd = new Date();
  pd = new Date(cd);
  pd.setSeconds(cd.getSeconds() - 1);
  for (i = 0; i < clik.length; i++) {
    if (clik[i] > pd) {
      l1s++;
    }
  }
  l1sp = l1s;
  l1m = Math.max(l1sp, l1m);
  clicks10s.innerHTML = 'Clicks in last 10s: ' + l10s;
  clicks10ps.innerHTML = 'Clicks per second: ' + l10sp;
  clicks10m.innerHTML = 'Max Clicks per second: ' + l10m;
  clicks1s.innerHTML = 'Clicks in last 1s: ' + l1s;
  clicks1ps.innerHTML = 'Clicks per second: ' + l1sp;
  clicks1m.innerHTML = 'Max Clicks per second: ' + l1m;
  document.cookie = l10m + '; ' + l1m;
}
function ClearCookie() {
  l10m = 0;
  l1m = 0;
}
Loop();
setInterval(Loop, 10);
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
var width = 600;
var height = 200;
size(width, height, P2D);
background(0);
var getsel = get(1, 0, 599, 200);
draw = function() {
  background(0);
  set(0, 0, getsel);
  stroke(0, 0, 255);
  point(599, 200-(l10sp*10));
  stroke(255, 0, 0);
  point(599, 200-(l1sp*10));
  getsel = get(1, 0, 599, 200);
};
//end processingjs
  }
};
try {
  document.write(document.cookie);
  a = document.cookie.split('; ');
  if (a.length > 1) {
  l10m = parseInt(a[0])/10;
  l1m = parseInt(a[1]);}
} catch (e) {}
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);
