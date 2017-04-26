var Stack = function(){
    this.top = null;
    this.size = 0;
};

var Node = function(data){
    this.data = data;
    this.previous = null;
};

Stack.prototype.push = function(data) {
    var node = new Node(data);

    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
};

Stack.prototype.pop = function() {
    temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
};

var stack = new Stack();
stack.push(34);
stack.push(44);
stack.push(54);
console.log("The top element: " + stack.top.data);
console.log(stack.size);
stack.pop();
console.log("The top element: " + stack.top.data);
console.log(stack.size);
stack.pop();
console.log("The top element: " + stack.top.data);
console.log(stack.size);
stack.pop();
console.log(stack.size);

