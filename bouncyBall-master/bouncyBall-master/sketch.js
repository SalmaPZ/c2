const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    box = new Box(100,100,10,10);
    box1 = new Box(250,300,100,100);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box1.display();

    
}