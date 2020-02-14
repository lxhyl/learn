//给定一个从0开始的未排序整数数组，找出其中缺失的数字
var arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums.indexOf(i) == -1) {
      return i;
    }
  }
};
console.log(missingNumber(arr))

{
  // 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
  var arr = [3, 4, -1, 1]
  var findMinNum = function (nums) {
    
    if(nums.length == 0){
      return 1
    }
    nums.sort((a, b) => { return a - b });
    var zNum = []
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        zNum.push(nums[i]);
      }
    }
    if(zNum.length == 0){
      return 1
    }
    if(zNum[0] > 1){
      return 1
    }else{
      for(let i = 2;i<zNum.length + 2;i++){
        if(zNum.indexOf(i) == -1){
          return i;
        }
      }
    }
   
  }
  console.log(findMinNum(arr))
}