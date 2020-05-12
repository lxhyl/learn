// https://weibo.com/aj/f/addblack?ajwvr=6

var uids = [];


var personNum = parseInt(document.getElementsByClassName('W_layer_title')[0].innerText);
var pages = Math.ceil(personNum / 30)

var timer = setInterval(function () {
    for (let i = 0; i < pages; i++) {
        let lis = document.getElementsByClassName('emotion_list')[0].children;
        let lastPage = document.getElementsByClassName('next S_txt1 S_line1')[0];
        if (lastPage != undefined) {
            for (let i = 0; i < lis.length; i++) {
                let hrefArry = lis[i].firstChild.href.split('/');
                let uid = hrefArry[hrefArry.length - 1]

                if (uid.length == 10 && !isNaN(uid)) {
                    uids.push(uid)
                }
            }
            lastPage.click();

        } else {
            clearInterval(timer);
            
        }

    }
}, 3000)
setTimeout(function(){
  console.log(new Set(uids))
},(pages+1) * 3000)


var data = new FormData()
data.append('uid',5102122115)
data.append('f',1)

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    console.log('111')
}
xhr.open("post","https://weibo.com/aj/f/addblack?ajwvr=6",true)
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencode")
xhr.send(data);







//方法二
// 模拟点击进用户主页
document.getElementsByClassName('emotion_list')[0].children[0].firstChild.click()

document.getElementsByClassName('layer_menu_list_b ').children[0]