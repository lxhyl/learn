var fs = require('fs');
var http = require('http')

var dataJson = [];
fs.readFile('./user.json',function(err,data) {
    if(err){
        return console.error(err);
    }
    newdata = JSON.parse(data.toString());
    dataJson.push(newdata.data[0]);
   
})
console.log(new Date('2020-01-15:00:00:00').getTime())