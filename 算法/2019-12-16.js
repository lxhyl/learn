{
// 给定 n 个非负整数 a1，a2，...，an，
// 每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，
// 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 例：
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

//1.暴力求解
var maxWater = function (e){
    let arr = [];
    
   for(let i=0;i<e.length;i++){
        e.forEach((item,index) => {
             if(e[i] < item){
                 var water = e[i] * (index - i);
                 arr.push(water);
             }
             if(e[i] > item){
                 var water = item * (index - i);
                 arr.push(water);
             }
            
        });
   }
   arr.forEach((item,index) => {
       if(item < 0){
         arr[index] = 0 - item;
       }
       if(item == undefined){
           arr.splice(index,1);
       }
   })
   arr.sort((a,b) => {
       return b - a;
   })
   console.log(arr[0])
}
maxWater([1,8,6,2,5,4,8,3,7]);



//2.双指针法

var maxWater = function(e){
  var i = 0,j=e.length -1;
  var water = 0;
  while(i<j){
   if(e[i] <= e[j]){
       water = Math.max(water,e[i]*(j-i));
       i++;
   }
   if(e[i] > e[j]){
      water = Math.max(water,e[j] * (j-i));
      j--;
   }
  }
  console.log(water);
}
maxWater([1,8,6,2,5,4,8,3,7]);
}



{
// 给定一个包含非负整数的 m x n 网格
// 请找出一条从左上角到右下角的路径
// 使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。
// 

var min = function(e){
     var m = e.length -1;
     var n = e[m].length- 1;
     var i = 0,j = 0;
     
   }
 min([
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ])



}