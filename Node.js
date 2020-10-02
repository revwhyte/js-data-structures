class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }

    getValue() { return this.value }
    getNextNode() { return this.nextNode }
    getNextNodeValue() { return this.nextNode.value }
}