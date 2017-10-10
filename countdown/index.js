var width, height;
var zf, zfm, l, yearday, r, mr, f, conv, unconv, ctime;
var drawe, hexu, hexv, modf, modf2, modf3, modf4, modf5;
var id, cd, dif, date, af, at, sf, st, from, to, dur;
var bgcol, fgcol, ct, tf, ntf, tf2;
var SetStart, ResetStart, SetEnd, ResetEnd;
var Setf, Reset, Current;
var SetBG, SetFG, SetBGC, SetFGC, ResetBG, ResetFG, SetCol, ResetCol;
var Stop, Freeze, Button;
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
width = 600;
height = 400;
size(width, height, P2D);
zf = function(val) {
  if (val < 10) {
      return '0' + val;
  }
  return val;
};
zfm = function(val) {
  if (val < 10) {
      return '00' + val;
  } else if (val < 100) {
      return '0' + val;
  }
  return val;
};
l = function(year) {
  if ((year % 4) === 0) {
      return 1;
  }
  return 0;
};
yearday = function(year, month, day) {
  var m = 0;
  if (month == 1) {
      m = 0;
  } else if (month == 2) {
      m = 31;
  } else if (month == 3) {
      m = 59 + l(year);
  } else if (month == 4) {
      m = 90 + l(year);
  } else if (month == 5) {
      m = 120 + l(year);
  } else if (month == 6) {
      m = 151 + l(year);
  } else if (month == 7) {
      m = 181 + l(year);
  } else if (month == 8) {
      m = 212 + l(year);
  } else if (month == 9) {
      m = 243 + l(year);
  } else if (month == 10) {
      m = 273 + l(year);
  } else if (month == 11) {
      m = 304 + l(year);
  } else if (month == 12) {
      m = 334 + l(year);
  }
};
r = function(v) {
  if (v < 0) {
      return '-' + r(-v);
  }
  v = floor(v * 1000000);
  if (v > 1000000) {
      return floor(v / 1000000) + r((v / 1000000) % 1);
  } else if (v < 10) {
      v = '00000' + v;
  } else if (v < 100) {
      v = '0000' + v;
  } else if (v < 1000) {
      v = '000' + v;
  } else if (v < 10000) {
      v = '00' + v;
  } else if (v < 100000) {
      v = '0' + v;
  } else if (v <= 1000000) {
      v = '' + v;
  }
  v = '' + v;
  return v[0] + v[1] + '.' + v[2] + v[3] + v[4] + v[5] + '%';
};
mr = function(v, df) {
  if (v < 0) {
      return '-' + mr(-v);
  }
  v = floor(v * 1000000);
  if (v > 1000000) {
      return floor(v / 1000000) + mr((v / 1000000) % 1, 1);
  } else if (v < 10) {
      v = '00000' + v;
  } else if (v < 100) {
      v = '0000' + v;
  } else if (v < 1000) {
      v = '000' + v;
  } else if (v < 10000) {
      v = '00' + v;
  } else if (v < 100000) {
      v = '0' + v;
  } else if (v <= 1000000) {
      v = '' + v;
  }
  v = '' + v;
  if (df == 1) {
    return '.' + v[0] + v[1] + v[2] + v[3] + v[4] + v[5];
  }
  return '0.' + v[0] + v[1] + v[2] + v[3] + v[4] + v[5];
};
f = function(l) {
  return l % 1;
};
conv = function(yr, mon, day, hr, min, sec, mil) {
  return hr * 3600 + min * 60 + sec + mil / 1000;
};
unconv = function(tim) {
  var add;
  if (tim < 0) {
      add = '-';
      tim *= -1;
  } else {
      add = '';
  }
  var a = [floor(tim / 3600) % 60, floor(tim / 60) % 60, floor(tim) % 60, floor(tim * 1000) % 1000];
  return [a, add + zf(a[0]) + ':' + zf(a[1]) + ':' + zf(a[2]) + '.' + zfm(a[3])];
};
ctime = function() {
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000;
};
hexu = function(val) {
  return color(parseInt(val[1] + val[2], 16), parseInt(val[3] + val[4], 16), parseInt(val[5] + val[6], 16));
};
hexv = function(col) {
  return '#' + zf(red(col).toString(16)) + zf(green(col).toString(16)) + zf(blue(col).toString(16));
};
modf = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return mr(v);
};
modf2 = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return modf(v);
};
modf3 = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return modf2(v);
};
modf4 = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return modf3(v);
};
modf5 = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return modf4(v);
};
date = new Date();
af = [8, 0, 0, 0];
at = [14, 23, sd, 000];
while (at[2] < 0) {at[1]-=1;at[2]+=60;}
while (at[1] < 0) {at[0]-=1;at[1]+=60;}
if (at[2] != floor(at[2])) {at[3] = (at[2] - floor(at[2])) * 1000; at[2] = floor(at[2]);}
sf = zf(af[0]) + ':' + zf(af[1]) + ':' + zf(af[2]) + '.' + zfm(af[3]);
st = zf(at[0]) + ':' + zf(at[1]) + ':' + zf(at[2]) + '.' + zfm(at[3]);
from = conv(year(), month(), day(), af[0], af[1], af[2], af[3]);
to = conv(year(), month(), day(), af[0], at[1], at[2], at[3]);
/*
09:13
09:56
10:45
*/
dur = to - from;
bgcol = color(0, 0, 0);
fgcol = color(0, 255, 0);
noStroke();
draw = function() {
  try {
    drawe();
  } catch (e) {}
}
drawe = function() {
  date = new Date();
  background(bgcol);
  textAlign(CENTER, CENTER);
  fill(fgcol);
  textSize(40);
  ct = ctime();
  tf = f(1 - ((to - ctime()) / (to - from)));
  ntf = 1 - ((to - ctime()) / (to - from));
  tf2 = (tf * width - floor(tf * width));
  text('Time Left:', width / 2, 20);
  text(unconv(to - ct)[1], width / 2, 60);
  text(r(1 - ((to - ctime()) / (to - from))), width / 2, 100);
  textSize(25);
  text('Time Passed:\n' + unconv(ct - from)[1], width * 0.16, 150);
  text('Logarythm:\n' + modf(ntf) + '\n' + modf2(ntf) + '\n' + modf3(ntf) + '\n' + modf4(ntf) + '\n' + modf5(ntf), width * 0.83, 210);
  text('From:\n' + unconv(from)[1], width * 0.16, 210);
  text('To:\n' + unconv(to)[1], width * 0.5, 210);
  text('Duration:\n' + unconv(dur)[1], width * 0.16, 270);
  text('Current Time:\n' + unconv(ctime())[1], width * 0.5, 270);
  if (tf >= 0) {
      rect(0, 300, floor(tf * width), 30);
  } else {
      rect(width-floor(-tf * width), 300, floor(-tf * width), 30);
  }
  rect(0, 350, tf2 * width, 30);
  textAlign(LEFT, TOP);
  textSize(20);
  text(r(tf), 0, 327);
  text(r(tf2), 0, 377);
  text(floor(tf * width) + '/' + width, 120, 327);
  text(floor(tf2 * width) + '/' + width, 120, 377);
  text(floor(tf * width) * width + floor(tf2 * width) + '/' + sq(width), 220, 377);
};
SetStart = function() {
  var sv = startval.value;
  from = conv(year(), month(), day(), parseInt(sv[0]+sv[1]), parseInt(sv[3]+sv[4]), parseInt(sv[6]+sv[7]), parseInt(sv[9]+sv[10]+sv[11]));
  dur = to - from;
  console.log('Set Start To: ' + sv);
};
SetEnd = function() {
  var ev = endval.value;
  to = conv(year(), month(), day(), parseInt(ev[0]+ev[1]), parseInt(ev[3]+ev[4]), parseInt(ev[6]+ev[7]), parseInt(ev[9]+ev[10]+ev[11]));
  dur = to - from;
  console.log('Set End To: ' + ev);
};
ResetStart = function() {
  from = conv(year(), month(), day(), af[0], af[1], af[2], af[3]);
  startval.value = sf;
  dur = to - from;
  console.log('Reset Start To: ' + sf);
};
ResetEnd = function() {
  to = conv(year(), month(), day(), at[0], at[1], at[2], at[3]);
  endval.value = st;
  dur = to - from;
  console.log('Reset End To: ' + st);
};
Setf = function() {
  var sv = startval.value;
  var ev = endval.value;
  from = conv(year(), month(), day(), parseInt(sv[0]+sv[1]), parseInt(sv[3]+sv[4]), parseInt(sv[6]+sv[7]), parseInt(sv[9]+sv[10]+sv[11]));
  to = conv(year(), month(), day(), parseInt(ev[0]+ev[1]), parseInt(ev[3]+ev[4]), parseInt(ev[6]+ev[7]), parseInt(ev[9]+ev[10]+ev[11]));
  dur = to - from;
  console.log('Set Start To: ' + sv + ', End To: ' + ev);
}
Reset = function() {
  from = conv(year(), month(), day(), af[0], af[1], af[2], af[3]);
  to = conv(year(), month(), day(), at[0], at[1], at[2], at[3]);
  startval.value = sf;
  endval.value = st;
  dur = to - from;
  console.log('Reset Start To: ' + sf + ', End To: ' + st);
};
Current = function() {
  startval.value = zf(date.getHours()) + ':' + zf(date.getMinutes()) + ':' + zf(date.getSeconds()) + '.' + zfm(date.getMilliseconds());
  from = conv(year(), month(), day(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  dur = to - from;
  console.log('Set Start To: ' + startval.value + ' (Current Time)');
};

SetBG = function() {
  bgcol = hexu(bgcolor.value);
  console.log('Set Background To: ' + bgcolor.value);
  bgcolorp.value = bgcolor.value + '';
};
SetFG = function() {
  fgcol = hexu(fgcolor.value);
  console.log('Set Foreground To: ' + fgcolor.value);
  fgcolorp.value = fgcolor.value + '';
};
SetBGC = function() {
  bgcol = hexu(bgcolorp.value);
  console.log('Set Background To: ' + bgcolorp.value);
  bgcolor.value = bgcolorp.value + '';
};
SetFGC = function() {
  fgcol = hexu(fgcolorp.value);
  console.log('Set Foreground To: ' + fgcolorp.value);
  fgcolor.value = fgcolorp.value + '';
};
ResetBG = function() {
  bgcol = color(0, 0, 0);
  bgcolor.value = hexv(bgcol);
  bgcolorp.value = bgcolor.value + '';
  console.log('Reset Background To: ' + bgcolor.value);
};
ResetFG = function() {
  fgcol = color(0, 255, 0);
  fgcolor.value = hexv(fgcol);
  fgcolorp.value = fgcolor.value + '';
  console.log('Reset Foreground To: ' + fgcolor.value);
};
SetCol = function() {
  bgcol = hexu(bgcolor.value);
  fgcol = hexu(fgcolor.value);
  bgcolorp.value = bgcolor.value + '';
  fgcolorp.value = fgcolor.value + '';
  console.log('Set Background To: ' + bgcolor.value + ', Foreground To: ' + fgcolor.value);
};
ResetCol = function() {
  bgcol = color(0, 0, 0);
  fgcol = color(0, 255, 0);
  bgcolor.value = hexv(bgcol);
  fgcolor.value = hexv(fgcol);
  bgcolorp.value = bgcolor.value + '';
  fgcolorp.value = fgcolor.value + '';
  console.log('Reset Background To: ' + bgcolor.value + ', Foreground To: ' + fgcolor.value);
};
Stop = function() {
  drawe = function () {}
  console.log('Stopped Drawing')
};
Freeze = function() {
  while (1) {}
};
Button = function() {
  /*println('button');
  for (var i=0;i<200;i++) {
    println(i);
  }*/
};
/*
delete canvas;
delete id;
delete cd;
delete dif;
delete af;
delete at;
delete sf;
delete st;
delete from;
delete to;
delete dur;*/
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
bgcolorp.addEventListener('change', SetBGC, false);
fgcolorp.addEventListener('change', SetFGC, false);
