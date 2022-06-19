// entry file for JS
import * as Seq from './scripts/anotherJSfile'
import { Sequencer } from './scripts/parentSequencer'
import { Node } from './scripts/node' 
import * as Tone from 'tone'

document.addEventListener("DOMContentLoaded", () => {

    const seqTest = new Sequencer(4, 16);
    seqTest.renderSequencer('test-grid');

    // Tone.Transport.scheduleRepeat(repeat, '8n')
    // let playing = false;

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
