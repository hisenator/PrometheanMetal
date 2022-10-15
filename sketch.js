let video;

function setup (){
  createCanvas (500,500);
  video= createCapture(VIDEO);
  video.hide
}

function draw(){
  image (video,0,0);
}
