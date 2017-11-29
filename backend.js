
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3cGPVywJtRnm4vQMtwRM9DVQloAmyCso",
    authDomain: "boiler-canvas.firebaseapp.com",
    databaseURL: "https://boiler-canvas.firebaseio.com",
    projectId: "boiler-canvas",
    storageBucket: "boiler-canvas.appspot.com",
    messagingSenderId: "985213101820"
  };
  firebase.initializeApp(config);
 
  var database = firebase.database();
  var x_max = 400;
  var y_max = 440;
	
  function getCanvas() {  
	  return firebase.database().ref("map/").once('value');
  }

  function setCanvas(canv) {
	  
	  /* Set the canvas as the given string */
  	firebase.database().ref("map/").set({
		pixels: canv
  	});
  }
	
  function setPixel(x, y, val) {
	  
	  /* Get index of pixel to be changed */
  var index = (x_max * y) + x - 1;
	  
	  /* Get current canvas */
	var currCanv = getCanvas();
	  
	  /* Change the pixel */
	currCanv[index] = val;
	  
	  /* Set canvas to updated canvas */
	setCanvas(currCanv);
  }

