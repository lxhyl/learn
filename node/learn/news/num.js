var http = require('http')
var https = require('https')
var qs = require('querystring');
var url = require('url')
var sha1 = require('sha1')


var config = {
    "appID": "wx895beeadc5ab07e6",
    "appsecret": "8537c1da11d3f71edb7067c1fc22b740",
    "token": "lxhyl"   
}
var app = http.createServer()
app.on('request', function (req, res) {
    var URL = url.parse(req.url, true)
  
    if (URL.pathname == '/num') {
        var signature = URL.query.signature,
            timestamp = URL.query.timestamp,
            nonce = URL.query.nonce,
            echostr = URL.query.echostr;
          
        // token、timestamp、nonce三个参数进行字典序排序
        var arr = [config.token, timestamp, nonce].sort().join('');
        // sha1加密    
        var result = sha1(arr);
       
        if (result === signature) {
            res.writeHead(200, { 'Content-Type': 'text/plain,charset=utf-8', "Access-Control-Allow-Origin": "*" });
            res.end(echostr);
        } else {
            res.end('mismatch');
        }
      
        
    }
})
app.listen(8888)