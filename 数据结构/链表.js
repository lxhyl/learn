
//创建新节点
class Node {
    constructor(ele){
        this.element = ele;
        this.next = null;
    }
}

// 链表类
class Linklists{
    constructor(){
        this.head = new Node('head') //初始化链表节点
        this.length = 1 // 链表长度

    }
    //在某个节点后插入
    insert(ele,newEle){
       let item = new Node(newEle);
       let tempNode = this.find(ele);
       let oldNext = tempNode.next;
       tempNode.next = item;
       item.next = oldNext;
       this.length += 1;
    }
    //删除
    remove(ele){
        let prNode = this.findPr(ele);//找到前一个
        let next = this.find(ele).next;//找到后一个
        prNode.next = next;
        this.length -= 1;
    }
    //查找
    find(ele){
       let tempNode = this.head;
       while(tempNode.element != ele){
          tempNode = tempNode.next
       }
       return tempNode;
    }
    //查找前一个
    findPr(ele){
        let tempNode = this.head;
        while(tempNode.next.element != ele){
            tempNode = tempNode.next
        }
        return tempNode;
    }
    //显示
    display(){
        let tempNode = this.head
        while(tempNode.next != null){
            console.log(tempNode.element)
            tempNode = tempNode.next;
        }
        console.log(tempNode.element)
       
        
    }

}
let list = new Linklists();
list.insert('head','张')
list.insert('张','王')
list.insert('王','Li')
list.remove('张')
list.insert('Li','Dog')
list.display()


