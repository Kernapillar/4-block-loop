import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'

class DrumSequencer extends Sequencer {
    constructor(rows, numSteps) {
        super(rows, numSteps)
        this.samples = this.setSamples();
    }

    // setSamples() {
    //     const soundsArr = [];
    //     const hiHat2 = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3");
    //     const hiHat = new Tone.Player('https://github.com/Kernapillar/4-block-loop/blob/main/src/drum_samples/hihat.mp3');
    //     const snare = new Tone.Player('/drum_samples/snare.mp3');
    //     const kick = new Tone.Player('/drum_samples/kick.mp3');
    //     soundsArr.push(hiHat2);
    //     soundsArr.push(hiHat);
    //     soundsArr.push(snare);
    //     soundsArr.push(kick);
    //     return soundsArr;
    // }


    playNotes(everyOther, curBeat, time) {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            let sample = this.samples[i]
            this.seqScanToggle(curBeat)
            if (this.grid[i][curBeat].state === 1) {
                sample.start();
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                sample.start();
            }
            
        }
    }


}

export {DrumSequencer};