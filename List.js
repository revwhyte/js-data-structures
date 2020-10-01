class List {
    constructor() {
        this.start = null
        this.size = 0
    }

    initializeList(listNode) {
        this.start = listNode
        this.size++
    }

    getHeadListNodeValue() {
        return this.start.value
    }

    getHeadListNode() {
        return this.start
    }

    getListSize() {
        return this.size
    }

    insertNewNode(listNode) {
        let newNode = listNode
        newNode.nextNode = this.start
        this.start = newNode
        this.size++
    }

    isEmpty() {
        return this.size == 0
    }

    findFirstNode(value) {
        let target = this.start
        while(target) {
            if(target.value == value) {
                return true
            }
            target = target.nextNode
        }

        return false
    }

    removeNode(value) {
        let prev = null, next = this.start
        while(next != null) {
            if(next.value == value) {
                let x = next.value
                prev.nextNode = next.nextNode
                this.size--

                return x
            }
            else {
                prev = next
                next = next.nextNode
            }
        }

        return false
    }

    printList() {
        let current = this.start
        while(current) {
            console.log(current.value)
            current = current.nextNode
        }
        console.log(`List size: ${this.size}`)
    }
}