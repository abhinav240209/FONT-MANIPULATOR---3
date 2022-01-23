difference="";
left_wrist_x="";
right_wrist_x="";

function preload() {
    
}

function setup() {
    canvas=createCanvas(500,400);
    canvas.position(700,150);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.position(0,150);
    classifier=ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotPoses);
}

function draw() {
    background("blue");
    textSize(difference);
    fill("gold");
    text("Abhinav",50,300);
    document.getElementById("width_height").innerHTML="Size of the text is: "+difference;
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    left_wrist_x=Math.floor(results[0].pose.leftWrist.x);
    right_wrist_x=Math.floor(results[0].pose.rightWrist.x);
    difference=Math.floor(left_wrist_x-right_wrist_x);  
    console.log(difference);      
    }
}