class QueueList extends AbstractList{
    constructor() {
        super()
        this.end = null
    }

    peek() {
        return super.getHead()
    }

    getLast() {
        return this.end.value
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size == 0
    }

    enqueueFirst(queueNode) {
        super.head = queueNode
        this.end = queueNode
        super.size++
    }

    enqueue(qNode) {
        let newNode = qNode
        this.end.nextNode = newNode
        this.end = newNode
        super.size++
    }

    dequeue() {
        super.head = super.head.nextNode
        this.size--
    }
}