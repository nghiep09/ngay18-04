const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let colo = 0;
let frame = 0;
let score = 0;

const background = new Image();
background.src='BG.jpg';
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height)
    handlleObstacle();
    bird.update();
    bird.draw();
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 50, 70);
    ctx.fillText(score, 50, 70);
    handleCollision();
    if (handleCollision()){
        saveScore(score);
        ctx.font = "40px sans-serif";
        ctx.fillStyle = "Red";
        ctx.fillText(
            "Game Over, Your Score is " + score,
            50,
            canvas.height / 2
        );
        // window.location.reload()
        alert("play again?")

        return;
    }

    requestAnimationFrame(animate);
    colo++;
    frame++;
}
window.addEventListener("keydown", function (e) {
    if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", function (e) {
    if (e.code === "Space") spacePressed = false;
});

  const imager = new Image();
function handleCollision() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if ((bird.x < obstaclesArray[i].x + obstaclesArray[i].width) &&
            (bird.x + bird.width  > obstaclesArray[i].x) &&
            ((bird.y < obstaclesArray[i].top) ||
                (bird.y + bird.height > canvas.height - obstaclesArray[i].bottom))
            || (bird.y + bird.height > canvas.height) || (bird.y + bird.height < 0)) {
            ctx.drawImage(imager, bird.x, bird.y, 50, 50);
            ctx.font = "40px sans-serif";
            ctx.fillStyle = "Red";
            ctx.fillText(
                "Game Over, Your Score is " + score,
                50,
                canvas.height / 2

            );
            fly2.pause();
            return true;
        }
    }
}
animate();

function loadScore() {
    if(localStorage.hasOwnProperty('score')){
        let scores = localStorage.getItem('score');
        return JSON.parse(scores);//dua chuoi ve mang
    }else {
        return [];
    }
}

function saveScore(score) {
    let person = loadScore();
    if(person.length === 0 || score > person[person.length-1].point){
        let namePerson = prompt("Ten cua ban");
        let objPerson = {
            name:namePerson,
            point:score
        }
        person.push(objPerson);


    }
    person.sort(compareScore);
    if(person.length > 5)
        person.splice(5);


    let jsonScore = JSON.stringify(person);
    localStorage.setItem('score',jsonScore);

}

function compareScore( a, b )
{
    if ( a.point < b.point){
        return 1;
    }
    if (  a.point > b.point){
        return -1;
    }
    return 0;
}