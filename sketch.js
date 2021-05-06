const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var raindrops=[];
var myEngine;
var world;
var d;
var maxdrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(500,900);
  myEngine=Engine.create();
  world=myEngine.world;

   // creating drops
    if (frameCount % 120 === 0){
      raindrops.push(new Drop(random(0,500),random(0,400))); // storing all the drops in the array raindrops 
   }


}

function draw(){
   background("black"); 
   Engine.update(myEngine)

   //Write a for loop for displaying the rain
   for (var i; i < maxdrops; i++ ){
      raindrops[i].rain();
      raindrops[i].UpdateY();
   }

}   

