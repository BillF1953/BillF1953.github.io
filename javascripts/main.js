/* req = new XMLHttpRequest();
series = 'CUSR0000SEAA04';
req.open('GET','http://api.bls.gov/publicAPI/v1/timeseries/data/' + series);
req.send();
jsObject = JSON.parse(req.responseText);
console.log(jsObject); */



req = new XMLHttpRequest();
series = {seriesid: ['CUSR0000SEAA04', 'LUU0202891000']};
bodyJSON = JSON.stringify(series);
console.log(bodyJSON);
req.open('POST','http://api.bls.gov/publicAPI/v1/timeseries/data/');
req.setRequestHeader('Content-Type', 'application/json');
req.send(bodyJSON);
jsObject = JSON.parse(req.responseText);
//console.log(jsObject);



/*
 'http://api.bls.gov/publicAPI/v2/timeseries/data/CUSR0000SEAA04&registrationkey=988a8cb1f229464d8dce1f2736d35121
 + '&' + 'registrationkey=' + apikey
seriesid='OEUN000000056--5747213213,LUU0202891000,OEUN000000056--+ '5747213213&registrationkey=1eccaa39bf3c407db057ec5c43520723&catalog=true&startyear=2010&endyear=2014&calculations=true&annualaverage=true';
*/