
//board
var block = 15;
var rows = 20;
var columns = 40;
var canvas;
var context;

//snake front
var snakeX = block * 20;
var snakeY = block * 10;
var velX = 0;
var velY = 0;

var snakeBody = [];

//bits
var bitX = block * 10;
var bitY = block * 5;

//bool
var gameOver = false;
var justAte = false;

window.onload = function(){
    canvas = document.getElementById("board");
    canvas.height = rows * block;
    canvas.width = columns * block;
    context = canvas.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection)

    setInterval(update, 100);
}

function update(){
    if (gameOver){ 
        location.reload();
        return;
    }
    context.fillStyle="blue";
    context.fillRect(0,0,canvas.width,canvas.height);

    for(let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length){
        snakeBody[0] = [snakeX, snakeY]
    }

    snakeX += velX;
    snakeY += velY;
    context.fillStyle="white";
    context.fillRect(snakeX,snakeY,block,block);
    for (let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], block, block);
    }

    context.fillStyle="yellow";
    context.fillRect(bitX,bitY,block,block);
    if (bitX == snakeX && bitY == snakeY){
        snakeBody.push([bitX,bitY])
        placeFood();
    }

    if (snakeX < 0 || snakeX > (columns*block) || snakeY < 0 || snakeY > (rows*block)){
        gameOver = true;
        alert("Womp Womp\nPress 'Enter' to reload");
    }
    if (!justAte){
        for (let i = 0; i < snakeBody.length; i++){
            if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
                gameOver = true;
                alert("Womp Womp\nPress 'Enter' to reload");
            }
        }
    }
        
    justAte = false;
}

function changeDirection(e){
    if (e.code == "ArrowUp" && velY == 0){
        velY = -block;
        velX = 0;
    }
    else if (e.code == "ArrowDown" && velY == 0){
        velY = block;
        velX = 0;
    }
    else if (e.code == "ArrowLeft" && velX == 0){
        velX = -block;
        velY = 0;
    }
    else if (e.code == "ArrowRight" && velX == 0){
        velX = block;
        velY = 0;
    }
}

function placeFood(){
    bitX = Math.floor(Math.random() * columns) * block;
    bitY = Math.floor(Math.random() * rows) * block;
    justAte = true;
}