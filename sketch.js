const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    

let h = hour();
text('Time:' + h, 5, 50);
let m = minute();
text(":" + m, 115, 50);
let s = second();
text(':' + s, 160, 50);
if(hour()===21){
    text("GOTO TO SLEEP DON'T PLAY TOOO MUCH GAMES",100,100)
}
if(hour()===12){
    text("NOON",100,100)
}


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if (hour>=05 && hour<=17){
  
            bg = "sunrise.png";
        }
        
        else{
        
            bg = "sunset.png";
        }


    backgroundImg = loadImage(bg);

}
