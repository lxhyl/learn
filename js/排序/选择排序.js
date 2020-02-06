var arr = [1,3,2,4,5,8,6,5,3,1,4,2,5,71,12,1];
function chooseSort(arr){
    for(let i =0;i<arr.length-1;i++){
         var minIndex= i;
         for(let j = i;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
         }
         var temp = arr[minIndex];
         arr[minIndex] = arr[i];
         arr[i] = temp;
    }
    return arr;
}
console.log(chooseSort(arr));