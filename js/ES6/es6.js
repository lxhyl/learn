{
    //数组扁平化，并去重排序
    var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
    var bph = arr.toString().split(',').map(Number)
    var result = [...new Set(bph.sort((a, b) => {
        return a - b;
    }))]
    console.log(result)


    //数组去重的另一种方法
    function qc(array){
        return Array.from(new Set(array))
    }
    console.log(qc([1,2,3,3,2,1,35,135,2,3,1]));
}


{
    //字符串中出现最多的字符和次数
    var str = 'testsafafggasfasfjgjfaafaf';
    var arr = str.split('').sort();
    var theStr = '';
    var theNum = 1;
    arr.forEach(element => {
        let first = arr.indexOf(element);
        let last = arr.lastIndexOf(element);
        let num = last - first + 1;
        if (num > theNum) {
            theNum = num;
            theStr = element;
        }
    });
    console.log(theStr + '---' + theNum);
}

{   
    //Array.from(Array,function(item){}  )
    //有length属性的对象转数组，第二个参数可以对每个元素进行处理
    let arrayLike = {
        '0': '1',
        '1': '2',
        '2': '3',
        length: 3
    };
    let arr1 =Array.from(arrayLike);
    console.log(arr1);
    let arr2 =Array.from(arr1,item => item*2);
    console.log(arr2);
}


{
    //Symbol  新数据类型
    let a = Symbol('test1');
    let b = Symbol('test2');
    console.log(a);
}


{
    //new Set()
    let a = new Set('ababbc').add('d');

    for(let item of a.keys()){
        console.log(item)
    }
    for(let item of a.values()){
        console.log(item)
    }
    for(let item of a.entries()){
        console.log(item)
    }
    let b = [...a].join('')
    console.log(b)

    let x = new Set([1, 2, 3]);
    let y = new Set([4, 3, 2]);
    //并集
    let union =Array.from(new Set([...x,...y]));
    console.log(union);
    //交集
    let intersect = new Set([...x].filter(item => y.has(item)));
    console.log(intersect);
    //差集
    let difference = new Set([...x].filter(item => !y.has(item)));
    console.log(difference);
}


{
    //new Map()
    let set = new Set([
        ['foo', 1],
        ['bar', 2]
      ]);
    console.log(set)

    const set = new Set([
        ['foo', 1],
        ['bar', 2]
      ]);
    const m1 = new Map(set);
     
    console.log( m1.set('a',111))

//map的键是和内存地址绑定的，只要内存地址不同，键就不同
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];
map
.set(k1, 111)
.set(k2, 222);
console.log(map.get(k1))
console.log(map.get(k2))
}


{
    //交换数字位置，找最大数；
    
}