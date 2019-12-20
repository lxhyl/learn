  var fourSum = function (arr, target) {
        arr.sort((a, b) => {
            return a - b;
        })
        var result = [];
        for (let i = 0; i < (arr.length - 3); i++) {
            for (let j = i + 1; j < (arr.length - 2); j++) {
                var start = j + 1;
                var end = arr.length - 1;
                while (start < end) {

                    var sum = arr[i] + arr[j] + arr[start] + arr[end];
                    if (sum == target) {
                        let ans = [arr[i], arr[j], arr[start], arr[end]];
                        result.push(ans);
                        end--; 
                        start = j + 1;  
                    }
                    if (sum > target) {
                        end--; 
                        start = j + 1;  
                    }
                    if(sum<target){
                        start++;
                        start = j + 1;  
                    }

                }
            }
        }
       
        console.log(result);

    }

    fourSum([1, 0, -1, 0, -2, 2], -1)