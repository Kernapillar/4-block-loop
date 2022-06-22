import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'


class ChordSequencer extends Sequencer {
    constructor(rows, numSteps, container, scale){
        super(rows, numSteps, container);
        this.scale = scale;
        this.synths = this.createSynths(rows);
    }

    changeScale (newScale) {
        this.scale = newScale;
    }
    // creates a basic synth object for each row of the sequencer
    createSynths (count) {
        const synths = [];
        for (let i = 0; i < count; i++) {
            let synth = new Tone.PolySynth(
                Tone.AMSynth)
        let distortion =  new Tone.Distortion(0.8);
        let reverb = new Tone.Freeverb(0.1, 3000);
        let delay = new Tone.PingPongDelay('16n', 0.1);
        synth.chain(delay, reverb).toDestination();
            synths.push(synth);
        };
        return synths;
        }

    
    measure = 0

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
                    console.log("playing notes")
                }
                if (everyOther && this.grid[i][this.measure].state === 2) {
                    synth.triggerAttackRelease(note, '4b', time)
                }
                if (!everyOther && this.grid[i][this.measure].state === 3) {
                    synth.triggerAttackRelease(note, '4b', time)
                }
            }
            this.measure = (this.measure += 1) % 4
        }
    }


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
        for (let i = 0; i < nodeColumn.length; i++) {
            const curNode = nodeColumn[i];
            curNode.classList.add('current-beat')
            setTimeout(() => {
                curNode.classList.remove('current-beat')
            }, 200)  
        }
    }

    
}

export {ChordSequencer}; 