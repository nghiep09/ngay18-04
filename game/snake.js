class Snake {
    constructor() {
        this.head = createVector(0,0);
    }

        show(){
    noStroke();
    fill(255);
    rect(this.head.x,this.head.y,GRID_SIZE, GRID_SIZE);
    }
    update(){
        this.head.x += this.vel.x * GRID_SIZE;
        this.head.y += this.vel.y * GRID_SIZE;

        this.head.x = (this.head.x + WITDH)%WITDH;
        this.head.y = (this.head.y + HEIGHT)%HEIGHT;
    }
}
