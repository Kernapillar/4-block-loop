// entry file for JS
import * as Seq from './scripts/anotherJSfile'
import * as Tone from 'tone'

// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

// // const sampler = new Tone.Sampler({
// //     urls: {
// //         kick: '/drum_samples/kick.mp3',
// //         snare: '/drum_samples/snare.mp3',

// //     }
// // }).toDestination();

// //play a middle 'C' for the duration of an 8th note

// document.getElementById('test-button')?.addEventListener('click', async()=> {
//     await Tone.start()
//     console.log('audio is ready')
// })

// // document.addEventListener('click', () => {
// //     synth.triggerAttackRelease("C4", "8n");
// //     console.log("pressed the button")
// // })


// document.getElementById('kick').addEventListener('click', () => {
    
// })

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('test-button')?.addEventListener('click', async()=> {
    await Tone.start()
    console.log('audio is ready')
})

    const synths = [
        new Tone.Synth(),
        new Tone.Synth(), 
        new Tone.Synth()
    ];
    synths[0].oscillator.type = 'triangle';
    synths[1].oscillator.type = 'sine';
    synths[2].oscillator.type = 'sawtooth';
    
    synths.forEach(synth => synth.toDestination());
    
    const rows = document.body.querySelectorAll('div > div'), 
    notes = ["G5", "E4", "C3"];
    
    Tone.Transport.scheduleRepeat(repeat, '8n')
    Tone.Transport.start();
    
    let index = 0
    function repeat(time) {
        let step = index % 8
        for (let i = 0; i < rows.length; i++) {
            let synth = synths[i],
            note = notes[i],
            row = rows[i],
            input = row.querySelector(`input:nth-child(${step + 1})`);
            if (input.checked) synth.triggerAttackRelease(note, '8n', time);
            console.log("made it here")
        }
        index++
    }

    addEventListener
    
})
