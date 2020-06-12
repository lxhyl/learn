
function fn(a,b,c){
    console.log(a,b,c)
    return a+b+c;
}
//bind进行函数柯里化
let bindFn =  fn.bind(null,1).bind(null,2);
console.log(bindFn(3));




