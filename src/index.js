// entry file for JS
import * as Seq from './scripts/anotherJSfile'
import { Sequencer } from './scripts/parentSequencer'
import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", () => {

    const seqTest = new Sequencer(4, 8);
    seqTest.testfunc()
    seqTest.renderSequencer('test-grid');
     
    const seqTest2 = new Sequencer(3, 2);
    seqTest2.renderSequencer('test-2')

// document.getElementById('test-button')?.addEventListener('click', async()=> {
// await Tone.start()
// console.log('audio is ready')
// })

// const synths = [
//     new Tone.Synth(),
//     new Tone.Synth(), 
//     new Tone.Synth()
// ];
// synths[0].oscillator.type = 'square8';
// synths[1].oscillator.type = 'square8';
// synths[2].oscillator.type = 'square8';

// synths.forEach(synth => synth.toDestination());

// const rows = document.body.querySelectorAll('div > div'), 
// notes = ["G5", "E4", "C3"];

// Tone.Transport.scheduleRepeat(repeat, '8n')
// let playing = false;

// let index = 0
// function repeat(time) {
//     let step = index % 8
//     for (let i = 0; i < rows.length; i++) {
//         let synth = synths[i],
//         note = notes[i],
//         row = rows[i],
//         input = row.querySelector(`input:nth-child(${step + 1})`);
//         if (input.checked) synth.triggerAttackRelease(note, '8n', time);
        
//     }
//     index++
// }
// const playPause = document.getElementById("play-pause");
// playPause.addEventListener("click", (e) => {
//     if (playing) {
//         e.target.innerText = "Play"
//         Tone.Transport.stop();
//         playing = false;
//         index = 0
//     } else {
//         Tone.start();
//         e.target.innerText = "Pause"
//         Tone.Transport.start();
//         playing = true;
//     }
// })
    
})
