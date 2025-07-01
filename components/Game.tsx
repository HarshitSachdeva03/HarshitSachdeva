import { useEffect, useRef, useState } from "react";
// Game variables
let x: number;
let y: number;
let dx = 2;
let dy = -2;
let ctx: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
let ballRadius = 10;
let ballColor='#000';
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX:number;
let interval:NodeJS.Timeout | undefined=undefined; //cuz it doesn't accept null :/
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const bricks: {x: number, y: number, status:number}[][] = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status:1};
  }
}
let score:number=0;
let rightPressed=false;
let leftPressed=false;

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (which is FFFFFF in hexadecimal)
  const randomColor = Math.floor(Math.random() * 16777215);
  // Convert the number to a hexadecimal string
  let hexColor = randomColor.toString(16);
  // Pad the string with leading zeros if it's less than 6 characters long
  hexColor = hexColor.padStart(6, '0');
  // Prepend '#' to make it a valid hex color code
  return `#${hexColor}`;
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
            score++;
            dy = -dy;
            b.status = 0;
            if(score==brickColumnCount*brickRowCount) drawGameOver();
        }
      }
    }
  }
}


// Draw functions
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}


function drawGameOver() {
    // Set text properties
    ctx.font = "48px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    if (setGameStartedCallback) {
        setGameStartedCallback(false);
    }
    if (interval) {
        clearInterval(interval);
        interval = undefined;
    }
    if(score==brickColumnCount*brickRowCount){
        ctx.fillText("You Won !", canvas.width / 2, canvas.height / 2);    
    }
    // Draw "GAME OVER" text in center of canvas
    else {ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);}
    
    // Optional: Add smaller restart instruction
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r].status=1;
        }
    }
    ctx.fillText("Click 'Start Game' to play again", canvas.width / 2, canvas.height / 2 + 40);
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 2; 
    dy = -2;
    paddleX = (canvas.width - paddleWidth) / 2;
    rightPressed = false; 
    leftPressed = false;
    ballColor = '#000';
    score=0;
}

// the main function for drawing everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    collisionDetection();
    drawBricks();
    
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = getRandomHexColor();
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {            
            // Clear canvas and show game over message
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGameOver();                        
            return;
        }
    }    

    // Paddle movement
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

// Add a reference to the state setter outside the component
let setGameStartedCallback: ((value: boolean) => void) | null = null;

function handleCanvasKeyDown(event: React.KeyboardEvent) {
    if(event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = true;
    }
    else if(event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function handleCanvasKeyUp(event: React.KeyboardEvent) {
    if(event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = false;
    }
    else if(event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = false;
    }
}
function startGame() {
    interval=setInterval(draw, 10);
}
export default function BreakoutGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        const canvasElement = canvasRef.current;
        if (canvasElement) {
            canvas = canvasElement;
            const context = canvas.getContext('2d');
            if (context) {
                ctx = context;
                x = canvas.width / 2;
                y = canvas.height - 30;
                paddleX = (canvas.width - paddleWidth) / 2;
                canvasElement.focus();
                
                // Setting the callback so global functions can update React state
                setGameStartedCallback = setIsGameStarted;
            }
        }
        
        // Cleanup
        return () => {
            setGameStartedCallback = null;
        };
    }, []);
    
    const handleStartGame = () => {
        startGame();
        setIsGameStarted(true);
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold mb-6">Breakout Game</h2>
            <div className="border border-gray-300 rounded shadow-lg">
                <canvas
                    ref={canvasRef}
                    width="480"
                    height="320"                    
                    tabIndex={0}
                    onKeyDown={handleCanvasKeyDown}
                    onKeyUp={handleCanvasKeyUp}
                    style={{
                        background: '#eee',
                        display: 'block',
                        margin: 10,
                        outline: 'none'
                    }}
                />
            </div>
            <div className="mt-6 max-w-md text-center">
                <button 
                    onClick={handleStartGame} 
                    disabled={isGameStarted} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
                >
                    {isGameStarted ? "Game Running" : "Start Game"}
                </button>
                <p className="mb-2">Click on the game area, then use arrow keys to move the paddle.</p>
                <p>"Break all the bricks to win!"</p>
            </div>
        </div>
    );
}