class ArrayStack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }

        return this.stack[this.stack.length -1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}
