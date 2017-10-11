UpdateF = function() {
  console.log(tarr.value);
  ifra.src = 'data:text/html;charset=utf-8,' + escape(tarr.value);
  //$('#ifra').contents().find('html').html(tarr.value);
  //ifra.html = tarr.value;
};
UpdateU = function() {
  ifra.src = urli.value;
};
ClearF = function() {
  ifra.src = 'data:text/html;charset=utf-8,';
};
