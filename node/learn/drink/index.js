var https= require('https')
var qs = require('querystring');

var texts = [
    '喝水了',
    '又到了喝水时间啦',
    '阿杏，我是你的提醒喝水小助手',
    '我知道你没喝水，快去喝水',
    '喝水了吗?'
]

setInterval(function(){
    var now = new Date();
    var day = now.getDate();
    var hour = now.getHours();
    if(hour > 10 && hour < 24){
    var word = texts[parseInt(Math.random()*5)];
    var text = qs.escape(word)
    https.get(`https://sc.ftqq.com/SCU79481T6ba77915974a4292f5db6a2f77c99b705e379e49096e1.send?text=${text}`)
    }
    if(day == 21 && hour > 6){
      const text = qs.escape('该去值班了');
      https.get(`https://sc.ftqq.com/SCU79481T6ba77915974a4292f5db6a2f77c99b705e379e49096e1.send?text=${text}`)
    }
},3600000)

// 我的KEY  https://sc.ftqq.com/SCU66196Tf45f6c66e124b7fc5ba6e2dac01846815dc8da6251d4a.send
// 阿杏的KEY https://sc.ftqq.com/SCU79481T6ba77915974a4292f5db6a2f77c99b705e379e49096e1.send
