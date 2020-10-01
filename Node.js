class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }

    getValue() { return this.value }
    setValue(newValue) { this.value = newValue }
    getNextNode() { return this.nextNode }
    setNextNode(nextNode) { this.nextNode = nextNode }
}