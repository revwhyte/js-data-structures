// binary tree with no balance (left is lower, right is higher than root)
class Tree {
    constructor() {
        this.root = null
    }

    seed(tNode) {
        let tn = tNode
        this.root = tn
    }

    plant(tNode) {
        let tn = tNode, rt = this.root, aux = null
        while(rt) {
            aux = rt
            // seed value is lower than current node
            if(tn.getValue() <= rt.getValue()) {
                // go down in tree by left
                console.log('lower')
                rt = rt.getLeftNode()
            }
            // seed value is higher than current node
            else {
                // go down in tree by right
                console.log('higher')
                rt = rt.getRightNode()
            }
        }
        if(tn.getValue() <= aux.getValue()) {
            // set seed as leftmost child
            aux.setLeftNode(tn)
        }
        else {
            // set seed as rightmost child
            aux.setRightNode(tn)
        }
    }

    getLowestSeed() {
        // concept: lowest seed is the leftmost seed
        let lms = this.root.getLeft()
        while(lms) {
            lms = lms.getLeft()
        }
        console.log(lms.getValue())
    }

    getHighestSeed() {
        // concept: highest seed is the rightmost seed
        let rms = this.root.getRight()
        while(rms) {
            rms = rms.getRight()
        }
        console.log(rms.getValue())
    }
}