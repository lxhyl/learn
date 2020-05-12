var https = require('https')
var qs = require('querystring');
var text = qs.escape("测试")
https.get(`https://sc.ftqq.com/SCU66196Tf45f6c66e124b7fc5ba6e2dac01846815dc8da6251d4a.send?text=${text}`)