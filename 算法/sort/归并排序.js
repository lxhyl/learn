var arr = [3,1,2,4,5,8,6,5,3,1,4,2,5,71,12,1];
    //递归分解
    function fj(arr){
       if(arr.length == 1){
           return arr;
       }

        var mid = Math.floor(arr.length/2);
        var left = arr.slice(0,mid);
        var right = arr.slice(mid);
       
        return hb(fj(left),fj(right))
    }
    //递归合并
    function hb(left,right){
        console.log(`左:---${left}    右:---${right}`)
        var l = left && left.length,r = right && right.length;
        var i = 0,j = 0;
        var result = [];
       
        while(i<l && j<r){
            if(left[i] < right[j])
                result.push(left[i++])
            else 
                result.push(right[j++])
            
        }
        
        while(i<l){
            result.push(left[i++])
        }
        while(j<r){
            result.push(right[j++])
        }
        
         return result;
    }

console.log(fj(arr));