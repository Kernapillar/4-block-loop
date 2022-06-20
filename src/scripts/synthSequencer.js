import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'
import { Volume } from 'tone';


class synthSequencer extends Sequencer {
    constructor(rows, numSteps, scale){
        super(rows, numSteps);
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
            let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();
            synths.push(synth);
        }
        return synths;
    }

    // plays active notes on the current beat
    playNotes(everyOther, curBeat, time) {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            let synth = this.synths[i]
            let note = this.scale[i]
            this.seqScanToggle(curBeat)
            if (this.grid[i][curBeat].state === 1) {
                synth.triggerAttackRelease(note, '8n', time)
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                synth.triggerAttackRelease(note, '8n', time)
            }
        }
    }


    
}

export {synthSequencer}; 