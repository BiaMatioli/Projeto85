canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d")

greencar_width = 75;
greencar_height = 100;

bgImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 255;

function add() {
	bgImageTag = new Image();
	bgImageTag.onload = uploadBackground;
	bgImageTag.src = bgImage;

	greencarImageTag = new Image();
	greencarImageTag.onload = uploadBackground;
	greencarImageTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(bgImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(greencarImageTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up() {
	if (greencar_y >= 0){
		greencar_y = greencar_y - 10;
		console.log("X = " + greencar_x + " e Y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down() {
	if (greencar_y >= 0){
		greencar_y = greencar_y + 10;
		console.log("X = " + greencar_x + " e Y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left() {
	if (greencar_x >= 0){
		greencar_x = greencar_x - 10;
		console.log("X = " + greencar_x + " e Y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right() {
	if (greencar_x >= 0){
		greencar_x = greencar_x + 10;
		console.log("X = " + greencar_x + " e Y = " + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}
