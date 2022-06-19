import { Node } from './node' 
import * as Tone from 'tone'

// hardcoded notes, create synths should be in a child class?

class Sequencer {
    constructor (rows, numSteps, soundsource, time) {
        this.grid = this.createGrid(rows, numSteps);
        this.soundsource = soundsource;
        this.time = time;
        this.synths = this.createSynths(rows);
        this.notes = ["F4", "Eb4", "C4", "Ab3"]
        console.log(this.synths)
    }

    // creates a basic synth object for each row of the sequencer
    createSynths (count) {
        const synths = [];
        for (let i = 0; i < count; i++) {
            let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();
            synths.push(synth);
        }
        console.log(synths)
        return synths;
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
    
    // plays active notes on the current beat
    playNotes(everyOther, curBeat, time) {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            let synth = this.synths[i]
            let note = this.notes[i]
            if (this.grid[i][curBeat].state === 1) {
                synth.triggerAttackRelease(note, '8n', this.time)
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                synth.triggerAttackRelease(note, '8n', this.time)
            }
        }
    }


};

export {Sequencer};