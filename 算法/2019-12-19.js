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
                if (Math.abs(sum - target) > cha) {
                    j--;
                } else {
                    //反之把i向后移位
                    //重新计算差
                    //给结果赋值
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

{
    //给定一个包含 n 个整数的数组 nums 和一个目标值 target，
    //判断 nums 中是否存在四个元素 a，b，c 和 d ，
    //使得 a + b + c + d 的值与 target 相等？
    //找出所有满足条件且不重复的四元组。

    // 注意：
    // 答案中不可以包含重复的四元组。
    // 示例：
    // 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
    // 满足要求的四元组集合为：
    // [
    //   [-1,  0, 0, 1],
    //   [-2, -1, 1, 2],
    //   [-2,  0, 0, 2]
    // ]
    //4数之和
    // 双指针法
    var fourSum = function (arr, target) {
        arr.sort((a, b) => {
            return a - b;
        })
        var result = [];
        for (let i = 0; i < (arr.length - 3); i++) {
            for (let j = i + 1; j < (arr.length - 2); j++) {
                var start = j + 1;
                var end = arr.length - 1;
                while (start < end) {

                    var sum = arr[i] + arr[j] + arr[start] + arr[end];
                    if (sum == target) {
                        let ans = [arr[i], arr[j], arr[start], arr[end]];
                        result.push(ans);
                        end--; 
                    }
                    if (sum > target) {
                        end--; 
                      
                    }
                    if(sum<target){
                        start++;
                     
                    }

                }
            }
        }
       
        console.log(result);

    }

    fourSum([1, 0, -1, 0, -2, 2], -1)
}