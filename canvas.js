console.log('CS 252 Lab6 - HTML Test');

document.addEventListener("click", mouseClick);

var canvas = document.querySelector('canvas');

canvas.width = 440;
canvas.height = 400;

var context = canvas.getContext('2d');
var currColor = 0;
var canPaint = true;
var color = ['rgb(0,0,0)'
					,'rgb(255,0,0)'
					,'rgb(0,255,0)'
					,'rgb(0,0,255)'
 					,'rgb(128,0,0)'];


for(var i = 0; i < 5; i ++){
	context.fillStyle = color[i];
	context.fillRect(canvas.width-40,i*40,40,40);
}

for(var i = 5; i < 20; i ++){
	context.fillStyle = 'rgba(0,0,0,0.5)';
	context.fillRect(canvas.width-40,i*40,40,40);
}

context.fillStyle = color[0];

setInterval(enablePaint, 3000);

function mouseClick(event) {
	// minus margin to get click position
    var x = event.clientX - 15;
    var y = event.clientY - 15;
    //console.log("first:"+x+" "+y);
    y = Math.round((y*10)/10);
    if(x % 10 < 5){
    	x = Math.floor(x / 10) * 10;
    } else {
    	x = Math.ceil(x / 10) * 10;
    }
    if(y % 10 < 5){
    	y = Math.floor(y / 10) * 10;
    } else {
    	y = Math.ceil(y / 10) * 10;
    }
    //console.log("second:"+x+" "+y);
    if(x > 0 && x < canvas.width - 40){
	    
    	if(canPaint){
    		paint(x, y, currColor);
    		canPaint = false;
		console.log("DRAW");
    	} else {
    		console.log("WAIT");
    	}
	    
	} else {
		if(y < 160){
			pickColor(x,y);
		}
	}
}

/* paint pixel given color (should be int) */
function paint(x, y, colorIndex){
	context.fillStyle = color[colorIndex];
	context.fillRect(x,y,10,10);
}

/* Get index from x, y */
function pickColor(x, y){
	return Math.round((y/40)) - 1;
}

/* Colors the entire canvas using the 'canv' string */
function colorCanvas(canv){
	for (var i = 0; i < canvas.height; i++) {
		for (var j = 0; j < canvas.width; j++) {
			paint(i, j, canv[((i * canvas.height) + j) - 1]);
		}
	}
}

function enablePaint(){
	canPaint = true;
}
