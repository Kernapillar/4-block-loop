class Node {
    constructor (state) {
        this.state = state;
    }


    stateToggle (extendedMode, clear=false) {
        if (extendedMode && !clear) {
            if(this.state === 2) {
                this.state = 3
            } else if (this.state === 3){
                this.state = 0
            } else {this.state = 2}
            
        } else if (!extendedMode && !clear ){
            this.state = (this.state + 1) % 2
         } else {
            this.state = 0
        }

    }
}

export {Node};