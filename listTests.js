// test 1: create empty list
let list = new List()
console.log(list)

// test 2: create list node
let node1 = new Node(1)
console.log(node1)

// test 3: create second list node
let node2 = new Node(2)
console.log(node2)

// test 4: insert node1 into list
list.initializeList(node1)
console.log(list)

// test 5: insert node2 into list - order must be [2,1]
list.insertNewNode(node2)
console.log(list)