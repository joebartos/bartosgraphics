// var imagesTime = ["img/TimeBig1.jpg", "img/TimeBig2.jpg", "img/TimeBig3.jpg", 
// "img/TimeBig4.jpg", "img/TimeBig5.jpg", "img/TimeBig6.jpg"];
// var currentImage = 0;

// function changeTime(whichNum){
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesTime[whichNum]);
// 	currentImage = whichNum;
// }

// var imagesAfl = ["img/AFLBig1.jpg", "img/AFLBig2.jpg", "img/AFLBig3.jpg", 
// "img/AFLBig4.jpg", "img/AFLBig5.jpg", "img/AFLBig6.jpg"];
// var currentImage = 0;

// function changeAfl(whichNum){
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesAfl[whichNum]);
// 	currentImage = whichNum;
// }


// /*call method * alert("clicked");*/


// function nextTimeImage() {
// 	currentImage++;
// 	if(currentImage>=imagesTime.length){
// 		currentImage=0;
// 	}
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesTime[currentImage]);
// }

// function prevTimeImage() {
// 	currentImage=currentImage-1;
// 	if(currentImage===-1){
// 		currentImage=0;
// 	}
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesTime[currentImage]);
// }

// function nextAflImage() {
// 	currentImage++;
// 	if(currentImage>=imagesAfl.length){
// 		currentImage=0;
// 	}
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesAfl[currentImage]);
// }

// function prevAflImage() {
// 	currentImage=currentImage-1;
// 	if(currentImage===-1){
// 		currentImage=0;
// 	}
// 	var img = document.getElementById('mainImage');
// 	img.setAttribute('src', imagesAfl[currentImage]);
// }

var clients = [
	{ // These are objects with keys, e.g. name and their values, "Time Warner"
		img: ["img/TimeBig1thumb.jpg", "img/TimeBig2thumb.jpg", "img/TimeBig3thumb.jpg", 
		"img/TimeBig4thumb.jpg", "img/TimeBig5thumb.jpg", "img/TimeBig6thumb.jpg"],
		bigImg: ["img/TimeBig1.jpg", "img/TimeBig2.jpg", "img/TimeBig3.jpg", 
		"img/TimeBig4.jpg", "img/TimeBig5.jpg", "img/TimeBig6.jpg"],
		name:"Time Warner",
		clientInfo: "Designed weekly large print editon of Time Magazine. Handled Photoshop production, supervised staff and approved layouts."
	},
	{
		img: ["img/AFLBig1thumb.jpg", "img/AFLBig2thumb.jpg", "img/AFLBig3thumb.jpg", 
		"img/AFLBig4thumb.jpg", "img/AFLBig5thumb.jpg", "img/AFLBig6thumb.jpg"],
		bigImg: ["img/AFLBig1.jpg", "img/AFLBig2.jpg", "img/AFLBig3.jpg", 
"img/AFLBig4.jpg", "img/AFLBig5.jpg", "img/AFLBig6.jpg"],
		name: "American Media, Inc.",
		clientInfo: "Designed Arena Football League preseason and playoff special issues. Handled InDesign production, client meetings, photo shoot supervision, color proofing, edit input and releasing files to printer."
	}
]

var pageIndex = 0;
var currentImage = 0;

function changeClient(index){
	pageIndex = index; //pageIndex is a var above/
	currentImage = 0;
	var clientObj = clients[index]; //clients is a var above [] refers to index #/
	$("#clientName").html(clientObj["name"]); //.html is a jQuery method  changing html of clientName http://api.jquery.com/html/
	$(".clientInfo").html(clientObj["clientInfo"]);
	$("#mainImage").attr("src", clientObj["bigImg"][0]); // getting first image of array bigImg
	for (var i=0; i < clientObj["img"].length; i++) {
		// console.log("loop running");
		var selector = ".thumb." + i +" img"; // i is the second class in the img tag
		// console.log(selector);
		// console.log($(selector));
		// console.log(clientObj["img"][i]);
		$(selector).attr("src", clientObj["img"][i]);
	}
}

function changeImg(whichNum){
	var clientObj = clients[pageIndex];
	var img = document.getElementById('mainImage');
	img.setAttribute('src', clientObj["bigImg"][whichNum]);
	currentImage = whichNum;
}

function prevImage() {
	var clientObj = clients[pageIndex];
	currentImage=currentImage-1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', clientObj["bigImg"][currentImage]);
}

function nextImage() {
	var clientObj = clients[pageIndex];
	currentImage++;
	if(currentImage>=clientObj["bigImg"].length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', clientObj["bigImg"][currentImage]);
}