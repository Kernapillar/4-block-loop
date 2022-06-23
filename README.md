# 4 Block Loop - Alex Kern 

## Background 
4 Block Loop is a small music making interface with four main sections, 3 sequencers (Drums, Bass and Chords) and a piano playable using a computer keyboard.
My goal was to provide a fun way for users to create music, without the need for any previous knowlege about music or synthesis. The synthesizer 
notes are all in the same key, to ensure that a user does not need to know any music theory to create something that sounds plesant. 

  The first main section is a drum sequencer, which is essentially a grid that users can click notes into. When played, the sequencer will scan from left to 
right, playing notes that have been 'activated' different rows will be different drum sounds (kick, snare, hi-hats) and a user will be able to 
program in up to 16 notes at a time. In addition to drums there is a simple bass synth sequencer, as well as one for some basic chords. 
There is a toggle switch to activate "Extended Mode" at the bottom of the screen, which allows users to activate notes to be played every other loop, to extend the patterns and add some variety. 
The second section is a polysynth (a synthesizer that can play multiple synth sounds at once). This is playable on the computer keyboard. The layout 
of the keys will be non-traditional and allow the user to use both hands at the same time to play different octaves, rather than the usual keyboard 
layout with a single octave. Each of the sections has a separate volume control, along with the master controls at the bottom of the page. 

## Functionality & MVPs

To make 4 Block Loops, I used

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