var imagesTime = ["img/TimeBig1.jpg", "img/TimeBig2.jpg", "img/TimeBig3.jpg", 
"img/TimeBig4.jpg", "img/TimeBig5.jpg", "img/TimeBig6.jpg"];
var currentImage = 0;

function changeTime(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesTime[whichNum]);
	currentImage = whichNum;
}

var imagesAfl = ["img/AFLBig1.jpg", "img/AFLBig2.jpg", "img/AFLBig3.jpg", 
"img/AFLBig4.jpg", "img/AFLBig5.jpg", "img/AFLBig6.jpg"];
var currentImage = 0;

function changeAfl(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAfl[whichNum]);
	currentImage = whichNum;
}


/*call method * alert("clicked");*/


function nextTimeImage() {
	currentImage++;
	if(currentImage>=imagesTime.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesTime[currentImage]);
}

function prevTimeImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesTime[currentImage]);
}

function nextAflImage() {
	currentImage++;
	if(currentImage>=imagesAfl.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAfl[currentImage]);
}

function prevAflImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAfl[currentImage]);
}