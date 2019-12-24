// Object.defineProperty方法
var car = {};
var val =2000;

Object.defineProperty(car,'price',{
    enumerable:true,
    configurable:true,
   
    get(){
        console.log("读取")
        return val;
    },
    set(newval){
        console.log(`修改值为${newval}`)
        val = newval;
    }
})
car.price;
car.price = 1;

