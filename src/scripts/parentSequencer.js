
class Sequencer {
    constructor (rows, numSteps, soundsArr, time) {
        this.grid = this.createGrid(rows, numSteps);
        this.soundsArr = soundsArr;
        this.time = time;
    }

    createGrid (numRows, numSteps) {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j < numSteps; j++) {
                row.push({ isActive: false });
            } rows.push(row);
        } return rows;
    }
    
    renderSequencer(container) {
        const seqContainer = document.getElementById(`${container}`);
        this.grid.forEach((row, rIdx) => {
            const lane = document.createElement('div');
            lane.id = `${rIdx}`;
            lane.className = "seq-row";
            row.forEach((nIdx) => {
                const seqNode = document.createElement('buton');
                seqNode.className = 'node'
                seqNode.addEventListener('click', (e) => {
                    clickToggle(rIdx, nIdx, e)
                })
                lane.appendChild(seqNode);
            }) 
            seqContainer.appendChild(lane);

        })

        
    }
    


    clickToggle(){}

    testfunc() {
        console.log("properly linking files")
    }

    

};

export {Sequencer};