// entry file for JS
import { Sequencer } from './scripts/parentSequencer'
import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", () => {
 
    // initialize sequencers here 
    const seqTest = new Sequencer(8, 16);

    // must pass in the html container element when calling render
    seqTest.renderSequencer('test-grid');

    // add sequencer to the sequencer array:
    const sequencerArr = [seqTest];

    // setup time and looping 
    let beat = 0;
    let everyOther = false
    let playing = false;
    let started = false;

    const playLoop = () => {
        const repeat = (time) => {
            sequencerArr.forEach(seq => {
                console.log(sequencerArr)
                seq.playNotes(everyOther, beat, time)
                beat = (beat + 1) % 16
                if (beat === 0) {
                    if (everyOther) {
                        everyOther = false  
                    } else {
                        everyOther = true
                    }} 
            })
        }
        Tone.Transport.bpm.value = 120;
        Tone.Transport.scheduleRepeat(repeat, '8n')    
    }


    // setup play and pause controls
    const playPause = document.getElementById("play-pause");
    playPause.addEventListener("click", (e) => {
        if (!started) {
            Tone.start();
            started = true
            console.log('Audio is Started!')
            playLoop();
        }
        if (playing) {
            e.target.innerText = "Play"
            Tone.Transport.stop();
            beat = 0;
            everyOther = false;
            playing = false;
        } else {
            e.target.innerText = "Pause"
            Tone.Transport.start();
            playing = true;
        }
    })
    

})
