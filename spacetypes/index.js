onload = function () {
var i;
infws = '';
for (i = 0; i < 10000; i ++) {
  infws += '&#8203;';
}
document.getElementById('ws').innerHTML = infws;
zwsp = '&#8202;';
zwsp2 = ']';
for (i = 0; i < 31; i ++) {
  zwsp += '&#8203;';
}
for (i = 0; i < 32; i ++) {
  zwsp2 += zwsp;
}
zwsp2 += '[ (inf (actually 1024))'
document.getElementById('zw').innerHTML = zwsp2;
}
