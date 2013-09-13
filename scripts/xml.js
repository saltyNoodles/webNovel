
// Init Variables
var chapter = 1;
var scene = 1;
var step = 0;
var tag;
window.onload = function() {
	var gameCanvas = document.getElementById('gameCanvas');
	var content = document.getElementById('content');
	var nameBox = document.getElementById('nameBox');
	var textBox = document.getElementById('textBox');
	var pn = document.getElementById('pn');
	nextStep();
}

function loadChar(image, loc) {
	
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
/* Problem:
	The closing tags are read as nodes. I can fix this.
		How? Simple.
		I just have it check if it is a self-closing tag. If it isn't, then skip a tag.
		This could be a problem in nested tags, but it won't affect this too much.







*/
function nextStep() {
	step++;
	checkTag();
	var node = x[chapter].childNodes[scene].childNodes[step];
	
	if(checkTag() == 'say') {
		text = node.childNodes[0].nodeValue;
		name = node.getAttribute('name');
		if (text == 'undefined') {
			nextStep();
		} else {
			setText(text);
			setName(name);
		}
	} else if(checkTag() == 'char') {
		//name = node.getAttribute('img');
		//alert("Character");
		nextStep();
	} else if(checkTag() == 'text') {
		//alert("text");
		nextStep();
	} else {nextStep();}
	pn.innerHTML = step;
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
	}
	return tag;
}
