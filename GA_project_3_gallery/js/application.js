var images = ["jbWeb14_KbookBig1.jpg, jbWeb14_KbookBig2.jpg, jbWeb14_KbookBig3.jpg, 
jbWeb14_KbookBig4.jpg, jbWeb14_KbookBig5.jpg, jbWeb14_KbookBig6.jpg"]
var currentImage = 0

function changePic(whichNum){
var img = document.getElementById('mainImage');
img.setAttribute('src', images[whichNum]);
currentImage = whichNum;
}
	/*call method * alert("clicked");*/

function nextImage() {
currentImage++;
if(currentImage>images.length){
	currentImage=0;
}
var img = document.getElementById('mainImage');
 img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage=currentImage-1;
if(currentImage===images.length){
	currentImage=0;
}
var img = document.getElementById('mainImage');
img.setAttribute('src', images[currentImage]);
}