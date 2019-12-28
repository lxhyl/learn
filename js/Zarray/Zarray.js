
export default  function Zarray() {}

Zarray.prototype = {
  constructor: Zarray,
  //去重
  qc(arr) {
    return Array.from(new Set(arr));
  
  },
  //根据数组对象值去重
  qcByValue(arr,key){
    var bra = new Map();
    return arr.filter( item =>  !bra.has(item[key]) && bra.set(item[key],'whatever you want'))
        //将item[key]值设为键加入到bra中,
        // 下次循环，查询是否有这个键，如果有就取反，结果为false；
        // 进入下一次循环

    
  }, 
  // 根据数组对象键去重
  qcByKey(arr,key){
    var obj = {}
    return arr.reduce((last,now) => {
          if(obj[key]){

          }else {
             obj[key] = true;
             last.push(now);
          }
          return last;
    },[])
  },
 
  //最大值
  max(arr) {
    return Math.max(...arr.filter(item => !isNaN(item)))
  },

  //最小值
  min(arr) {
    return Math.min(...arr.filter(item => !isNaN(item)));
  },

  //交并差集
  /**
   * @param {数组一} arr1
   * @param {数组二} arr2
   * @param {类型 交集(j) 并集(b) 差集(c)} type
   * @return {Array}
   */
  jbc(arr1, arr2, type) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    if (type == 'j') {
      return [...a].filter(item => b.has(item));
    }
    if (type == 'b') {
      return [...new Set([...a, ...b])];
    }
    if (type == 'c') {
      return [...a].filter(item => !b.has(item))
    }
  },

  //数组中出现最多的元素以及出现的次数
  /**
   * @param {arr} 
   * @returns {items[item],num}
   */
  mostItem(arr) {
    arr.sort();
    var num = 0;
    var items = [];
    for (let i = 0; i < arr.length; i++) {
      var first = arr.indexOf(arr[i]);
      var last = arr.lastIndexOf(arr[i]);
      var cha = last - first + 1;
      if (cha > num) {
        num = cha;
        items = [];
      } else if (cha == num) {
        items.push(arr[i]);
      }
    }
    items = this.qc(items)
    return {
      'items': items, //Array 
      'num': num,     //number
    }
  },
  //数组扁平化
  bph(arr) {
    //方法一
    return arr.toString().split(',')
  //reduce方法
  //  arr.reduce( (last,now) => {
  //    last.concat(now)
  //  },[])
  },
  //连接数组并去重
  ljqc() {
    return this.qc(this.bph([...arguments]))
  },

  //求和 绕过不能转化为number的字符
  qh(arr) {
    return arr.filter(item => !isNaN(item)).reduce((a, b) => a + b)
  },
  //数组乱序
  lx(arr) {
    for(let i = 0 ;i<arr.length;i++){
      var cIndex = parseInt(Math.random()*arr.length)
      var bri = arr[cIndex];
      arr[cIndex] = arr[i];
      arr[i] = bri;
    }
    return arr;
  },
}

// test

// var myArr = new Zarray()
// console.log(myArr.lx([1,2,3,4,5]))