var arr = [3,1,2,4,5,8,6,5,3,1,4,2,5,71,12,1];

function cr(e){
    
    for(let i =0;i<e.length-1;i++){
        var item = e[i+1];
        var index = i;
        while(item < e[index] && index >= 0){
            e[index + 1] = e[index];
            index--;         
        }  
        e[index + 1] = item;
    }

    return e;
}
console.log(cr(arr));