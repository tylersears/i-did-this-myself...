var id, cd, dif, sd;
date = new Date();
id = new Date(2017, 10, 10, 0, 0, 0);
cd = new Date(date.getFullYear(), date.getMonth()+1, date.getDate(), 0, 0, 0);
dif = Math.round(Math.abs((id.getTime() - cd.getTime())/86400000));
sd = 46-dif*3;
