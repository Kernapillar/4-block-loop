import { piano } from "./piano";
import * as Tone from 'tone'

class KeyboardPlayer {
    constructor (scale) {
        // this.instrument = instrument;
        this.instrument = piano

        // this.instrument =  new Tone.PolySynth(Tone.AMSynth)
        // let distortion =  new Tone.Distortion(0.8);
        // let reverb = new Tone.Freeverb(0.1, 3000);
        // let delay = new Tone.PingPongDelay('16n', 0.1);
        // this.instrument.chain(delay, reverb).toDestination();


        // this.instrument = new Tone.PolySynth(Tone.Synth,
        //     {
        //         "oscillator": {
        //             "type": "fatcustom",
        //               "partials" : [0.2, 1, 0, 0.5, 0.1],
        //               "spread" : 40,
        //               "count" : 3
        //         },
        //         "filter": {
        //             "Q": 2,
        //             "type": "lowpass",
        //             "rolloff": -24
        //         },
        //         "envelope": {
        //             "attack": 0.01,
        //             "decay": 1.6,
        //             "sustain": 0,
        //             "release": 1.6
        //         }
        //     }).toDestination()

        // this.instrument = new Tone.PolySynth(({ oscillator: { type: "sine8" } })).toDestination()
        this.scale =  scale
    }

    KEYMAP = {
        "z": 0,
        "x": 1,
        "c": 2,
        "v": 3, 
        "a": 3,
        "b": 4, 
        "s": 4,
        "n": 5,
        "d": 5,
        "m": 6,
        "f": 6,
        "q": 6,
        ",": 7,
        "g": 7,
        "w": 7,
        ".": 8,
        "h": 8,
        "e": 8,
        "/": 9,
        "j": 9,
        "r": 9,
        "k": 10,
        "t": 10,
        "l": 11,
        "y": 11,
        ";": 12,
        "u": 12,
        "i": 13,
        "o": 14,
        "p": 15
    }


    playNotes(key) {
        const note = this.scale[this.KEYMAP[key]]
        this.instrument.triggerAttack(note, Tone.context.currentTime)
        let keyPressed = document.getElementById(key)
        keyPressed.classList.add('pressed')

    }
    stopNotes(key){
        const note = this.scale[this.KEYMAP[key]]
        this.instrument.triggerRelease(note, Tone.context.currentTime)
        let keyPressed = document.getElementById(key)
        keyPressed.classList.remove('pressed')
    }
    
}

export {KeyboardPlayer}