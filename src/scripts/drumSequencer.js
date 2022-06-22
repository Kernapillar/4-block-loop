import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'
import { Player } from 'tone';

class DrumSequencer extends Sequencer {
    constructor(rows, numSteps, container) {
        super(rows, numSteps, container)
        this.samples = this.setSamples();
    }

    setSamples() {
        const soundsArr = [];
        const hiHat2 = new Player("https://kernapillar.github.io/4-block-loop/src/drum_samples/hihat2.mp3").toDestination();
        const hiHat = new Player("https://kernapillar.github.io/4-block-loop/src/drum_samples/hihat.mp3").toDestination();
        const snare = new Player("https://kernapillar.github.io/4-block-loop/src/drum_samples/snare.mp3").toDestination();
        const kick = new Player("https://kernapillar.github.io/4-block-loop/src/drum_samples/kick.mp3").toDestination();    
        soundsArr.push(hiHat2);
        soundsArr.push(hiHat);
        soundsArr.push(snare);
        soundsArr.push(kick);
        return soundsArr;
    }


    playNotes(everyOther, curBeat, time) {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            let sample = this.samples[i]
            this.seqScanToggle(curBeat)
            if (this.grid[i][curBeat].state === 1) {
                sample.start(time);}
            if (everyOther && this.grid[i][curBeat].state === 2) {
                sample.start(time);
            }
            if (!everyOther && this.grid[i][curBeat].state === 3) {
                sample.start(time);
            }
            
        }
    }


}

export {DrumSequencer};