import { Node } from './node' 
import * as Tone from 'tone'

class Sequencer {
    constructor (rows, numSteps) {
        this.grid = this.createGrid(rows, numSteps);
    }

    

    // creates the grid and initiates node objects in each row for each step
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
    // renders the sequencer in the browser, adds event listeners to the nodes
    renderSequencer(container) {
        const seqContainer = document.getElementById(`${container}`);
        this.grid.forEach((row, rIdx) => {
            const lane = document.createElement('div');
            lane.id = `${rIdx}`;
            lane.className = "seq-row";
            row.forEach((unusedVar, nIdx) => {
                const seqNode = document.createElement('buton');
                seqNode.className = 'node'
                seqNode.classList.add(`col-${nIdx}`)
                seqNode.addEventListener('click', (e) => {
                    this.clickToggle(rIdx, nIdx, e);
                })
                lane.appendChild(seqNode);
            }) 
            seqContainer.appendChild(lane);

        })
        
    }
    
    // helper function to remove "selected" classes from a node
    removeNodeClasses(htmlNode) {
    if (htmlNode.classList.contains('selected')) {
            htmlNode.classList.remove('selected');
        } else if (htmlNode.classList.contains('selected-2')) {
            htmlNode.classList.remove('selected-2');
    }
   }

    // toggle logic when you activate/deactivate a node
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
    clearAll() {
        this.grid.flat.forEach(node => node.stateToggle(true))
        const nodes = document.getElementsByClassName('node');
        nodes.forEach(node => {
            this.removeNodeClasses(node);
        })
    }
    
    // adds and removes current-beat class to visually indicate current beat
    seqScanToggle(curBeat) {
        const nodeColumn = document.getElementsByClassName(`col-${curBeat}`)
        for (let i = 0; i < nodeColumn.length; i++) {
            const curNode = nodeColumn[i];
            curNode.classList.add('current-beat')
            setTimeout(() => {
                curNode.classList.remove('current-beat')
            }, 200)  
        }

    // why doesnt this work? 
    // seqScanToggle(curBeat) {
    //     const nodeColumn = document.getElementsByClassName(`col-${curBeat}`)
    //     for (let i = 0; i < nodeColumn.length; i++) {
    //         let j = i - 1
    //         if (j === -1) j = 15
    //         const curNode = nodeColumn[i];
    //         const prevNode = nodeColumn[j];
    //         curNode.classList.add('current-beat')
    //         if (prevNode.classList.contains('current-beat')) {
    //             prevNode.classList.remove('current-beat')
    //         }
        
    //     }
    // }

    }


};

export {Sequencer};