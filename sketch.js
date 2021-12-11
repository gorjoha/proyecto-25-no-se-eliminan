
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papelbola;
var paper;
var papelll;
var papeldebaño;
var papelGroup;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	papelGroup=new Group();

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	papelbola=new Papel(140,10,70,70);
	paper=new Paper(170,50,40);	
	papelll=new papell(170,50,70);
	papeldebaño=new Papels(140,50,60,60,0);//funciona pero no toca el suelo
	papelGroup.add(papeldebaño);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
	
  groundObject.display();
  dustbinObj.display();
  papelbola.display();//FUNCIONA PERO APARE FLOTANDO
//  paper.display();
//  paper.scale=0.5;
//  papelll.display();

//  papeldebaño.display();
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(papelbola.body,papelbola.body.position,{x:130,y:-145});
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
		Matter.Body.applyForce(papelll.body,papelll.body.position,{x:130,y:-145});

		Matter.Body.applyForce(papeldebaño.body,papeldebaño.body.position,{x:130,y:-145})
	}
	if(papeldebaño.x>141){
		papelGroup.destroyEach();
	}
}