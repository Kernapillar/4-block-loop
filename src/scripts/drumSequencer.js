import { Sequencer } from './parentSequencer'
import * as Tone from 'tone'
import { Player } from 'tone';

class DrumSequencer extends Sequencer {
    constructor(rows, numSteps) {
        super(rows, numSteps)
        this.samples = this.setSamples();
    }

    setSamples() {
        // const kickBuffer = new Audio("/drum_samples/kick.mp3")
        const soundsArr = [];
        // const hiHat2 = new Audio("/drum_samples/hihat2.mp3");
        // const hiHat = new Audio("/drum_samples/hihat.mp3");
        // const snare = new Audio("/drum_samples/snare.mp3");
        // const kick = new Audio("/drum_samples/kick.mp3");
        
        const hiHat2 = document.getElementById('hihat2')
        const hiHat = document.getElementById('hihat');
        const snare = document.getElementById('snare');
        const kick = document.getElementById('kick');
        // https://github.com/Kernapillar/4-block-loop/tree/main/src/drum_samples

        // const hiHat2 = new Player("https://github.com/mbardin/PDM-resources/blob/main/docs/media/sound_samples/rhythmic_effects/Bubbles.mp3")
        // const hiHat = new Player("https://github.com/Kernapillar/4-block-loop/tree/main/src/drum_samples")
        // const snare = new Player("https://github.com/Kernapillar/4-block-loop/tree/main/src/drum_samples")
        // const kick = new Player("https://github.com/Kernapillar/4-block-loop/tree/main/src/drum_samples")        
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
                sample.currentTime = 0
                sample.play(time);
                console.log("yellow")
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                sample.currentTime = 0
                sample.play(time);
                console.log("red")
            }
            
        }
    }


}

export {DrumSequencer};