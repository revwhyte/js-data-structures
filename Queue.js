class Queue {
    constructor() {
        this.start = null
        this.end = null
        this.size = 0
    }

    peek() {
        return this.start.value
    }

    getLast() {
        return this.end
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size == 0
    }


    enqueueFist(queueNode) {
        this.start = queueNode
        this.end = queueNode
        this.size++
    }

    enqueue(qNode) {
        let newNode = qNode
        this.end.nextNode = newNode
        this.end = newNode
        this.size++
    }

    dequeue() {
        this.start = this.start.nextNode
        this.size--
    }
}