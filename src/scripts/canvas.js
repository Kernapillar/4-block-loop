
import {ctx} from '../index'

    class Particle {
        constructor (x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random(10)
            this.weight = Math.random(4);
            this.directionX = 1;
        }

        update(){
            this.weight += 0.01;
            this.y += this.weight;
        }

        draw() {
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }


    }

    const particle1 = new Particle(100, 15);

    function animate(){
        particle1.update();
        particle1.draw();
        requestAnimationFrame(animate);
    }

    
    export { Particle, particle1, animate };

