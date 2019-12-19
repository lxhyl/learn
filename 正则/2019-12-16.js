{// 精确匹配
var regex = /var/;
console.log(regex.test("aavar"));
}
{// 横向模糊匹配
var regex = /ab{2,4}c/g;  //首先是a,然后2-4个b，然后是c，g为全局匹配
var str = "abcabcabbcabcacbbcccbabccccbbbbb";
console.log(str.match(regex));
}
{//纵向模糊匹配
 var regex = /a[123]b/g;
 var str = "a0b a1b a2b a3b a4b";
 console.log(str.match(regex));
}
{
    //排除字符组
    // [^abc]，表示是一个除"a"、"b"、"c"之外的任意一个字符
    var regex = /1[^abc]2/g;
    var str = "1a2 1b2 1d2 1r2";
    console.log(str.match(regex));
}