// Init Variables
var chapter = 1;
var scene = 1;
var step = 0;
var tag;
window.onload = function() {
	var gameCanvas = document.getElementById('gameCanvas');
	var foreground = document.getElementById('foreground');
	var left = document.getElementById('left');
	var center = document.getElementById('center');
	var right = document.getElementById('right');
	var content = document.getElementById('content');
	var nameBox = document.getElementById('nameBox');
	var textBox = document.getElementById('textBox');
	var pn = document.getElementById('pn');
}

function loadChar(image, loc) {
	if (loc == "right") {
		right.innerHTML = "<img src=" + imageDir + image + ">"
	} else if (loc == "left") {
		left.innerHTML = "<img src=" + imageDir + image + ">"
	} else if (loc == "center") {
		center.innerHTML = "<img src=" + imageDir + image + ">"
	} else {
		center.innerHTML = "Loc:" + loc + " || Image: " + image;
	}
}
function setText(text) {
	textBox.innerHTML = text;
}
function setName(text) {
	if (text != "") {	
		nameBox.innerHTML = text;
	} else {
		nameBox.style.opacity = "0"
	}
}
function loadXMLDoc(dname) { // Load the XML Document
	if (window.XMLHttpRequest) {
		xhttp=new XMLHttpRequest();
	} else {
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
}
function nextStep() {
	xmlDoc=loadXMLDoc("game.xml");
	x=xmlDoc.documentElement.childNodes;
	
	
	//console.log(x[chapter].childNodes.legnth)
	/*
	if (step+1 > x[chapter].childNodes[scene].childNodes.legnth) {
		alert("END");
	} else {
		step++;
	}
	*/
	step++;
	var node = x[chapter].childNodes[scene].childNodes[step];
	if(checkTag() == 'text') { // ignore the blank text
		//alert("text");
		nextStep();
		
	} else if(checkTag() == 'char') {  // char tag
		img = node.getAttribute('img');
		loc = node.getAttribute('at');
		loadChar(img,loc);
		nextStep();
		
	} else if(checkTag() == 'say') { // say tag
		text = node.childNodes[0].nodeValue;
		name = node.getAttribute('name');
		if (text == 'undefined') {
			nextStep();
		} else {
			setText(text);
			setName(name);
		}
	} else if (checkTag() == 'goto'){
		alert("END")
		
	} else {nextStep();}
}
function checkTag() {
	xmlDoc=loadXMLDoc("game.xml");
	x=xmlDoc.documentElement.childNodes;
	//setName(x[1].nodeName);
	if(x[chapter].childNodes[scene].childNodes[step].nodeName == "say" ) { // if say tag
		tag = "say";
	} else if(x[chapter].childNodes[scene].childNodes[step].nodeName == "char" ) { // if char tag
		tag = "char";
	} else if(x[chapter].childNodes[scene].childNodes[step].nodeName == "#text" ) { // if char tag
		tag = "text";
	} else if(x[chapter].childNodes[scene].childNodes[step].nodeName == "goto" ) { // if char tag
		tag = "goto";
	}
	return tag;
}
function nextScene() {
	// Add to scene var
	// Load background from new scene
	// 
}

function countNodes(name) {
	xmlDoc=loadXMLDoc("game.xml");
	x=xmlDoc.documentElement.childNodes;
	
}

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function fullscreen() {
	changess(fullscreenss);
	launchFullScreen(document.documentElement);
	
}

