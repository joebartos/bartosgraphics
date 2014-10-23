var images = ["img/galleryBig1.jpg", "img/galleryBig2.jpg", "img/galleryBig3.jpg", 
"img/galleryBig4.jpg", "img/galleryBig5.jpg", "img/galleryBig6.jpg"];
var currentImage = 0;

function changePic(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}
/*call method * alert("clicked");*/


function nextImage() {
	currentImage++;
	if(currentImage>=images.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}