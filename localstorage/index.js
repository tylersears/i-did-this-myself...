function CheckPass() {
  return sha256.hex(pass.value) == '2850663b807a4763bad07f07272b2d8586654fcecb5346f136669832375806e8';
}
function RefList() {
  var lsi = Object.keys(localStorage);
  var bv = '';
  var lsv = localval.value;
  for (var i in lsi) {
    if (lsi[i] == lsv) {
      bv += '<option value = ' + lsi[i] + ' selected>' + lsi[i] + '</option>';
    } else {
      bv += '<option value = ' + lsi[i] + '>' + lsi[i] + '</option>';
    }
  }
  localval.innerHTML = bv;
}
function UpdDate() {
  selval.value = localval.value;
  GetV();
}
function GetV() {
  valb.value = localStorage.getItem(selval.value);
}
function SetV() {
  if (CheckPass()) {
    localStorage.setItem(selval.value, valb.value);
    RefList();
  }
}
function DelV() {
  if (CheckPass()) {
    localStorage.removeItem(selval.value);
    RefList();
    UpdDate();
  }
}
function RefListc() {
  var lsi = Object.keys(Cookies.get());
  var bv = '';
  var lsv = localvalc.value;
  for (var i in lsi) {
    if (lsi[i] == lsv) {
      bv += '<option value = ' + lsi[i] + ' selected>' + lsi[i] + '</option>';
    } else {
      bv += '<option value = ' + lsi[i] + '>' + lsi[i] + '</option>';
    }
  }
  localvalc.innerHTML = bv;
}
function UpdDatec() {
  selvalc.value = localvalc.value;
  GetC();
}
function GetC() {
  valbc.value = Cookies.get(selvalc.value)
}
function SetC() {
  if (CheckPass()) {
    Cookies.set(selvalc.value, valbc.value, { expires: 365, path: '/'});
    RefListc();
  }
}
function DelC() {
  if (ChechPass()) {
    Cookies.remove(selvalc.value);
    RefListc();
    UpdDatec();
  }
}
RefList();
UpdDate();
RefListc();
UpdDatec();