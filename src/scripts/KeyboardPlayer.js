import { piano } from "./piano";
import * as Tone from 'tone'

class KeyboardPlayer {
    constructor (instrument, scale) {
        this.instrument = instrument;
        this.scale = scale;
    }
    scale = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"]
    I = ["x"];
    II = ["c"];
    III = ["v", "a"];
    IV = ["b", "s"];
    V = ["n", "d"];
    VI = ["m", "f", "q"];
    VII = [",", "g", "w"];
    I2 = [".", "h", "e"];
    II2 = ["/", "j", "r"];
    III2 = ["k", "t"];
    IV2 = ["l", "y"];
    V2 = [";", "u"];
    VI2 = ["i"];
    VII2 = ["o"];
    VIII2 = ["p"];

    playNotes(key)


}