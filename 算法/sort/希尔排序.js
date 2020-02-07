var arr = [3,1,2,4,5,8,6,5,3,1,4,2,5,71,12,1];

function xe(e){
  var gap =parseInt(e.length/2);
  while(gap > 0 ){
      for(let i = gap;i<e.length;i++){
          var item = e[i];
          var index = i - gap;
          while(e[index] > item & index >= 0 ){
              e[index + gap] = e[index];
              index -= gap;
          }
          e[index + gap] = item;
      }
      gap = parseInt(gap/2)
      
  }
  return e;
}
console.log(xe(arr));