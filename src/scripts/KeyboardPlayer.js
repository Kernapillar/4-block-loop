import { piano } from "./piano";
import * as Tone from 'tone'

class KeyboardPlayer {
    constructor (scale) {
        // this.instrument = instrument;
        this.instrument = piano
        // this.instrument = new Tone.PolySynth(({ oscillator: { type: "square8" } })).toDestination()
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
    }
    stopNotes(key){
        const note = this.scale[this.KEYMAP[key]]
        this.instrument.triggerRelease(note, Tone.context.currentTime)
    }
    
}

export {KeyboardPlayer}