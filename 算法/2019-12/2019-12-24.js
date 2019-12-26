{
    // 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
    // 并返回他们的数组下标。

    // 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    //   示例:  
    //     给定 nums = [2, 7, 11, 15], target = 9   
    //     因为 nums[0] + nums[1] = 2 + 7 = 9
    //     所以返回 [0, 1]

    var answer = [];
    var twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            nums.filter((item) => {
                const sum = nums[i] + item
                if (sum == target) {
                    const halfLength = parseInt(nums.length / 2);
                    if (halfLength < nums.indexOf(item)) {
                        let val = [i, nums.indexOf(item)]
                        answer.push(val)
                    }
                }
            })
        }
    }
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    twoSum(nums, target);
    console.log(answer);

}

//递归
console.time()
function jc(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1)
    }
}
console.log(jc(120))
console.timeEnd();

console.time();
function jc(num){
    var result = 1;
    for(let i=1;i<=num;i++){
       result *= i
    }
    console.log(result)
}
jc(120)
console.timeEnd();


function a(num) {

    var arr = [];
    if (num != 0) {
        for (let i = 1; i <= num; i++) {
            arr.push(num);
        }

        a(num - 1)
    }
    console.log(arr)
}
a(5);
//

function isPrime(num) {
    let i = 2;
    while (num > i) {
        if (num % i == 0) {
            return false
        } else {
            i++
        }
    }
    return true;
}
console.log(isPrime(137))


// 假设有 n 台超级洗衣机放在同一排上。
// 开始的时候，每台洗衣机内可能有一定量的衣服，也可能是空的。

// 在每一步操作中，你可以选择任意 m （1 ≤ m ≤ n） 台洗衣机，
// 与此同时将每台洗衣机的一件衣服送到相邻的一台洗衣机。

// 给定一个非负整数数组代表从左至右每台洗衣机中的衣物数量,
// 请给出能让所有洗衣机中剩下的衣物的数量相等的最少的操作步数。
// 如果不能使每台洗衣机中衣物的数量相等，则返回 -1。
function xyj(machines) {
    var sum = machines.reduce((left, right) => {
        return left + right
    })

    var meanValue = sum / machines.length;

    if (sum % machines.length == 0) {
        machines.sort((a, b) => {
            return a - b
        });
        console.log(machines)
        machines.forEach((item, index, arr) => {
            while (item != meanValue) {
                item += 1;
                arr[index] += 1;
                arr[index + 1] -= 1;
                console.log(machines)
            }
        });

    } else {
        console.log('-1')
        return -1
    }
}
xyj([5, 1, 3, 7])



//斐波那契数列

//递归  
console.time()
function fbnq(n) {
    if (n < 2) {
        return 1;
    } else {
        return (fbnq(n - 1) + fbnq(n - 2));
    }
}
console.log(fbnq(45))
console.timeEnd();

//动态规划
console.time()
function fbnq(n) {
   var result = [1,1];
   if(n<3){
       console.log(result)
   }
   var left = 1;
   var mid= 1;
   var right = 0;
   for(let i = 2;i<=n;i++){
       right = left + mid;
       left = mid;
       mid = right;
      
   }
   console.log(right)
}
fbnq(45)
console.timeEnd();

var a = 1000
var twoA =  a.toString(2);
console.log(twoA)
var tenA = console.log(parseInt(twoA,2))
