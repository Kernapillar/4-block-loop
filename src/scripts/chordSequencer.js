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
            // (Tone.Synth,
                // {
                // "portamento" : 0.0,
                // "oscillator": {
                //     "type": "square4"
                // },
                // "envelope": {
                //     "attack": .5,
                //     "decay": 1,
                //     "sustain": .2,
                //     "release": 1
                // }
                // }).toDestination()

                // synth.volume.value = -16
            synths.push(synth);
        };
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
                synth.triggerAttackRelease(note, '1b', time)
                console.log("playing notes")
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                synth.triggerAttackRelease(note, '4b', time)
            }
            if (!everyOther && this.grid[i][curBeat].state === 3) {
                synth.triggerAttackRelease(note, '4b', time)
            }
        }
    }


    
}

export {ChordSequencer}; 