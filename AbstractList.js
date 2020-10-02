class AbstractList {
    constructor() {
        this.head = null
        this.size = 0
    }

    getHead() { return this.head.value }
    getSize() { return this.size }
    isEmpty() { return this.size == 0 }
    
    insertNewNode(nNode) {
        let nd = nNode
        nd.nextNode = this.head
        this.head = nd
        this.size++
    }

    printList() {
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.nextNode
        }
        console.log(`List size: ${this.size}`)
    }
}