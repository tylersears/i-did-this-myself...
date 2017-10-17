var id, cd, dif, sd, dl;
date = new Date();
id = new Date(2017, 10, 10, 0, 0, 0);
cd = new Date(date.getFullYear(), date.getMonth()+1, date.getDate(), 0, 0, 0);
dif = Math.round(Math.abs((id.getTime() - cd.getTime())/86400000));
sd = 40-dif*3;
dl = {
  'sf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
  'st': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, sd, (sd - Math.floor(sd)) * 1000),
  'df': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
  'dt': new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0, 0),
  'wf': new Date(),
  'wt': new Date(),
  'mf': new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
  'mt': new Date(date.getFullYear(), date.getMonth()+1, 1, 0, 0, 0, 0),
  'yf': new Date(date.getFullYear(), 1, 1, 0, 0, 0, 0),
  'yt': new Date(date.getFullYear()+1, 1, 1, 0, 0, 0, 0),
  'cf': new Date(floor(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
  'ct': new Date(ceil(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
  'mlf': new Date(floor(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
  'mlt': new Date(ceil(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
  'net': new Date('2024-04-08T17:59:17.000Z')
};
