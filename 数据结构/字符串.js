/**
** 倒叙输入字符串
{
    let str1 = 'a nice man';
    let reverseStr = e => e.split('').reverse().join('');
    console.log(reverseStr(str1));
}
*/

/**
** 查找最长共同字串
**
**/
{

    const longestChildrenStr = (str1, str2) => {
        let isStrHaveS = (str1, str2, s) => str1.includes(s) && str2.includes(s);
        var result = '';
        for (let i = 0; i < str1.length; i++) {
            let num = 1;
            let s = str1.substr(i, num);
            while (isStrHaveS(str1, str2, s)) {
                if (s.length >= result.length) {
                    result = s;
                }
                num += 1;
                s = str1.substr(i, num);
                if (i + num > str1.length) {
                    return result
                }
            }
        }
    }

    console.log(longestChildrenStr('agoogle', 'mailgooglecom'));


}