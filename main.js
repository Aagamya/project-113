function preload(){

}

function setup(){
canvas=createCanvas(640,480)
canvas.position(300,250)

video=createCapture(VIDEO)
video.hide()

tintColour=""
}

function draw(){
image(video,0,0,640,480)
tint(tintColour)
}

function filter_tint(){
tintColour=document.getElementById("color_name").value
}

function take_snapshot(){
    save("hello.png")
}