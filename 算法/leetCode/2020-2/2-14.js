var arr = [9,6,4,2,3,5,7,0,1]
var missingNumber = function(nums) {
     for(let i = 0;i<nums.length + 1;i++){
       if(nums.indexOf(i) == -1){
          return i;
       }
     }
};
console.log(missingNumber(arr))