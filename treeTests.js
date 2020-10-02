let nd1 = new TreeNode(2)
let nd2 = new TreeNode(3)

let tree = new Tree()
tree.seed(nd2)
console.log(tree)

tree.plant(nd1)
console.log(tree)

tree.getLowestSeed()
tree.getHighestSeed()

console.log('pre order')
Tree.preOrder(tree.getRoot())

console.log('in order')
Tree.inOrder(tree.getRoot())

console.log('post order')
Tree.postOrder(tree.getRoot())