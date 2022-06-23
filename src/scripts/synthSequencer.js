import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'


class SynthSequencer extends Sequencer {
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
            let synth = new Tone.MonoSynth(

                {
                    "oscillator": {
                        "type": "fmsquare5",
                        "modulationType" : "triangle",
                          "modulationIndex" : 2,
                          "harmonicity" : 0.501
                    },
                    "filter": {
                        "Q": 1,
                        "type": "lowpass",
                        "rolloff": -24
                    },
                    "envelope": {
                        "attack": 0.01,
                        "decay": 0.1,
                        "sustain": 0.4,
                        "release": 2
                    },
                    "filterEnvelope": {
                        "attack": 0.01,
                        "decay": 0.1,
                        "sustain": 0.8,
                        "release": 1.5,
                        "baseFrequency": 50,
                        "octaves": 4.4
                    }
                }).toDestination()
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
                synth.triggerAttackRelease(note, '8n', time)
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                synth.triggerAttackRelease(note, '8n', time)
            }
            if (!everyOther && this.grid[i][curBeat].state === 3) {
                synth.triggerAttackRelease(note, '8n', time)
            }
        }
    }

    // toggle logic when you activate/deactivate a node
    // if extendedMode = true, allow selected 2 and 3 in the cycle, else just selected/none
    clickToggle(rIdx, nIdx, e, extendedMode) {
        const currentNode = this.grid[rIdx][nIdx]
        currentNode.stateToggle(extendedMode);
        if (currentNode.state === 1) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('bass-selected');
        } else if (currentNode.state === 2) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('bass-selected-2')
        } else if (currentNode.state === 3) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('bass-selected-3')
            e.target.innerText = "1"
        } else {
            this.removeNodeClasses(e.target);
        }
        
    }


    // helper function to remove "selected" classes from a node
    removeNodeClasses(htmlNode) {
    if (htmlNode.classList.contains('bass-selected')) {
            htmlNode.classList.remove('bass-selected');
        } else if (htmlNode.classList.contains('bass-selected-2')) {
            htmlNode.classList.remove('bass-selected-2');
    } else if (htmlNode.classList.contains('bass-selected-3')) {
        htmlNode.classList.remove('bass-selected-3');
   }}
    
}

export {SynthSequencer}; 