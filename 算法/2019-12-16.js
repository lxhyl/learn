// 给定 n 个非负整数 a1，a2，...，an，
// 每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，
// 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 例：
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49


//暴力求解
var maxWater = function (e){
    let arr = [];
    let result = 0;
   for(let i=0;i<e.length;i++){
        e.forEach((item,index,array) => {
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


//双指针法
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