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
{/** 
  \d就是[0-9]。表示是一位数字。记忆方式：其英文是digit（数字）。
  \D就是[^0-9]。表示除数字外的任意字符。
  \w就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。
  \W是[^0-9a-zA-Z_]。非单词字符。
  \s是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。
  \S是[^ \t\v\n\r\f]。 非空白符。
  .就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外
*/
}