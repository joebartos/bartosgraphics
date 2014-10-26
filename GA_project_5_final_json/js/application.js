
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

function changeClient(index){//changeClient function is referenced in indexGallery list of clients onClick
	pageIndex = index; 
	//pageIndex is a global var above, index shares it's value and is used as an arguement in changeClient/
	currentImage = 0; 
	//currentIndex is a global var from above/currentImage has value locally defined as 0 to reset images by onClick
	var clientObj = clients[index]; //clients index is set by onclick, 
	//clients is a global var/method above, [index] refers to index #, which refers to an array of different clients info/
	//ClientObj is a local variable, whose value is now equal to the first item in an array
	$("#clientName").html(clientObj["name"]); 
	//get the element with the id of clientName & give it the value at the object name in the .client method
	//.html is a jQuery method, changing html of clientName, which is a css id used in the indexGallery html./  
	// name, is an argument whose value is defined above in the clients method--html http://api.jquery.com/
	// clientObj is a local var defined in the previous line/
	$(".clientInfo").html(clientObj["clientInfo"]);
	//client info is a css class used in the indexGallery html, clientInfo is an object above with an array/
	$("#mainImage").attr("src", clientObj["bigImg"][0]); 
	//src is element in html (mainImage), get src element and give it the index value of the clientObj[][] array, 
	//clientObj[][] refers to object array in .client function above
	// above code gets first image of array bigImg, .attr is a jQuery version of .getAttribute
	//The getAttribute() method returns the value of the attribute with the specified name.
	for (var i=0; i < clientObj["img"].length; i++) { //if i < length of img array, add 1 to the index value
	//for loops through a block of code a number of times, img is an object array in the clients method above, 
	//client obj is a local variable defined as an index of the .clients method's object arrays
		// console.log("loop running"); this checks if loop is working
		var selector = ".thumb." + i + " img"; //get .thumb 0 elements img (image)
		// i is the second part ofclass in the img tag, thumb is class
		// console.log(selector); this checks if loop is working
		// console.log($(selector)); this checks if loop is working
		// console.log(clientObj["img"][i]); this checks if loop is working
		$(selector).attr("src", clientObj["img"][i]);//What do the 2 clientObj arrays do???????
		//selector is a variable defined in previous line as class thumb + i + img, 
		//so now selector equals the value of info in the .clients img object above
	}
}

function changeImg(whichNum){ //changeImg function is referenced in indexGallery thumbstrip onClick
	var clientObj = clients[pageIndex];//pageIndex is a global var defined above as 0
	var img = document.getElementById('mainImage');//mainImage is an id referencing the main image in the gallery
	img.setAttribute('src', clientObj["bigImg"][whichNum]);//What do the 2 clientObj arrays do???????  
	//bigImg is object defined in function .clients above, 
	//whichNum passes value to the arguement in the funciton changeImg
	currentImage = whichNum; //currentImg is global variable given the value of 0 above
}

function prevImage() { //prevImage function is referenced in indexGallery navBottom onClick
	var clientObj = clients[pageIndex]; //pageIndex is a global var defined above as 0
	currentImage=currentImage-1; //currentImage is a global variable defined above as 0
	if(currentImage===-1){//How is this loop working??????
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', clientObj["bigImg"][currentImage]);
	//The getAttribute() method returns the value of the attribute with the specified name.
	//clientObj now references the bigImg object in the .clients function  
	//and the value of the global variable currentImg above
}

function nextImage() { //nextImage function is referenced in indexGallery navBottom onClick
	var clientObj = clients[pageIndex];
	currentImage++;
	if(currentImage>=clientObj["bigImg"].length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', clientObj["bigImg"][currentImage]);
}