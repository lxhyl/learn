const {log} = console
{
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
     log(bar,foo)
}

{
    let x;
    //已声明的变量 解构赋值必须加上括号
    ({x} = {x:1})
    log(x)
}
 { //函数参数解构赋值
    function add([x, y]){
        return x + y;
      }
      
      log(add([1, 2])); 
      [[1, 2], [3, 4]].map(([a, b]) => a + b);
}
// 交换变量的值
{
    let x = 1;
    let y = 2;  // 此处必须有分号
    [x,y] = [y,x];
    console.log(x,y);
}
// 提取json数据
{
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309],
       
      };    
    let { id, status, data} = jsonData;
    console.log(id, status, data);
}
// 获取键名 键值
{
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');
    
    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
}