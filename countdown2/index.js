var col, width, height;
var zf, zfm, datearr, datestr, dateg, perc, nr, mr, hexu, hexv;
var modf, modf2, modf3, modf4, modf5, modf6;
var date, dl, from, to, dur;
var bgcol, fgcol, tl, tf, ntf, tf2;
var SetStart, ResetStart, SetEnd, ResetEnd;
var Setf, Reset, Current, RevSelect, UpdateSelect;
var SetBG, SetFG, SetBGC, SetFGC, ResetBG, ResetFG, SetCol, ResetCol;
var Stop, Freeze, Button;
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
col = color;
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
datearr = function(val) {
  return [floor(val / 86400000), floor(val / 3600000) % 24, floor(val / 60000) % 60, floor(val / 1000) % 60, val % 1000];
};
datestr = function(val) {
  return zfm(val[0]) + ':' + zf(val[1]) + ':' + zf(val[2]) + ':' + zf(val[3]) + '.' + zfm(val[4]);
};
dateg = function(val) {
  if (val < 0) {return '-' + dateg(-val)}
  return datestr(datearr(val));
};
perc = function(val) {
  if (isNaN(val)) {
    return '%';
  }
  if (val < 0) {
    return '-' + perc(-val);
  }
  val *= 1000000;
  if (val < 10) {
    val = '00000' + val;
  } else if (val < 100) {
    val = '0000' + val;
  } else if (val < 1000) {
    val = '000' + val;
  } else if (val < 10000) {
    val = '00' + val;
  } else if (val < 100000) {
    val = '0' + val;
  } else if (val < 1000000) {
    val = '' + val;
  } else {
    return floor(val / 1000000) + perc((val / 1000000) % 1);
  }
  return val[0] + val[1] + '.' + val[2] + val[3] + val[4] + val[5] + '%';
};
nr = function(val) {
  if (isNaN(val)) {
    return '';
  }
  if (val < 0) {
    return '-' + nr(-val);
  }
  val *= 1000000;
  if (val < 10) {
    val = '00000' + val;
  } else if (val < 100) {
    val = '0000' + val;
  } else if (val < 1000) {
    val = '000' + val;
  } else if (val < 10000) {
    val = '00' + val;
  } else if (val < 100000) {
    val = '0' + val;
  } else if (val < 1000000) {
    val = '' + val;
  } else {
    return floor(val / 1000000) + nr((val / 1000000) % 1);
  }
  return '.' + val[0] + val[1] + val[2] + val[3] + val[4] + val[5];
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
modf6 = function(tif) {
  tif = tif % 1;
  v = -log(1-tif) / log(2);
  return modf5(v);
};
date = new Date();
from = new Date(dl.sf);
to = new Date(dl.st);
dur = to.getTime() - from.getTime();
bgcol = color(0, 0, 0);
fgcol = color(0, 255, 0);
draw = function() {
  try {
    drawe();
  } catch (e) {}
};
drawe = function() {
  date = new Date();
  tl = to.getTime() - date.getTime();
  tf = 1 - (tl / dur);
  tf1 = (1 - (tl / dur)) % 1;
  tfm = tf - floor(tf);
  ntf = 1 - (tl / dur);
  tf2 = (tf * width - floor(tf * width));
  background(bgcol);
  fill(fgcol);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  text('Time Left:', width / 2, 20);
  text(dateg(tl), width / 2, 60);
  text(perc(tf), width / 2, 100);
  textAlign(LEFT, TOP);
  textSize(20);
  text('Time Passed:', 10, 120);
  text(dateg(date.getTime() - from.getTime()), 140, 120);
  text('From:', 10, 160);
  try {text(from.toISOString(), 140, 160);} catch (e) {}
  text('To:', 10, 180);
  try {text(to.toISOString(), 140, 180);} catch (e) {}
  text('Duration:', 10, 140);
  text(dateg(dur), 140, 140);
  text('Current Time:', 10, 200);
  text(date.toISOString(), 140, 200);
  text('Logarithm:\n' + modf(ntf) + '\n' + modf2(ntf) + '\n' + modf3(ntf) + '\n' + modf4(ntf) + '\n' + modf5(ntf) + '\n' + modf6(ntf), width * 0.8, 120);
  text('Degrees:', 10, 220);
  text(nr(tf1 * 180 - 90), 140, 220);
  text('Tangent:', 10, 240);
  text(nr(tan(radians(tfm * 180 - 90))), 140, 240);
  text('Hy. Arctan:', 10, 260);
  text(nr(Math.atanh(tfm * 2 - 1)), 140, 260);
  if (tf1 >= 0) {
      rect(0, 300, floor(tf1 * width), 30);
  } else {
      rect(width-floor(-tf1 * width), 300, floor(-tf1 * width), 30);
  }
  rect(0, 350, tf2 * width, 30);
  textSize(20);
  text(perc(tf), 0, 327);
  text(perc(tf2), 0, 377);
  text(floor(tf * width) + '/' + width, 120, 327);
  text(floor(tf2 * width) + '/' + width, 120, 377);
  text(floor(tf * width) * width + floor(tf2 * width) + '/' + sq(width), 220, 377);
  fill(lerpColor(bgcol, fgcol, 0.06));
  textSize(15);
  text('Please press the button labled Button!', 10, 280);
};
SetStart = function() {
  try {
    frome = new Date(startval.value);
    from = new Date(frome);
  } catch(e) {
    startval.value = from.toISOString();
  }
  dur = to.getTime() - from.getTime();
  console.log('Set Start To: ' + from.toISOString());
  RevSelect();
};
ResetStart = function() {
  from = new Date(dl.sf);
  dur = to.getTime() - from.getTime();
  startval.value = from.toISOString();
  console.log('Reset Start To: ' + from.toISOString());
  RevSelect();
};
SetEnd = function() {
  try {
    toe = new Date(endval.value);
    to = new Date(toe);
  } catch (e) {
    endval.value = from.toISOString();
  }
  dur = to.getTime() - from.getTime();
  console.log('Set End To: ' + to.toISOString());
  RevSelect();
};
ResetEnd = function() {
  to = new Date(td[0], td[1], td[2], td[3], td[4], td[5], td[6]);
  dur = to.getTime() - from.getTime();
  endval.value = to.toISOString();
  console.log('Reset End To: ' + to.toISOString());
  RevSelect();
};
Setf = function() {
  from = new Date(startval.value);
  to = new Date(endval.value);
  dur = to.getTime() - from.getTime();
  console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString());
  RevSelect();
};
Reset = function() {
  from = new Date(dl.sf);
  to = new Date(dl.st);
  startval.value = from.toISOString();
  endval.value = to.toISOString();
  dur = to - from;
  console.log('Reset Start To: ' + from.toISOString() + ', End To: ' + to.toISOString());
  RevSelect();
};
Current = function() {
  startval.value = date.toISOString();
  from = new Date(startval.value);
  dur = to.getTime() - from.getTime();
  console.log('Set Start To: ' + from.toISOString());
};
RevSelect = function() {
  if ((from.toISOString() == dl.sf.toISOString()) && (to.toISOString() == dl.st.toISOString())) {
    opts.value = 'school';
  } else if ((from.toISOString() == dl.df.toISOString()) && (to.toISOString() == dl.dt.toISOString())) {
    opts.value = 'day';
  } else if ((from.toISOString() == dl.wf.toISOString()) && (to.toISOString() == dl.wt.toISOString())) {
    opts.value = 'week';
  } else if ((from.toISOString() == dl.mf.toISOString()) && (to.toISOString() == dl.mt.toISOString())) {
    opts.value = 'month';
  } else if ((from.toISOString() == dl.yf.toISOString()) && (to.toISOString() == dl.yt.toISOString())) {
    opts.value = 'year';
  } else if ((from.toISOString() == dl.cf.toISOString()) && (to.toISOString() == dl.ct.toISOString())) {
    opts.value = 'century';
  } else if ((from.toISOString() == dl.mlf.toISOString()) && (to.toISOString() == dl.mlt.toISOString())) {
    opts.value = 'millennium';
  } else if (to.toISOString() == dl.net.toISOString()) {
    opts.value = 'eclipse';
  } else {
    opts.value = 'custom';
  }
  console.log('Set opts to: ' + opts.value)
};
UpdateSelect = function() {
  switch (opts.value) {
    case 'school':
      from = new Date(dl.sf);
      to = new Date(dl.st);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (School)');
      break;
    case 'day':
      from = new Date(dl.df);
      to = new Date(dl.dt);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Day)');
      break;
    case 'week':
      from = new Date(dl.wf);
      to = new Date(dl.wt);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Week)');
      break;
    case 'month':
      from = new Date(dl.mf);
      to = new Date(dl.mt);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Month)');
      break;
    case 'year':
      from = new Date(dl.yf);
      to = new Date(dl.yt);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Year)');
      break;
    case 'century':
      from = new Date(dl.cf);
      to = new Date(dl.ct);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Century)');
      break;
    case 'millennium':
      from = new Date(dl.mlf);
      to = new Date(dl.mlt);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Millenium)');
      break;
    case 'eclipse':
      to = new Date(dl.net);
      startval.value = from.toISOString();
      endval.value = to.toISOString();
      dur = to - from;
      console.log('Set End To: ' + to.toISOString() + ' (Next Eclipse)');
      break;
    case 'custom':
      break;
  };
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
  drawe = function () {};
  console.log('Stopped Drawing');
};
Freeze = function() {
  //bgcol = color(0, 0, 255);
  //fgcol = color(0, 255, 255);
  for (var i = 0; i < 2000000000; i ++) {}
};
Button = function() {};
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
bgcolorp.addEventListener('change', SetBGC, false);
fgcolorp.addEventListener('change', SetFGC, false);
