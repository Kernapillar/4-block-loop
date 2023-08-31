import { Sequencer } from './parentSequencer'
import {Particle } from './canvas'
import * as Tone from 'tone'


class ChordSequencer extends Sequencer {
    constructor(rows, numSteps, container, scale){
        super(rows, numSteps, container);
        this.scale = scale;
        this.synths = this.createSynths(rows);
        this.measure = 0;
    }

    changeScale (newScale) {
        this.scale = newScale;
    }
    // creates a basic synth object for each row of the sequencer
    createSynths (count) {
        const synths = [];
        for (let i = 0; i < count; i++) {
            let synth = new Tone.PolySynth(({ oscillator: {
                "harmonicity": 3.01,
                "modulationIndex": 14,
                "oscillator": {
                    "type": "triangle"
                },
                "envelope": {
                    "attack": 0.8,
                    "decay": 0.3,
                    "sustain": 0.1,
                    "release": 1.2
                },
                "modulation" : {
                    "type": "square"
                },
                "modulationEnvelope" : {
                    "attack": 0.01,
                    "decay": 0.5,
                    "sustain": 0.2,
                    "release": 0.1
                }
            } })).toDestination()
            synths.push(synth);
        };
        return synths;
        }

    
    // measure = 0

    // plays active notes on the current beat
    playNotes(everyOther, curBeat, time) {
        if (curBeat%4 === 0) {
            for (let i = 0; i < this.grid.length; i++) {
                const row = this.grid[i];
                let synth = this.synths[i]
                let note = this.scale[i]
                this.seqScanToggle(this.measure)
                if (this.grid[i][this.measure].state === 1) {
                    synth.triggerAttackRelease(note, '1b', time)
                    Particle.particleFactory('greenyellow')

                }
                if (everyOther && this.grid[i][this.measure].state === 2) {
                    synth.triggerAttackRelease(note, '4b', time)
                    Particle.particleFactory('greenyellow')
                }
                if (!everyOther && this.grid[i][this.measure].state === 3) {
                    synth.triggerAttackRelease(note, '4b', time)
                    Particle.particleFactory('greenyellow')
                }
            }
            this.measure = (this.measure += 1) % 4
        }
    }

    // toggle logic when you activate/deactivate a node
    // if extendedMode = true, allow selected 2 and 3 in the cycle, else just selected/none
    clickToggle(rIdx, nIdx, e, extendedMode) {
        const currentNode = this.grid[rIdx][nIdx]
        currentNode.stateToggle(extendedMode);
        if (currentNode.state === 1) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('chords-selected');
        } else if (currentNode.state === 2) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('chords-selected-2')
            e.target.innerText = "2"
        } else if (currentNode.state === 3) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('chords-selected-3')
            e.target.innerText = "1"
        } else {
            this.removeNodeClasses(e.target);
        }
        
    }

    // helper function to remove "selected" classes from a node
    removeNodeClasses(htmlNode) {
        if (htmlNode.classList.contains('chords-selected')) {
                htmlNode.classList.remove('chords-selected');
            } else if (htmlNode.classList.contains('chords-selected-2')) {
                htmlNode.classList.remove('chords-selected-2');
        } else if (htmlNode.classList.contains('chords-selected-3')) {
            htmlNode.classList.remove('chords-selected-3');
       }}

    // overwrites the baseic render grid to style the chord nodes differently
    renderGrid(container) {
        const seqContainer = document.getElementById(`${container}`);
        this.grid.forEach((row, rIdx) => {
            const lane = document.createElement('div');
            lane.id = `${rIdx}`;
            lane.className = "seq-row";
            row.forEach((unusedVar, nIdx) => {
                const seqNode = document.createElement('button');
                seqNode.className = 'chord-node'
                seqNode.innerText = "2"
                seqNode.classList.add(`chordCol-${nIdx}`)
                seqNode.addEventListener('click', (e) => {
                    this.clickToggle(rIdx, nIdx, e, this.extendedMode);
                })
                lane.appendChild(seqNode);
            }) 
            seqContainer.appendChild(lane);
        })
    }

    // overwrites the parent clear all(nodes are a chord-node class)
    clearAll() {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            for (let j = 0; j < row.length; j++) {
                const node = row[j];
                node.stateToggle(this.extendedMode, true)
            }
        }
        const htmlNodes = document.getElementsByClassName('chord-node');
        const nodes = [...htmlNodes]
        nodes.forEach(node => {
            if (node.parentElement.parentElement.id === this.container) {
                this.removeNodeClasses(node);
            }
        })
    }

    // overwrites parent class scanning animation
    seqScanToggle(measure) {
        const nodeColumn = document.getElementsByClassName(`chordCol-${(measure)}`)
        // console.log(nodeColumn)
        for (let i = 0; i < nodeColumn.length; i++) {
            const curNode = nodeColumn[i];
            curNode.classList.add('current-beat')
            setTimeout(() => {
                curNode.classList.remove('current-beat')
            }, 400)  
        }
    }

    
}

export {ChordSequencer}; 