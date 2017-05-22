// Dans 'images', les images de mon slider
var images = [
	"images/nightlife_1.jpg",
	"images/nightlife_2.jpg",
	"images/nightlife_3.jpg"
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