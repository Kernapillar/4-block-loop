export const func = () => {
    console.log("from another file!");
}



// original tutorial code 
      
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
        