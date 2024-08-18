class LinkedListQueue{
    constructor(){
        this.rear = null;
        this.front = null;
    }

    enqueue(element){
        const newNode = new LinkedListNode(element);
        if(this.rear){
            this.rear.next = newNode;
        }else{
            this.front = newNode;
        }
        this.rear = newNode;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        const dequeueVal = this.front.value;
        this.front = this.front.next;
        if(!this.front){
            this.rear = null;
        }
        return dequeueVal;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.front.value;
    }

    isEmpty(){
        return this.front === null;
    }

}
