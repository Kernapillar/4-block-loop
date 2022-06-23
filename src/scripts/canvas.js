
    
class Particle {
    constructor (color) {
        this.x = this.randoInt(window.innerWidth);
        this.y = 0;
        this.size = 10
        this.weight = this.randoInt(10);
        this.directionX = -.3;
        this.color = `${color}`
    }
    randoInt(max) {
        return Math.floor(Math.random() * max)
    }

    static particlesArr = [];

    

    
    update(){
        
        if (this.y > 726) {
            console.log(Particle.particlesArr)
            let idx = Particle.particlesArr.indexOf(this)
            Particle.particlesArr.splice(idx, 1)
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }
    
    static particleFactory(color) {
        const particle = new Particle(color)
        this.particlesArr.push(particle)
    };
    
    static test(canvas) {
        console.log(canvas)
    }
    
    
}


export {Particle};