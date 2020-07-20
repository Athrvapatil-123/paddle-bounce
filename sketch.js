var ball,paddleImg,paddle,ballImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg=loadImage('ball.png');
  paddleImg=loadImage('paddle.png');
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  
  ball = createSprite(20,200,20,20); 
paddle=createSprite(350,200,20,20);
  ball.addImage("ballImage",ballImg);
paddle.addImage("paddleImage",paddleImg);
  ball.velocityX=9;
 ball.velocityY=9;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
    edges =  createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  //0 is leftEdge
  ball.bounceOff(edges[0]);
  //1 is rightEdge
  
  //2 is topEdge
  ball.bounceOff(edges[2]);
  //3 is bottomEdge
  ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-7;
   ball.bounceOff(paddle)
   
  }
  
  if(keyDown(DOWN_ARROW))
  {
   
    paddle.velocityY=7;
   ball.bounceOff(paddle)
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

