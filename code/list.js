//节点
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}
//链表类
function LList() {
    this.head = new Node('head');     //头节点
    //查找节点
    this.find = function find(item) {
        let currNode = this.head
        while (currNode && currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }
    //插入节点
    this.insert = function insert(newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    };
    //删除节点
    this.remove = function remove(item) {
        var prevNode = this.findPrev(item);
        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next;
        }
    };
    //查找前一个节点
    this.findPrev = function findPrev(item) {
        var currNode = this.head;
        while (currNode.next != null && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;

    };
    //显示链表
    this.display = function display() {
        var currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };
    // 链表逆序
    this.revese = function revese() {
        let newHead = new Node('head');
        let currNode = this.head.next;  //得到头节点后面的一个节点
        while (currNode !== null) {
            currNode.next = newHead.next;
            newHead.next = currNode;
            //将当前节点指向原链表中的第一个节点（即头节点的后面一个节点）
            currNode = currNode.next;
        }
        return newHead;  //返回新链表
    }
}


var fruits = new LList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
fruits.insert('orange', 'Apple')

// console.log(fruits.display());

console.log(fruits.display(fruits.revese()));