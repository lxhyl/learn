// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
// 首先，该函数会根据需要丢弃无用的开头空格字符，
// 直到寻找到第一个非空格的字符为止。
// 当我们寻找到的第一个非空字符为正或者负号时，
// 则将该符号与之后面尽可能多的连续数字组合起来，
// 作为该整数的正负号；假如第一个非空字符是数字，
// 则直接将其与之后连续的数字字符组合起来，形成整数。
// 该字符串除了有效的整数部分之后也可能会存在多余的字符，
// 这些字符可以被忽略，它们对于函数不应该造成影响。

// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、
// 字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

// 在任何情况下，若函数不能进行有效的转换时，请返回 0。

// 说明：

// 假设我们的环境只能存储 32 位大小的有符号整数，
// 那么其数值范围为 [−231,  231 − 1]。
// 如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231)

// 示例 1:
// 输入: "42"
// 输出: 42

// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。

var atoi = function (str) {
    var strTrim = str.trim();
    var strArr = strTrim.split('');
    strArr = strArr.filter(item => {
        return item.trim();
    })
    var fh = '';
    var result = '';
    var i = 0;
    if (strArr[0] == '-') {
        strArr.shift();
        fh = '-';
    } else if (isNaN(strArr[0])) {
        return 0;
    }
    while (i < strArr.length) {
        if (!isNaN(strArr[i])) {
            result = result.concat(strArr[i])
            i++;
        } else {
            break;
        }
    }
    if (result > Math.pow(2, 31) - 1) {
        if (fh == '-') {
            return "INT_MIN(2^-31)";
        }
        if (fh == '') {
            return "INT_MAX(2^31-1)";
        }
    }
    return result = fh + result;

}
console.log(atoi("  - 4 42 1111with words"));
















// 给定一个包含非负整数的 m x n 网格，
// 请找出一条从左上角到右下角的路径，
// 使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

//贪心算法
var minPathSum = function (arr) {
    var sum = 0;
    var result = [];
    var pathSum = arr[0].length + arr.length - 1;
    var step = 0;
    var i = 0, j = 0;
    var right = 0, bottom = 0;
    while (step < pathSum) {
        if (i < arr.length - 1 && i < arr[0].length - 1) {
            right = arr[i][j + 1];
            bottom = arr[i + 1][j];
            result.push(Math.min(right, bottom))
            if (right < bottom) {
                j += 1;
               
            } else {
                i += 1;
            }
            step++;
            continue;
        }
        if(i == arr.length -1 && j<arr[0].length){
            right = arr[i][j+1];
            if(right != undefined){
                result.push(right);
            }
            j += 1;
            step++;
        }else {
            bottom = arr[i+1][j];
            if(bottom != undefined){
                result.push(bottom);
            }
            i +=1;
            step++;
        }
       
    }
    result.unshift(arr[0][0]);
    sum  = result.reduce( (a,b) => {
        return a + b;
    });
    return {
        '最短路径':result.join(' -> '),
        '最小路径和':sum
    };
}
console.log(minPathSum(
    [
        [1,3,1],
        [1,5,1],
        [4,2,1] 
    ]
))


//动态规划
var minPathSum = function(result){
 
  for(let i =0;i<result.length;i++){
      for(let j =0;j<result[0].length;j++){
        if(i==0 && j ==0) continue;
        else if(i==0){
            result[i][j] += result[i][j-1];
        }else if(j==0){
            result[i][j] += result[i-1][j];
        }else {
            let topSum = result[i][j] + result[i-1][j];
            let leftSum = result[i][j] + result[i][j-1];
            result[i][j] = Math.min(topSum,leftSum);
        }

      }
  }
  return result[result.length-1][result[0].length-1];
}
console.log(minPathSum(
    [
        [1,3,1],
        [1,5,1],
        [4,2,1], 
    ]
))
