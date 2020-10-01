// 1. node
let node1 = new Node(1)
console.log(node1)

// 2. node
let node2 = new Node(2)
console.log(node2)

// 3. queue
let queue = new Queue()
console.log(queue)

// 4. enqueue n1
queue.enqueueFist(node1)
console.log(queue)

// 5. enqueue n2
queue.enqueue(node2)
console.log(queue)

// 6. size of queue
console.log(queue.getSize())