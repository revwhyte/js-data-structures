class Stack {
    constructor() {
        this.base = null
        this.top = null
        this.size = 0
    }

    peek() {
        return this.top
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size == 0
    }

    pushFirst(sNode) {
        let newNode = sNode
        this.base = newNode
        this.top = newNode
        this.size++
    }

    push(sNode) {
        let node = sNode
        node.nextNode = this.top
        this.top = node
        this.size++
    }

    pop() {
        let node = this.top
        this.top = this.top.nextNode
        this.size--

        return node
    }
}