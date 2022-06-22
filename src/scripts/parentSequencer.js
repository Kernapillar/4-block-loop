import { Node } from './node' 
import * as Tone from 'tone'

class Sequencer {
    constructor (rows, numSteps, container) {
        this.grid = this.createGrid(rows, numSteps);
        this.container = container;
        this.extendedMode = false
    }

    extendedModeToggle() {
        if (this.extendedMode) {
            this.extendedMode = false
        } else this.extendedMode = true
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
    renderGrid(container) {
        const seqContainer = document.getElementById(`${container}`);
        this.grid.forEach((row, rIdx) => {
            const lane = document.createElement('div');
            lane.id = `${rIdx}`;
            lane.className = "seq-row";
            row.forEach((unusedVar, nIdx) => {
                const seqNode = document.createElement('button');
                seqNode.className = 'node'
                seqNode.classList.add(`col-${nIdx}`)
                seqNode.addEventListener('click', (e) => {
                    this.clickToggle(rIdx, nIdx, e, this.extendedMode);
                })
                lane.appendChild(seqNode);
            }) 
            seqContainer.appendChild(lane);
        })
    }
    //  renders the options for the sequencer (hardcode buttons)
    renderControls(container) {
        const controlContainer = document.getElementById(`${container}`);
        const clearButton = document.createElement('button')
        clearButton.innerText = "Clear"
        clearButton.addEventListener('click', (e)=> {
            this.clearAll();
        })
        controlContainer.appendChild(clearButton);
    }
    
    // helper function to remove "selected" classes from a node
    removeNodeClasses(htmlNode) {
    if (htmlNode.classList.contains('selected')) {
            htmlNode.classList.remove('selected');
        } else if (htmlNode.classList.contains('selected-2')) {
            htmlNode.classList.remove('selected-2');
    } else if (htmlNode.classList.contains('selected-3')) {
        htmlNode.classList.remove('selected-3');
   }}

    // toggle logic when you activate/deactivate a node
    // if extendedMode = true, allow selected 2 and 3 in the cycle, else just selected/none
    clickToggle(rIdx, nIdx, e, extendedMode) {
        const currentNode = this.grid[rIdx][nIdx]
        currentNode.stateToggle(extendedMode);
        if (currentNode.state === 1) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('selected');
        } else if (currentNode.state === 2) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('selected-2')
        } else if (currentNode.state === 3) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('selected-3')
        } else {
            this.removeNodeClasses(e.target);
        }
        
    }
    clearAll() {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            for (let j = 0; j < row.length; j++) {
                const node = row[j];
                node.stateToggle(this.extendedMode, true)
            }
        }
        const htmlNodes = document.getElementsByClassName('node');
        const nodes = [...htmlNodes]
        nodes.forEach(node => {
            if (node.parentElement.parentElement.id === this.container) {
                this.removeNodeClasses(node);
            }
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
    }
    
   


};

export {Sequencer};