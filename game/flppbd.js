let canvas = document.getElementById("gamezone");
let ctx = canvas.getContext("2d");
let scoregame = document.getElementById("score");
let birdimg = new Image();
let background = new Image();
let uppertube = new Image();
let lowertube = new Image();
birdimg.src = "bird.png";
background.src = "nenchinh.png";
uppertube.src = "ongtren.png";
lowertube.src = "ongduoi.png";
let score = 0;
let distance = 140;
let kc;
let bird = {
    x: background.width / 5,
    y: background.height / 2
}
let tube = [];
tube[0] = {
    x: canvas.width,
    y: 0
}


function run() {
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(birdimg, bird.x, bird.y);
    for (let i = 0; i < tube.length; i++) {
        kc = uppertube.height + distance;
        ctx.drawImage(uppertube, tube[i].x, tube[i].y);
        ctx.drawImage(lowertube, tube[i].x, tube[i].y + kc)
        tube[i].x -= 5;
        if (tube[i].x == canvas.width / 2) {
            tube.push(
                {
                    x: canvas.width,
                    y: Math.floor(Math.random() * uppertube.height) - uppertube.height
                }
            )
        }
        if (tube[i].x == -0) {
            tube.splice(0, 1)
        }

        if (tube[i].x == bird.x) {
            score++
        }
        if (bird.y + birdimg.height > canvas.height ||
            bird.x + birdimg.width >= tube[i].x && bird.x <= tube[i].x + uppertube.width && (
                bird.y <= tube[i].y + uppertube.height || bird.y + birdimg.height >= tube[i].y + kc))
        {
            return;
        }


    }
    scoregame.innerHTML = "Score: " + score;
    bird.y += 3;
    // requestAnimationFrame(run);
    let speed=20;
    switch (score){
        case 10:{
            speed = 15
            break;
        }
        case 20: {
            speed=10
            break;
        }
        case 30:{
            speed=5
            break
        }
    }
    setTimeout(run, speed);
}

document.addEventListener("keydown", function () {
    bird.y -= 75;
})
run();