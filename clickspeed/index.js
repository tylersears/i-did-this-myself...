clik = [];
var l10s;
var l10sp;
function AddClick() {
  clik.push(new Date());
  console.log('e');
}
function Loop() {
  console.log(clik.length);
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
  clicks10s.innerHTML = l10s + '';
  clicks10ps.innerHTML = l10sp + '';
  console.log(new Date());
}
Loop();
setInterval(Loop, 1000);
