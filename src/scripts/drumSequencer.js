import { Sequencer } from './parentSequencer'
import {Particle } from './canvas'
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

    // toggle logic when you activate/deactivate a node
    // if extendedMode = true, allow selected 2 and 3 in the cycle, else just selected/none
    clickToggle(rIdx, nIdx, e, extendedMode) {
        const currentNode = this.grid[rIdx][nIdx]
        currentNode.stateToggle(extendedMode);
        if (currentNode.state === 1) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('drum-selected');
        } else if (currentNode.state === 2) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('drum-selected-2')
        } else if (currentNode.state === 3) {
            this.removeNodeClasses(e.target);
            e.target.classList.add('drum-selected-3')
            e.target.innerText = "1"
        } else {
            this.removeNodeClasses(e.target);
        }
        
    }

    // helper function to remove "selected" classes from a node
    removeNodeClasses(htmlNode) {
        if (htmlNode.classList.contains('drum-selected')) {
                htmlNode.classList.remove('drum-selected');
            } else if (htmlNode.classList.contains('drum-selected-2')) {
                htmlNode.classList.remove('drum-selected-2');
        } else if (htmlNode.classList.contains('drum-selected-3')) {
            htmlNode.classList.remove('drum-selected-3');
       }}

    playNotes(everyOther, curBeat, time) {
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            let sample = this.samples[i]
            this.seqScanToggle(curBeat)
            if (this.grid[i][curBeat].state === 1) {
                sample.start(time);
                Particle.particleFactory('yellow')
            }
            if (everyOther && this.grid[i][curBeat].state === 2) {
                sample.start(time);
                Particle.particleFactory('yellow')

            }
            if (!everyOther && this.grid[i][curBeat].state === 3) {
                sample.start(time);
                Particle.particleFactory('yellow')

            }
            
        }
    }


}

export {DrumSequencer};