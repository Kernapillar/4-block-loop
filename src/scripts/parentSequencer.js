// import { Node } from './node' 

class Node {
    constructor (state) {
        // this.sound = sound;
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


class Sequencer {
    constructor (rows, numSteps, soundsArr, time) {
        this.grid = this.createGrid(rows, numSteps);
        this.soundsArr = soundsArr;
        this.time = time;
    }

    createGrid (numRows, numSteps) {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j < numSteps; j++) {
                const node = new Node(0);
                row.push(node);
            } rows.push(row);
        } return rows;
        
    }
    
    renderSequencer(container) {
        const seqContainer = document.getElementById(`${container}`);
        this.grid.forEach((row, rIdx) => {
            const lane = document.createElement('div');
            lane.id = `${rIdx}`;
            lane.className = "seq-row";
            row.forEach((unusedVar, nIdx) => {
                const seqNode = document.createElement('buton');
                seqNode.className = 'node'
                seqNode.addEventListener('click', (e) => {
                    this.clickToggle(rIdx, nIdx, e);
                })
                lane.appendChild(seqNode);
            }) 
            seqContainer.appendChild(lane);

        })
        
    }
    
   removeNodeClasses(htmlNode) {
    if (htmlNode.classList.contains('selected')) {
            htmlNode.classList.remove('selected');
        } else if (htmlNode.classList.contains('selected-2')) {
            htmlNode.classList.remove('selected-2');
    }
   }

    clickToggle(rIdx, nIdx, e) {
        const currentNode = this.grid[rIdx][nIdx]
        currentNode.stateToggle();
        if (currentNode.state === 1) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('selected');
        } else if (currentNode.state === 2) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('selected-2')
        } else {
            this.removeNodeClasses(e.target);
        }
         
    }
    

};

export {Sequencer};