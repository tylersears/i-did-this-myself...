var id, cd, dif, sd;
id = new Date(2017, 10, 03, 0, 0, 0);
cd = new Date(year(), month(), day(), 0, 0, 0);
dif = Math.round(Math.abs((id.getTime() - cd.getTime())/86400000));
sd = 60-dif*3;
