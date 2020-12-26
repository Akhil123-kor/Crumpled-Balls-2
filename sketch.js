
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball,paper_ball_image,db,dustbinImage;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper_ball=new Paper(200,450,70)


	ground = Bodies.rectangle(800, 670, width, 20 , {isStatic:true} );
	World.add(world, ground);

	db=new Dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  background("white");
  paper_ball.display()
  db.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:200,y:-200})
	 }
   }
