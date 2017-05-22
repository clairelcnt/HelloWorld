// Dans 'images', les images de mon slider
var images = [
	"http://www.sololearn.com/uploads/slider/1.jpg",
	"http://www.sololearn.com/uploads/slider/2.jpg",
	"http://www.sololearn.com/uploads/slider/3.jpg"
]

var num = 0;

function next(){
	var slider = document.getElementById('theSlider');
	// à chaque click, on incrémente la position
	num++;

	if (num >= images.length) {
		num = 0;
	}
	else {
		// Changer la source : aller chercher l'index 'num'
		slider.src = [num];	
	}	
}

function prev(){
	var slider = document.getElementById('theSlider');
	// à chaque click, on incrémente la position
	num--;

	if (num < images.length) {
		num = images.length;
	}
	else {
		// Changer la source : aller chercher l'index 'num'
		slider.src = [num];	
	}	
}