let ndr = new TreeNode(20)
let nds = [
    new TreeNode(25),
    new TreeNode(17),
    new TreeNode(12),
    new TreeNode(5),
    new TreeNode(7),
    new TreeNode(21), 
    new TreeNode(30), 
    new TreeNode(28), 
    new TreeNode(27)
]

// let tree = new Tree()
// tree.seed(nd2)
// console.log(tree)

// tree.plant(nd1)
// console.log(tree)

// tree.getLowestSeed()
// tree.getHighestSeed()

// console.log('pre order')
// Tree.preOrder(tree.getRoot())

// console.log('in order')
// Tree.inOrder(tree.getRoot())

// console.log('post order')
// Tree.postOrder(tree.getRoot())

let tree = new Tree()
tree.seed(ndr)
nds.map(nd => tree.plant(nd))

console.log(tree)