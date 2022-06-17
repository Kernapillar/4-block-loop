// entry file for JS
import {func} from './scripts/anotherJSfile'
import * as Tone from 'tone'

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note

document.getElementById('test-button')?.addEventListener('click', async()=> {
    await Tone.start()
    console.log('audio is ready')
})

document.addEventListener('click', () => {
    synth.triggerAttackRelease("C4", "8n");
    console.log("pressed the button")
})