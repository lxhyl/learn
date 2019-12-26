### 学习js  
学习中。。。    

**安装**   
`npm install zarray`   
**使用**  
``` 
import Zarray from 'zarray'   
var arr = new Zarray();
```  
去重
```
arr.qc(Array)
return Array
```
交并差集
```
type = 'j' //交集
type = 'b' //并集
type = 'c' //差集 
arr.jbc(arr1,arr2,type)
return Array
```
出现最多的元素
```
arr.mostItem(Array)
return {items,num}
```
最大值
 ```
 arr.max(Array) 
 return number 
 ``` 
最小值
```
arr.min(Array)
return number
```
数组扁平化
```
arr.bph(Array)
return Array
```
连接数组并去重
```
arr.ljqc(arr1,arr2,arr3...)
return Array
```