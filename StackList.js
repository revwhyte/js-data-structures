class StackList extends AbstractList{
    constructor() {
        super()
        this.base = null
    }

    pushFirst(sNode) {
        let newNode = sNode
        this.base = newNode
        this.head = newNode
        this.size++
    }

    push(sNode) {
        let node = sNode
        node.nextNode = this.head
        this.head = node
        this.size++
    }

    pop() {
        let node = this.head
        this.head = this.head.nextNode
        node.nextNode = null
        this.size--

        return node
    }
}