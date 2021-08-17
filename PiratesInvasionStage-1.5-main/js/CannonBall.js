class CannonBall {

    constructor(x, y) {

        var options = {
            restitution:0.8,
            friction:0.5,
            density:1.0,
            isStatic:true
        };

        this.trajectory = [];
        this.r = 40;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 40, options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
      }

      display() {
        var angle = this.body.angle;
        var pos = this.body.position;
    
        //fill("#676e6a");
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r)
        pop();
        if(this.body.velocityX > 0 &&  this.body.position.x > 300){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);

        }
        //Setting image to trajectory
        for (var i = 0; i < this.trajectory.length; i++){
          image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);

        }
      }

      shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:velocity.x, y:(velocity.y)});
      }
    }
    


