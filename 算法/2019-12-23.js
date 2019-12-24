{
    // 编写一个函数来查找字符串数组中的最长公共前缀。

    // 如果不存在公共前缀，返回空字符串 ""。

    // 示例 1:
    // 输入: ["flower","flow","flight"]
    // 输出: "fl"

    // 示例 2:
    // 输入: ["dog","racecar","car"]
    // 输出: ""
    // 解释: 输入不存在公共前缀。

    //1.
    var longestCommonPrefix = function (strs) {
        if (strs.length == 0)
            return "";
        let ans = strs[0];
        for (let i = 1; i < strs.length; i++) {

            for (var j = 0; j < ans.length && j < strs[i].length; j++) {
                if (ans[j] != strs[i][j])
                    break;
            }
            ans = ans.substr(0, j);
            if (ans === "")
                return ans;
        }
        return ans;
    };
    console.log(longestCommonPrefix(["flower", "flow11", "flowet"]));

    // 2.
    var longestCommonPrefix = function (strs) {
        if (strs.length == 0) {
            return ''
        }
        var num = 1;
        var common = strs[0].substr(0, num);
        var i = 0;
        var result = '';
        while (i < strs.length) {
            if (strs[i].startsWith(common)) {
                i++;
                if (i == strs.length - 1) {
                    result = common;
                    i = 0;
                    if (num < strs[i].length) {
                        common = strs[0].substr(0, num++);
                       
                    } else {
                        break
                    }
                }
            } else {
                break
            }
       }  
       return result;
    }
    console.log(longestCommonPrefix(["flower", "flow11", "flowet"]));

}