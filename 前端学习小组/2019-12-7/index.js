var a = null;
console.log(typeof a);
console.log(typeof null);


function setName(obj){
    obj.name = 'lihua';
    console.log(obj)
    obj = new Object();
    obj.name = 'xiaohua';
    console.log(obj)
}
var person = new Object();
setName(person);
console.log(person); 

a = 111;
console.log(a.toString());

