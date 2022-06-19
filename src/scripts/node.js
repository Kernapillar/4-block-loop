class Node {
    constructor (state) {
        this.state = state;
    }


    stateToggle (clear=false) {
        if (!clear) {
            this.state = (this.state + 1) % 3
        } else {
            this.state = 0
        }

    }
}

export {Node};