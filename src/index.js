// entry file for JS
import { Sequencer } from './scripts/parentSequencer'
import { SynthSequencer } from './scripts/synthSequencer'
import * as Tone from 'tone'
import { DrumSequencer } from './scripts/drumSequencer';

// to do: 
      
    // seperate the "clear all" for each synth
        // removes visuals but keeps the nodes playing
    // add drums sequencer
        // define Playnotes for the drumsequencer!!!
        //  
    // add chords Sequencer
    
    // research synth sounds to use
    // implement the playable piano
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
    const notes = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"]
    const seq = new SynthSequencer(8, steps, notes);
    const drums = new DrumSequencer(4, steps)

    // must pass in the html container element when calling render

    drums.renderGrid("drums-grid")
    drums.renderControls("drum-controls")

    seq.renderGrid('synth-grid');
    seq.renderControls('synth-clear')

    // add sequencer to the sequencer array:
    const sequencerArr = [seq];


    const playLoop = () => {
        const repeat = (time) => {
            sequencerArr.forEach(seq => {
                seq.playNotes(everyOther, beat, time)
                drums.playNotes(everyOther, beat, time)
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
            Tone.start()
            playing = true;
        }
    })

    // global volume control/mute
    const volume = Tone.Destination;
    const volumeButton = document.getElementById("volume-button");
    volumeButton.addEventListener("click", (e) => {
        if (volume.mute) {
            volume.mute = false;
        } else {
            volume.mute = true;
        }
        
    })
    volume.volume.value = 0;
    const volSlider = document.getElementById('volume-slider');
    volSlider.oninput = () => {
        volume.volume.value = volSlider.value}
    
        // global bpm control
    const bpmSlider = document.getElementById('bpm-slider');
    bpmSlider.oninput = () => {
        Tone.Transport.bpm.value = bpmSlider.value
        let bpmIndicator = document.getElementById('bpm-indicator')
        let currentBpm = Math.floor(Tone.Transport.bpm.value)
        bpmIndicator.innerText = `bpm: ${currentBpm}`
    }

})
