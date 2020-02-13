// 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

// 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞。
{
    //迭代
    var findItem = function (arr) {
        var left = 0;
        var right = arr.length - 1;
        while (left != right) {
            var mid = Math.floor((left + right) / 2);
            if (arr[mid] < arr[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

{
    //递归
    var findItem = function (arr) {
        return main(arr, 0, arr.length - 1)
    }
    function main(arr, left, right) {
        console.log(`左边界${left}---右边界${right}`)
        if (left == right) {
            return `结果${right}`;
        }
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            return main(arr, mid + 1, right)
        } else {
            return main(arr, left, mid)
        }
    }
    var array = [1, 2, 1, 3, 5, 6, 4];
    console.log(findItem(array))
}

