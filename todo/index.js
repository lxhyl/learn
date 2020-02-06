var fs = require('fs');
var http = require('http')



var app = http.createServer((req,res) => {
    console.log('启动成功')
    console.log(req.url)
});
app.on("request",(req,res) => {
    fs.readFile('./user.json',function(err,data) {
        if(err){
            return console.error(err);
        }
        if(req.url == '/user.json'){
            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            res.end(data);
        }
       
    })
})
app.listen(5000)
console.log('127.0.0.1:5000')