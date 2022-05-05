const canvas = document.getElementById('canvas1')
const ctx= canvas.getContext("2d")
canvas.width=600 ;
canvas.height=400;

let spacePressed = false;
let colo =0;
let frame = 0;
let score = 0;

const background = new Image()
background.src='nenchinh.png'

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    handlleObstacle();
    bird.update();
    bird.draw();
    ctx.font="90px Georgia";
    ctx.strokeText(score,50,70)
    ctx.fillText(score, 50, 70)
    handleCollision()
    if(handleCollision()){
        saveScore(score);
        ctx.font="40px Georgia";
        ctx.fillStyle="Red";
        ctx.fillText(
            'Game Over, Your score is'+ score,
            50,
            canvas.height/2
        );
        alert('play again');

        return;
    }
    requestAnimationFrame(animate);
    colo++;
    frame++;
}
window.addEventListener("keydown", function (e){
    if(e.code==="Space")spacePressed = true;
});
window.addEventListener("keyup", function (e){
    if(e.code==="Space")spacePressed = false;
});
const imager= new Image();
function handleCollision(){
    for(let i=0;i<obstaclesArray.length;i++){

    }
}
