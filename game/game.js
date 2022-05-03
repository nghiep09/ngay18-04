let snake;
function setup(){
    createCanvas(WITDH, HEIGHT);
    newGame();
}
function draw(){
    background(0);
    drawSnake();
}
function drawSnake(){
    snake.show();
    if(framesCount%SNAKE_SPEED == 0){
        snake.update();
    }
    snake.show();
}
function newGame(){
    snake = new Snake();
}
function keyCode(){
    if (keyCode == UP_AROW && snake.vel.y !=1){
        snake.vel.y=-1;
        snake.vel.x=0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y !=-1){
        snake.vel.y=1;
        snake.vel.x=0;
    }else if (keyCode == LEFT_ARROW && snake.vel.x !=1){
        snake.vel.y = 0;
        snake.vel.x= -1;
    } else if (keyCode == RIGHT_AROW && snake.vel.x !=-1){
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}
