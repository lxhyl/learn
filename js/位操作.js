let log = console.log
log(14&3)
log(5&1);
log(4&1);
// 按位非
let num1 = -12;
console.log(~num1);
// 按位与
console.log((12112 & 1012).toString(2));

// 按位或
console.log(11.3333|0)
console.log((111 | 100).toString(2))

console.log(7.5>>1)



console.time()
for(let i = 0;i<1000000000;i++){
    i%2
}
console.timeEnd()


console.time()
for(let i = 0;i<1000000000;i++){
    i&1
}
console.timeEnd()