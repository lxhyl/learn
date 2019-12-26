
export default  function Zarray(){}

//去重
Zarray.prototype.qc = function(arr){
  return Array.from(new Set(arr));
}
//最大值
Zarray.prototype.max = function(arr){
  return Math.max(...arr);
}
//最小值
Zarray.prototype.min = function(arr){
  return Math.min(...arr);
}

//交并差集
/**
 * @param {数组一} arr1
 * @param {数组二} arr2
 * @param {类型 交集(j) 并集(b) 差集(c)} type
 * @return {Array}
 */
Zarray.prototype.jbc = function(arr1,arr2,type){
  let a = new Set(arr1);
  let b = new Set(arr2);
  if(type == 'j'){
     return   [...a].filter(item => b.has(item));
  }
  if(type == 'b'){
     return  [...new Set([...a,...b])];
  }
  if(type == 'c'){
     return [...a].filter(item => !b.has(item))
  }
}

//数组中出现最多的元素以及出现的次数
/**
 * @param {arr} 
 * @returns {items[item],num}
 */
Zarray.prototype.mostItem = function(arr){
  arr.sort();
  var num = 0;
  var items = [];
  for(let i=0;i<arr.length;i++){
    var first = arr.indexOf(arr[i]);
    var last = arr.lastIndexOf(arr[i]);
    var cha = last - first + 1;
    if(cha > num){
      num  = cha;
      items = [];
    }else if(cha == num){
      items.push(arr[i]);
    }
  }
  items = this.qc(items)
  return {
    'items':items,
    'num':num,
     
  }
}

//数组扁平化
Zarray.prototype.bph = function(arr){
  return arr.toString().split(',')
}

//连接数组并去重
Zarray.prototype.ljqc = function(){
   return this.qc(this.bph([...arguments]))
}
