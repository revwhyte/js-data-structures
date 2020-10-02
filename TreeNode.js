class TreeNode {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }

    getValue() { return this.value }
    setValue(value) { this.value = value }

    getLeftNode() { return this.left }
    setLeftNode(tNode) { this.left = tNode }

    getRightNode() { return this.right }
    setRightNode(tNode) { this.right = tNode }
}