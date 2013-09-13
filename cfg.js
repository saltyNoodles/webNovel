

// Initialize variables
var imageDir = "res/images/"; // Image Directory
var musicDir = "res/music/";  // Music Directory
var sfxDir = "res/sfx"; // Sound Effects Directory
windowedss = "styles/main_windowed.css"
fullscreenss = "styles/main_fullscreen.css"


// Game Setup
function changess(href) {
	var ss = document.createElement("link");
	ss.type = "text/css";
	ss.rel = "stylesheet";
	ss.href = href;
	document.getElementsByTagName("head")[0].appendChild(ss);
}
changess(windowedss);