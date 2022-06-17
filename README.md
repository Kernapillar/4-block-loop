# 4 Block Loop - Alex Kern 

## Background 
  My project is a small music making interface, with a two main sections, a drum sequencer and a synthesizer playable using a computer keyboard.
I want to create a quick and fun way for users to create music, without the need for any previous knowlege about music or synthesis. The synthesizer 
notes will all be in the same key, to ensure that a user does not need to know any music theory to create something that sounds plesant. 

  The first main section is a drum sequencer, which is essentially a grid that users can click notes into. When played, the sequencer will scan from left to 
right, playing notes that have been 'activated' different rows will be different drum sounds (kick, snare, hi-hats, cymbols) and a user will be able to 
program in up to 4 bars of notes at a time. In addition to drums I plan to add a simple bass synt sequencer, as well as one for some basic chords. 
The second section is a polysynth (a synthesizer that can play multiple synth sounds at once). This will be playable on the computer keyboard. The layout 
of the keys will be non-traditional and allow the user to use both hands at the same time to play different octaves, rather than the usual keyboard 
layout with a single octave. The user will also be able to adjust the envelopes and add effects to the sound. 

## Functionality & MVPs

In 4 Block Loop, users will be able to:

- use global controls to play, pause, and control volume of the entire project
- click notes into the drum sequencer to play drum sounds in a 4 bar loop
- adjust the volume of each seprate drum sound, as well as toggle mute on a track 
- press buttons on their keyboard to play the synthesizer sounds along with the sequencer
- adjust peramaters of the synthesizer to change the synthesizer sounds




In addition, this project will include:

- a README file to provide an introduction to the project
- instructions on how to interact with each section of the app. Information about each section would be availabe on mouseover

https://wireframe.cc/8WHpyj
<img width="1073" alt="Screen Shot 2022-06-16 at 8 32 35 PM" src="https://user-images.githubusercontent.com/103587019/174219663-d9318629-d87d-44c4-bbed-ca5cf95cf350.png">

## Technologies, Libraries, APIs 

I will be using Tone.js to provide the synthesizer sounds and sampling functionality. 

## Implementation Timeline 

I plan to work on researching the Tone.js library and build an understaniding of how it works by the end of friday, and have a basic framework to build 
out the 4 sections of my project. over the weekend/by end of day monday, I plan to have working sequencers for the drum(most important) and 
bass/chords (a little less important). by tuesday/wednessday the main priority is getting the keyboard synth working, and creating the UI/instructions 
along the way, of course before the project is due thursday. 