clik = [];
var l10s;
var l10sp;
var l10m = 0;
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
  clicks10s.innerHTML = 'Clicks in last 10s: ' + l10s;
  clicks10ps.innerHTML = 'Clicks per second: ' + l10sp;
  clicks10m.innerHTML = 'Max Clicks per second: ' + l10m;
}
Loop();
setInterval(Loop, 1000);
