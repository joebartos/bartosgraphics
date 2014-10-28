var imagesTime = ["img/TimeBig1.jpg", "img/TimeBig2.jpg", "img/TimeBig3.jpg", 
"img/TimeBig4.jpg", "img/TimeBig5.jpg", "img/TimeBig6.jpg"];
var currentImage = 0;

function changeTime(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesTime[whichNum]);
	currentImage = whichNum;
}

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


var imagesAfl = ["img/AFLBig1.jpg", "img/AFLBig2.jpg", "img/AFLBig3.jpg", 
"img/AFLBig4.jpg", "img/AFLBig5.jpg", "img/AFLBig6.jpg"];
var currentImage = 0;

function changeAfl(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAfl[whichNum]);
	currentImage = whichNum;
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

var imagesSchol = ["img/ScholBig1.jpg", "img/ScholBig2.jpg", "img/ScholBig3.jpg", 
"img/ScholBig4.jpg", "img/ScholBig5.jpg", "img/ScholBig6.jpg"];
var currentImage = 0;

function changeSchol(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSchol[whichNum]);
	currentImage = whichNum;
}

function nextScholImage() {
	currentImage++;
	if(currentImage>=imagesSchol.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSchol[currentImage]);
}

function prevScholImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSchol[currentImage]);
}

var imagesSter = ["img/SterBig1.jpg", "img/SterBig2.jpg", "img/SterBig3.jpg", 
"img/SterBig4.jpg", "img/SterBig5.jpg", "img/SterBig6.jpg"];
var currentImage = 0;

function changeSter(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSter[whichNum]);
	currentImage = whichNum;
}

function nextSterImage() {
	currentImage++;
	if(currentImage>=imagesSter.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSter[currentImage]);
}

function prevSterImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSter[currentImage]);
}

var imagesDex = ["img/DexBig1.jpg", "img/DexBig2.jpg", "img/DexBig3.jpg", 
"img/DexBig4.jpg", "img/DexBig5.jpg", "img/DexBig6.jpg"];
var currentImage = 0;

function changeDex(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesDex[whichNum]);
	currentImage = whichNum;
}

function nextDexImage() {
	currentImage++;
	if(currentImage>=imagesDex.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesDex[currentImage]);
}

function prevDexImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesDex[currentImage]);
}

var imagesAW = ["img/AWBig1.jpg", "img/AWBig2.jpg", "img/AWBig3.jpg", 
"img/AWBig4.jpg", "img/AWBig5.jpg", "img/AWBig6.jpg"];
var currentImage = 0;

function changeAW(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAW[whichNum]);
	currentImage = whichNum;
}

function nextAWImage() {
	currentImage++;
	if(currentImage>=imagesAW.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAW[currentImage]);
}

function prevAWImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesAW[currentImage]);
}

var imagesSWW = ["img/SWWBig1.jpg", "img/SWWBig2.jpg", "img/SWWBig3.jpg", 
"img/SWWBig4.jpg", "img/SWWBig5.jpg", "img/SWWBig6.jpg"];
var currentImage = 0;

function changeSWW(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSWW[whichNum]);
	currentImage = whichNum;
}

function nextSWWImage() {
	currentImage++;
	if(currentImage>=imagesSWW.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSWW[currentImage]);
}

function prevSWWImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesSWW[currentImage]);
}

var imagesPear = ["img/PearBig1.jpg", "img/PearBig2.jpg", "img/PearBig3.jpg", 
"img/PearBig4.jpg", "img/PearBig5.jpg", "img/PearBig6.jpg"];
var currentImage = 0;

function changePear(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPear[whichNum]);
	currentImage = whichNum;
}

function nextPearImage() {
	currentImage++;
	if(currentImage>=imagesPear.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPear[currentImage]);
}

function prevPearImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPear[currentImage]);
}

var imagesPet = ["img/PetBig1.jpg", "img/PetBig2.jpg", "img/PetBig3.jpg", 
"img/PetBig4.jpg", "img/PetBig5.jpg", "img/PetBig6.jpg"];
var currentImage = 0;

function changePet(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPet[whichNum]);
	currentImage = whichNum;
}

function nextPetImage() {
	currentImage++;
	if(currentImage>=imagesPet.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPet[currentImage]);
}

function prevPetImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesPet[currentImage]);
}

var imagesCov = ["img/CovBig1.jpg", "img/CovBig2.jpg", "img/CovBig3.jpg", 
"img/CovBig4.jpg", "img/CovBig5.jpg", "img/CovBig6.jpg"];
var currentImage = 0;

function changeCov(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesCov[whichNum]);
	currentImage = whichNum;
}

function nextCovImage() {
	currentImage++;
	if(currentImage>=imagesCov.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesCov[currentImage]);
}

function prevCovImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesCov[currentImage]);
}

var imagesIllo = ["img/BigIllo1.jpg", "img/BigIllo2.jpg", "img/BigIllo3.jpg", 
"img/BigIllo4.jpg", "img/BigIllo5.jpg", "img/BigIllo6.jpg"];
var currentImage = 0;

function changeIllo(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesIllo[whichNum]);
	currentImage = whichNum;
}

function nextIlloImage() {
	currentImage++;
	if(currentImage>=imagesIllo.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesIllo[currentImage]);
}

function prevIlloImage() {
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', imagesIllo[currentImage]);
}
