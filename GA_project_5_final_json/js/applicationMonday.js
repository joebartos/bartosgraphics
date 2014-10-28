
var clients = [
	{ // These are objects with keys, e.g. name and their values, "Time Warner"
		img: ["img/TimeBig1thumb.jpg", "img/TimeBig2thumb.jpg", "img/TimeBig3thumb.jpg", 
		"img/TimeBig4thumb.jpg", "img/TimeBig5thumb.jpg", "img/TimeBig6thumb.jpg"],
		bigImg: ["img/TimeBig1.jpg", "img/TimeBig2.jpg", "img/TimeBig3.jpg", 
		"img/TimeBig4.jpg", "img/TimeBig5.jpg", "img/TimeBig6.jpg"],
		name:"Time Warner",
		clientInfo: "Designed weekly large print editon of Time Magazine. Handled Photoshop 
		production, supervised staff and approved layouts."
	},

	{
		img: ["img/AFLBig1thumb.jpg", "img/AFLBig2thumb.jpg", "img/AFLBig3thumb.jpg", 
		"img/AFLBig4thumb.jpg", "img/AFLBig5thumb.jpg", "img/AFLBig6thumb.jpg"],
		bigImg: ["img/AFLBig1.jpg", "img/AFLBig2.jpg", "img/AFLBig3.jpg", 
		"img/AFLBig4.jpg", "img/AFLBig5.jpg", "img/AFLBig6.jpg"],
		name: "American Media, Inc.",
		clientInfo: "Designed Arena Football League preseason and playoff special issues. 
		Handled InDesign production, client meetings, photo shoot supervision, color proofing, edit input 
		and releasing files to printer."
	},

	{
		img: ["img/ScholBig1thumb.jpg", "img/ScholBig2thumb.jpg", "img/ScholBig3thumb.jpg", 
		"img/ScholBig4thumb.jpg", "img/ScholBig5thumb.jpg", "img/ScholBig6thumb.jpg"],
			bigImg: ["img/ScholBig1.jpg", "img/ScholBig2.jpg", "img/ScholBig3.jpg", 
		"img/ScholBig4.jpg", "img/ScholBig5.jpg", "img/ScholBig6.jpg"],
		name: "Scolastic Publishing",
		clientInfo: "Designed, handled production and illustrated humor books, textbooks and 
		promotional materials. Supervised promotional art staf and hired and supervised freeelance designers."
	},

	{
		img: ["img/SterBig1thumb.jpg", "img/SterBig2thumb.jpg", "img/SterBig3thumb.jpg", 
		"img/SterBig4thumb.jpg", "img/SterBig5thumb.jpg", "img/SterBig6thumb.jpg"],
		bigImg: ["img/SterBig1.jpg", "img/SterBig2.jpg", "img/ASterBig3.jpg", 
		"img/SterBig4.jpg", "img/SterBig5.jpg", "img/SterBig6.jpg"],
		name: "Barnes and Noble/Sterling",
		clientInfo: "Designed and handled producution of picture books and book series."
		},

	{
		img: ["img/DexBig1thumb.jpg", "img/DexBig2thumb.jpg", "img/DexBig3thumb.jpg", 
		"img/DexBig4thumb.jpg", "img/DexBig5thumb.jpg", "img/DexBig6thumb.jpg"],
		bigImg: ["img/DexBig1.jpg", "img/DexBig2.jpg", "img/DexBig3.jpg", 
		"img/DexBig4.jpg", "img/DexBig5.jpg", "img/DexBig6.jpg"],
		name: "Planet Dexter",
		clientInfo: "Designed, illustrated, bought art and handled production of kid's humorous trivia books."
	},

	{
		img: ["img/AWBig1thumb.jpg", "img/AWBig2thumb.jpg", "img/AWBig3thumb.jpg", 
		"img/AWBig4thumb.jpg", "img/AWBig5thumb.jpg", "img/AWBig6thumb.jpg"],
		bigImg: ["img/AWBig1.jpg", "img/AWBig2.jpg", "img/WLBig3.jpg", 
		"img/AWBig4.jpg", "img/AWBig5.jpg", "img/AWBig6.jpg"],
		name: "Addison Wesley",
		clientInfo: "Designed and bought art for math encyclopedia and math workbooks for 
		early elementary school market."
	},

	{
		img: ["img/SWWBig1thumb.jpg", "img/SWWBig2thumb.jpg", "img/SWWBig3thumb.jpg", 
		"img/SWWBig4thumb.jpg", "img/SWWBig5thumb.jpg", "img/SWWBig6thumb.jpg"],
		bigImg: ["img/SWWBig1.jpg", "img/SWWBig2.jpg", "img/SWWBig3.jpg", 
		"img/SWWBig4.jpg", "img/SWWBig5.jpg", "img/AFLBig6.jpg"],
		name: "LucaFilm/Workman Publishing",
		clientInfo: "Prototyped, designed, purchased art, input edits, handled Photoshop, Illustrator 
		and InDesign production and released files to printer for series of 12 Star Wars themed PK-G2 workbooks. 
		Hired, trained and supervised designers and illustrators (2,000 + illustrations)."
	},

	{
		img: ["img/PearBig1thumb.jpg", "img/PearBig2thumb.jpg", "img/PearBig3thumb.jpg", 
		"img/PearBig4thumb.jpg", "img/PearBig5thumb.jpg", "img/PearBig6thumb.jpg"],
		bigImg: ["img/PearBig1.jpg", "img/PearBig2.jpg", "img/PearBig3.jpg", 
		"img/PearBig4.jpg", "img/PearBig5.jpg", "img/PearBig6.jpg"],
		name: "Pearson Education",
		clientInfo: "Designed literature selections for elementary shool textbooks."
	},

	{
		img: ["img/PetBig1thumb.jpg", "img/PetBig2thumb.jpg", "img/PetBig3thumb.jpg", 
		"img/PetBig4thumb.jpg", "img/PetBig5thumb.jpg", "img/PetBig6thumb.jpg"],
		bigImg: ["img/PetBig1.jpg", "img/PetBig2.jpg", "img/PetBig3.jpg", 
		"img/PetBig4.jpg", "img/PetBig5.jpg", "img/AFLBig6.jpg"],
		name: "JW Pet",
		clientInfo: "Designed, handled production and released files to printer for series 
		of 6 pet habitat boxes"
	},

	{
		img: ["img/CovBig1thumb.jpg", "img/CovBig2thumb.jpg", "img/CovBig3thumb.jpg", 
		"img/CovBig4thumb.jpg", "img/CovBig5thumb.jpg", "img/CovBig6thumb.jpg"],
		bigImg: ["img/CovBig1.jpg", "img/CovBig2.jpg", "img/CovBig3.jpg", 
		"img/CovBig4.jpg", "img/CovBig5.jpg", "img/CovBig6.jpg"],
		name: "Book and Magazine Covers",
		clientInfo: "Designed, bought art, handled InDesign and Photoshop production, 
		and released files to printer for NY publishers."
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