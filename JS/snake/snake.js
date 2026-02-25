const game = document.getElementById("game");

let snake = [
    { x: 0, y: 0 }
];

let foodX;
let foodY;
let score = 0;

const scoreCard = document.getElementById("score");
screenWidth = getComputedStyle(game).width;
screenHeight = getComputedStyle(game).height;
let direction = "right";

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && direction !== "left") direction = "right";
    if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (e.key === "ArrowUp" && direction !== "down") direction = "up";
    if (e.key === "ArrowDown" && direction !== "up") direction = "down";
});

const food = document.createElement("div");
food.classList.add("food");
game.appendChild(food);

function placeFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    food.style.left = foodX + "px";
    food.style.top = foodY + "px";
}
placeFood();

const gameLoop = setInterval(() => {

    let head = { ...snake[0] };

    if (direction === "right") head.x += 20;
    if (direction === "left") head.x -= 20;
    if (direction === "up") head.y -= 20;
    if (direction === "down") head.y += 20;

    snake.unshift(head);


    if (head.x < 0 || head.x >= parseInt(screenWidth) || head.y < 0 || head.y >= parseInt(screenHeight)) {
        alert("game Over! Walls are strong enough!!!");
        head.x = 0;
        head.y = 0;
        clearInterval(gameLoop);
        score = 0;
        scoreCard.textContent = score;
        location.reload();
        return;
    }
    if (snake.slice(1).some(part => part.x === head.x && part.y === head.y)) {
        alert("game Over! You hit yourself!!");
        head.x = 0;
        head.y = 0;
        clearInterval(gameLoop);
        score = 0;
        scoreCard.textContent = score;
        location.reload();
        return;
    }

    if (head.x === foodX && head.y === foodY) {
        score++;
        scoreCard.textContent = score;
        placeFood();
    } else {
        snake.pop();
    }

    game.innerHTML = "";
    game.appendChild(food);

    snake.forEach(part => {
        const block = document.createElement("div");
        block.classList.add("snake");
        block.style.left = part.x + "px";
        block.style.top = part.y + "px";
        game.appendChild(block);
    });

}, 200);