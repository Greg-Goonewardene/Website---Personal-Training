// Image rotator

let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch

// Image List
images[0] = "images/6.jpg";
images[1] = "images/7.jpg";

// Change Image
function changeImage() {
	document.slide.src = images[i];

   // Check image array for max image number
	 if(i < images.length - 1) {
	 	// Add 1 to Index
	  i++;
	 } else {
		// Reset Back To 0
		i = 0;
	 }
	 // Run function every 3 seconds
	 setTimeout("changeImage()", time);
}

// Run function when page loads

window.addEventListener('load', () => {
  changeImage();
});
