import * as Tone from 'tone'

const piano = new Tone.Sampler({
    urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        
    },
    release: 1,
    baseUrl: "https://kernapillar.github.io/4-block-loop/src/piano_samples/"
}).toDestination();

piano.volume.value = -6
piano.release = 2

export {piano};