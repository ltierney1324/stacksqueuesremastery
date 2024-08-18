class LinkedListStack{
    constructor(){
        this.top = null;
    }

    push(element){
        const newNode = new LinkedListNode(element);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        const popVal = this.top.value;
        this.top = this.top.next;
        return popVal;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.top.value;
    }

    isEmpty(){
        return this.top === null;
        }

}
