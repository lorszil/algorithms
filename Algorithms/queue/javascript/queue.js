var Queue = function() {
    this.first = null;
    this.size = 0;
};

var Node = function(data) {
    this.data = data;
    this.next = null;
};

Queue.prototype.enqueue = function(data) {
    var node = new Node(data);

    if (!this.first){
        this.first = node;
    } else {
        var n = this.first;
        while (n.next) {
            n = n.next;
        }
        n.next = node;
    }
    this.size += 1;
    return node;
};

Queue.prototype.dequeue = function() {
    temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
};

var queue = new Queue();
queue.enqueue(24);
queue.enqueue(34);
queue.enqueue(44);
console.log("The top element: " + queue.first.data);
console.log(queue.size);
queue.dequeue();
console.log("The top element: " + queue.first.data);
console.log(queue.size);
queue.dequeue();
console.log("The top element: " + queue.first.data);
console.log(queue.size);
queue.dequeue();
console.log(queue.size);
