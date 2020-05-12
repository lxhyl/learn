class List {
    constructor(){
        this.pos = 0;   //当前索引位置
        this.length = 0; //列表长度
        this.data = [];//保存元素
    }
    //清空列表
    clear(){
      this.pos = 0;
      this.data = [];
      this.length = 0;
    }
    //以字符串形式返回列表
    toString(){
      return this.data.toString();
    }
    //当前位置后插入元素
    insert(element){
      if(this.pos != 0){
      this.data.splice(this.pos,0,element);
      this.length += 1;
      }else {
          this.data.push(element);
      }
    }
    //最后一位插入元素
    append(element){
        this.data.push(element);
        this.length += 1;
    }
    //删除元素
    remove(element){
       let index = this.contains(element);
       this.data.splice(index,1);
       this.length -= 1;
    }
    // 将当前位置移到第一个元素
    front(){
      this.pos = 0;
    }
    // 将当前位置移到最后一个元素
    end(){
       let temp = this.data[this.pos];
       this.data.push(temp);
    }
    //前移一位
    prev(){
       if(this.pos >= 1){
           this.pos -= 1;
           return this.pos
       }else{
           return this.pos
       }
    }
    //后移一位
    next(){
        if(this.pos < this.length){
            this.pos += 1;
            return this.pos;
        }else{
            return this.pos;
        }
    }
    //将当前位置移到指定位置
    moveTo(index){
    if( 0 < this.pos < this.length)
      this.pos = index;
    }
    //判断元素是否在列表中
    contains(element){
       for(let i=0;i<this.length;i++){
           if(this.data[i] == element){
               return i;
           }
       }
    }
    consoleData(){
        console.log(this.data);
    }
}

let list = new List();
// list.append(1);
// list.consoleData();
// console.log(list.toString());
list.append(1);
list.insert(222);
list.consoleData();
list.remove(1);
list.consoleData();