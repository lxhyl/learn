
var px = function(arr){
  for(let i = 0,len = arr.length; i<len;i++){
     for(let j = 0;j<len-i-1;j++){
         if(arr[j] > arr[j+1]){
             var temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
         }
     }
      
  }
  return arr;
}

console.log(px([2,3,1,1,4,5,6,7]))