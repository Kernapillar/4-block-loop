# 4 Block Loop - Alex Kern 

![four_block_loop](https://user-images.githubusercontent.com/103587019/185812092-5cffd0f2-d76f-4825-8513-615efcb539a8.jpg)

## Live Link: 

https://kernapillar.github.io/4-block-loop/

## Background 
4 Block Loop is a small music making interface with four main sections, 3 sequencers (Drums, Bass and Chords) and a piano playable using a computer keyboard.
My goal was to provide a fun way for users to create music, without the need for any previous knowlege about music or synthesis. The synthesizer 
notes are all in the same key, to ensure that a user does not need to know any music theory to create something that sounds plesant. The title bar at the top of the screen reacts to the notes that are played, adding a color coded visual representation of the sound that is being played by the user!

  The first main section is a drum sequencer, which is essentially a grid that users can click notes into. When played, the sequencer will scan from left to 
right, playing notes that have been 'activated' different rows will be different drum sounds (kick, snare, hi-hats) and a user will be able to 
program in up to 16 notes at a time. In addition to drums there is a simple bass synth sequencer, as well as one for some basic chords. 
There is a toggle switch to activate "Extended Mode" at the bottom of the screen, which allows users to activate notes to be played every other loop, to extend the patterns and add some variety. 
Here is an example of a pattern clicked in to the Drums Sequencer: 


<img width="585" alt="image" src="https://user-images.githubusercontent.com/103587019/175431206-156c5a8d-e861-4107-a37a-ede43941f168.png">


The nodes marked with a "1 will play every other loop (starting with the 1st, then 3rd, and so on...) and the nodes with a "2" will play on the oposite loops. 

The second section is a polysynth (a synthesizer that can play multiple synth sounds at once). This is playable on the computer keyboard. The layout 
of the keys will be non-traditional and allow the user to use both hands at the same time to play different octaves, rather than the usual keyboard 
layout with a single octave. Each of the sections has a separate volume control, along with the master controls at the bottom of the page. 

## Technologies, Libraries, APIs 

The synthesizer sounds, audio sampling (used in the drum sequencer/playable piano), as well as the logic to sync up the timing of all the sequencers came from the Tone.js library. The files also include the Tonal library as well, however it is not utilized in the final projet. I plan to use this in the future to add the ability for the user to change the key of the notes played. I also used Canvas to add the reactive colors and visuals to the title header. The rest of the project was written using Javascript, HTML and CSS. 
This code snippit shows how I utilized the Tone.js Transport to keep all of the sequencers playing notes in sync: 


![image](https://user-images.githubusercontent.com/103587019/175432062-122d401a-d7f4-428a-8259-62fef7fcbe46.png)



Here is the code that handles the sequencer's scanning indicator, to visually represent the current position within the sequencer's loop that is playing:


![image](https://user-images.githubusercontent.com/103587019/175432411-2be49767-9cdd-48a7-88a8-6a837cde15d8.png)


## To Do:

In the near future I would like to add some additional features, such as allowing the user to select different sounds for each of the sequencers and keyboard, as well as giving the user the choice of which key the notes play in. I would also like to add the ability to save and share the beats played by a user, so they can show others the music that they have made. 
