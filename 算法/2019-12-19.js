{
    // 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
    // 找出 nums 中的三个整数，使得它们的和与 target 最接近。
    // 返回这三个数的和。假定每组输入只存在唯一答案。

    // 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

    // 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

    //双指针法
    var threeSum = function (arr, target) {
        arr.sort((a, b) => {
            return a - b;
        })
        //初始化差
        var cha = Math.abs((arr[0] + arr[1] + arr[2]) - target);
        var result = 0
        arr.forEach((item, index, array) => {
            var i = index + 1;
            var j = array.length - 1;
            while (i < j) {
                sum = item + array[i] + array[j];
                 
               //因为数组已经排序好了
               //如果新值大于旧值，把j向前移位
               //反之把i向后移位
                if (Math.abs(sum - target) > cha) {

                    j--;
                } else {
                    cha = Math.abs(sum - target);
                    result = sum;
                    i++;
                }
               

            }

        });
        console.log(result);

    }
    threeSum([-1, 2, 1, -4], 1)

}