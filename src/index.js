// entry file for JS
import * as Tone from 'tone';
import { SynthSequencer } from './scripts/synthSequencer';
import { DrumSequencer } from './scripts/drumSequencer';
import {KeyboardPlayer} from './scripts/KeyboardPlayer';

// to do: 
        
    // fillout the controls for sequencers/setup double mode

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
    const notes = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"].reverse()
    const seq = new SynthSequencer(8, steps,'synth-grid', notes);
    seq.renderGrid('synth-grid');
    seq.renderControls('synth-clear')
    
    const drums = new DrumSequencer(4, steps, "drums-grid")
    drums.renderGrid("drums-grid")
    drums.renderControls("drum-controls")

    const scale = ["B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"]
    const keyboard = new KeyboardPlayer(scale)

    
    // sequencer play loop
    const playLoop = () => {
        const repeat = (time) => {
            seq.playNotes(everyOther, beat, time)
            drums.playNotes(everyOther, beat, time)
            beat = (beat + 1) % steps
            if (beat === 0) {
                if (everyOther) {
                    everyOther = false  
                } else {
                    everyOther = true
                }} 
        }
        Tone.Transport.scheduleRepeat(repeat, '8n')    
    }


   // keyboard input handler
   document.addEventListener('keydown', (e) => {
    if (!(e.key in keyboard.KEYMAP)) return
        if (e.repeat) return
        keyboard.playNotes(e.key);
    })
    document.addEventListener('keyup', (e) => {
        if (!(e.key in keyboard.KEYMAP)) return
        keyboard.stopNotes(e.key);
    })


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
