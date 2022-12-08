var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart1Img,heart2Img,heart3Img;
var shooter_standing;
var bugImage;
var bulletImg, bullet;
var bugGroup, bulletGroup;

function preload(){
  
  shooterImg = loadAnimation("image1.png","image2.png","image3.png","image4.png","image5.png","image6.png");
  shooter_standing = loadImage("image1.png");
  bugImage = loadAnimation("bug.gif");
  bgImg = loadImage("backgroundImage.jpg");
  bulletImg = loadImage("bullet.png");
  heart1Img = loadImage("heart_1.png");
  heart2Img = loadImage("heart_2.png");
  heart3Img = loadImage("heart_3.png");

 

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
 /* bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 2.0*/

//creating the player sprite

   player = createSprite(100, 100, 50, 50);
   player.addImage("standing",shooter_standing);
   player.addAnimation("shooterImg",shooterImg);
  

   /* heart1 = createSprite(displayWidth-150,40,20,20)
    heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4*/

    bulletGroup = new Group();
    bugGroup = new Group();

}

function draw() {
  background(0); 

  


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.changeAnimation("shooterImg")
  player.y = player.y-6
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  player.changeAnimation("shooterImg")
 player.y = player.y+6
}

if(keyDown("RIGHT_ARROW")){
  player.changeAnimation("shooterImg")
  player.x = player.x+6
 }
 
 if(keyDown("LEFT_ARROW")){
  player.changeAnimation("shooterImg")
  player.x = player.x-6
 }
 
 if (keyWentUp("UP_ARROW")|| keyWentUp("DOWN_ARROW")|| keyWentUp("LEFT_ARROW")|| keyWentUp("RIGHT_ARROW")) {
  player.changeImage("standing");
 }

 /*if (keyDown("space")) {
  shootBullet()
 }
 
  spawnBugs()*/

 /*if (bugGroup.overlap(bulletGroup)) {
  bugGroup.destroyEach()
 }*/

drawSprites();

}

/*function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= player.y-20
  bullet.x = player.x+10
  bullet.addImage(bulletImg)
  bullet.scale=0.05
  bullet.velocityX= 10
  bulletGroup.add(bullet)
}*/


/*function handleBubbleCollision(bubbleGroup){
  if (life > 0) {
     score=score+1;
  }

   blast= createSprite(bullet.x+60, bullet.y, 50,50);
  blast.addImage(blastImg) 
  
  blast.scale=0.3
  blast.life=20
  bulletGroup.destroyEach()
  bubbleGroup.destroyEach()
}


if(blueBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(blueBubbleGroup);
}

if(redBubbleGroup.collide(bulletGroup)){
  handleBubbleCollision(redBubbleGroup);
}*/

/*function spawnBugs() {
    if (frameCount%100===0) {
    var bug = createSprite(windowWidth+50,random(50,windowHeight-100))
    bug.addAnimation("bug",bugImage)
    bug.velocityX = -3
    bug.scale = 0.5
    bugGroup.add(bug)
    }
}*/