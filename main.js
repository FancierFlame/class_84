var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var background_array = ["mars_rover_1.jpg","mars_rover_2.jpg","mars_rover_3.jpg","mars_rover_4.jpg"];

var random_number_gen = Math.floor(Math.random() * 4);

var background_img = background_array[random_number_gen];
var rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 90;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = upload_rover;
    rover_imgtag.src = rover_img;

}

function upload_background() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    var keypress = e.keyCode;

    if (keypress == "38") {
        up();
        console.log("up");
    }

    if (keypress == "37") {
        left();
        console.log("left");
    }

    if (keypress == "39") {
        right();
        console.log("right");
    }

    if (keypress == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        console.log("rover y =" + rover_y + "rover_x = " + rover_x);
        upload_background();
        upload_rover();
    }
}

function down() {
    if (rover_y <= 550) { 
        rover_y = rover_y + 10;
        console.log("rover y =" + rover_y + "rover_x = " + rover_x);
        upload_background();
        upload_rover();
}
}

function left() {
    if (rover_x > 0) {
        rover_x = rover_x - 10;
        console.log("rover y =" + rover_y + "rover_x = " + rover_x);
        upload_background();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 750) {
        rover_x = rover_x + 10;
        console.log("rover y =" + rover_y + "rover_x = " + rover_x);
        upload_background();
        upload_rover();
    }
}
