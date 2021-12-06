var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")
obstacle1Image = loadImage("assets/obsBottom1.png");
obstacle2Image = loadImage("assets/obsBottom2.png");
obstacle3Image = loadImage("assets/obsBottom3.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(600,600);

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,590,800,20);
bottomGround.visible = false;

topGround = createSprite(200,0,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          
          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
         obstacles()
        drawSprites();
        if(balloon.isTouching(bottomGround)){
          fill("red");
          textSize(26);
          text("GAME OVER",200,300)
          balloon.velocityY = 0;
         
        }
        
}
function obstacles(){
  if(frameCount%60===0){
    o1 = createSprite(600,300,10,10);
    o1.y = Math.round(random(380,600));
    var r = Math.round(random(1,3));
    switch(r){
      case 1 : o1.addImage(obstacle1Image);
      break;
      case 2 : o1.addImage(obstacle2Image);
      break;
      case 3 : o1.addImage(obstacle3Image);
      break;
      default:break;

    }
    o1.scale = 0.10;
    o1.velocityX = -3;
  }
  
}