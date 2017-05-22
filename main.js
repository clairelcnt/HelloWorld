// Dans 'images', les images de mon slider
var images = [
	// "http://www.sololearn.com/uploads/slider/1.jpg",
	// "http://www.sololearn.com/uploads/slider/2.jpg",
	// "http://www.sololearn.com/uploads/slider/3.jpg"
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg",
]

var num = 0;

function next(){
	var slider = document.getElementById('theSlider');
	// à chaque click, on incrémente la position
	num++;

	if (num >= images.length) {
		num = 0;
	}
	// Changer la source : aller chercher l'index 'num'
	slider.src = images[num];		
}

function prev(){
	var slider = document.getElementById('theSlider');
	// à chaque click, on incrémente la position
	num--;

	if (num < images.length) {
		num = images.length;
	}
	// Changer la source : aller chercher l'index 'num'
	slider.src = images[num];		
}