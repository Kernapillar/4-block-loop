// entry file for JS
import { Sequencer } from './scripts/parentSequencer'
import { synthSequencer } from './scripts/synthSequencer'
import * as Tone from 'tone'

// to do: 
    // set up sequencer full clear 
    // add sequencer scan indicator 
    // add global volume control 
    // add drums sequencer
        // define Playnotes for the drumsequencer!!!
        //  
    // add chords Sequencer
    
    // research synth sounds to use
    // CSS style! 

    // if there is time: 
        // allow chainable patterns to add variety to the loops
        // color coded canvas visualizer?

document.addEventListener("DOMContentLoaded", () => {
    
    // setup time and looping 
    let beat = 0;
    let steps = 16;
    let everyOther = false
    let playing = false;
    let started = false;
    Tone.Transport.bpm.value = 120;
 
    // initialize sequencers here 
    const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
    const seqTest = new synthSequencer(8, steps, notes);

    // must pass in the html container element when calling render
    seqTest.renderSequencer('test-grid');

    // add sequencer to the sequencer array:
    const sequencerArr = [seqTest];


    const playLoop = () => {
        const repeat = (time) => {
            sequencerArr.forEach(seq => {
                seq.playNotes(everyOther, beat, time)
                beat = (beat + 1) % steps
                if (beat === 0) {
                    if (everyOther) {
                        everyOther = false  
                    } else {
                        everyOther = true
                    }} 
            })
        }
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
