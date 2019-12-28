var seconds;
var row = 6;
var col = 6;
var startDate;
var date;
var ct = 0;
var images = new Array();
var selectedPhotos = new Array(4);
var photoLayout;
var solved;
var oldImageID = null;
var imageID = null;
var timeout = null;
var score = 0;
var displaySeconds;
var hours;
var minutes;
var highScore = localStorage.getItem('highScore');
var timer;
function storeHighScore(highScore,score) {
  if (typeof(Storage) !== "undefined") {
   localStorage.setItem('highScore', score);
   }
}
function start (row,col) {

	highScore = localStorage.getItem('highScore');
	if(highScore == null)
	{
		highScore = 0;
	}
	if(timeout) {
		return;
	}
	startDate = new Date();
	timer = setInterval(function(){
	date = new Date();
	seconds = date.getSeconds() -startDate.getSeconds();
	seconds += (date.getMinutes() - startDate.getMinutes()) * 60;
	seconds += (date.getHours() - startDate.getHours()) * 3600;
	if (seconds <= 5) {
		seconds = 0;
	} else if (seconds > 5) {
		seconds -= 5;
	}
	minutes = parseInt(seconds/60);
	displaySeconds = seconds - minutes * 60;
	hours = parseInt(minutes/60);
	minutes = minutes - hours * 60;
	document.getElementById("Timer").innerHTML = hours +" Hours " + minutes  +" Minutes "  + displaySeconds + " Seconds.";
	}, 1000);
	document.getElementById("score").innerHTML = "Your Score is " + score;
	document.getElementById("highScore").innerHTML = "Highest Score is " + highScore;

	photoLayout = new Array(row);
	solved = new Array(row);
	for (var i = 0;i<row;i++) {
		solved[i] = new Array(col);
		photoLayout[i] = new Array(col);
	}
	for(var i = 0;i<row;i++) {
		for (var j = 0 ; j<col ; j++) {
			solved[i][j] = 0;
		}
	}
	images[0] = "\"Naruto.jpg\"";
	images[1] = "\"Sasuke.jpg\"";
	images[2] = "\"Sakura.jpg\"";
	images[3] = "\"Kakashi.jpg\"";
	images[4] = "\"RockLee.jpg\"";
	images[5] = "\"Neji.jpg\"";
	images[6] = "\"Guy.jpg\"";
	images[7] = "\"Tenten.jpg\"";
	ct = 0;
	for(var i = 0 ; i < (row*col)/2 ; i++) {
		index = parseInt(Math.random()*images.length);
		while (ct <= 1) {
			x = parseInt(Math.random()*row);
			y = parseInt(Math.random()*col);
			if(solved[x][y] == 0) {
				ct += 1;
				solved[x][y] = 1;
				photoLayout[x][y] = images[index];
			}
		}
		ct = 0;
	}
	for(var i = 0;i<row;i++) {
		for (var j = 0 ; j<col ; j++) {
			solved[i][j] = 0;
		}
	}
	ct = 0;
}



function resize() {
	document.body.style.background = 'url(https://wallpapercave.com/wp/wp2637256.jpg)';
	document.body.style.backgroundSize = "cover";


	if (timeout) {
		return;
	}
  score = 0;
	if (document.getElementById("pairsNumber").value == 36) {
		row = 6;
		col = 6;
		document.getElementById("grid").innerHTML = "<tr><td><img id =\"00\" src =\"bckImg.jpg\" onclick=\"change(0,0)\"></td><td><img id =\"01\" src =\"bckImg.jpg\" onclick=\"change(0,1)\"></td><td><img id =\"02\" src =\"bckImg.jpg\" onclick=\"change(0,2)\"></td><td><img id =\"03\" src =\"bckImg.jpg\" onclick=\"change(0,3)\"></td><td><img id =\"04\" src =\"bckImg.jpg\" onclick=\"change(0,4)\"></td><td><img id =\"05\" src =\"bckImg.jpg\" onclick=\"change(0,5)\"></td></tr><tr><td><img id =\"10\" src =\"bckImg.jpg\" onclick=\"change(1,0)\"></td><td><img id =\"11\" src =\"bckImg.jpg\" onclick=\"change(1,1)\"></td><td><img id =\"12\" src =\"bckImg.jpg\" onclick=\"change(1,2)\"></td><td><img id =\"13\" src =\"bckImg.jpg\" onclick=\"change(1,3)\"></td><td><img id =\"14\" src =\"bckImg.jpg\" onclick=\"change(1,4)\"></td><td><img id =\"15\" src =\"bckImg.jpg\" onclick=\"change(1,5)\"></td></tr><tr><td><img id =\"20\" src =\"bckImg.jpg\" onclick=\"change(2,0)\"></td><td><img id =\"21\" src =\"bckImg.jpg\" onclick=\"change(2,1)\"></td><td><img id =\"22\" src =\"bckImg.jpg\" onclick=\"change(2,2)\"></td><td><img id =\"23\" src =\"bckImg.jpg\" onclick=\"change(2,3)\"></td><td><img id =\"24\" src =\"bckImg.jpg\" onclick=\"change(2,4)\"></td><td><img id =\"25\" src =\"bckImg.jpg\" onclick=\"change(2,5)\"></td></tr><tr><td><img id =\"30\" src =\"bckImg.jpg\" onclick=\"change(3,0)\"></td><td><img id =\"31\" src =\"bckImg.jpg\" onclick=\"change(3,1)\"></td><td><img id =\"32\" src =\"bckImg.jpg\" onclick=\"change(3,2)\"></td><td><img id =\"33\" src =\"bckImg.jpg\" onclick=\"change(3,3)\"></td><td><img id =\"34\" src =\"bckImg.jpg\" onclick=\"change(3,4)\"></td><td><img id =\"35\" src =\"bckImg.jpg\" onclick=\"change(3,5)\"></td></tr><tr><td><img id =\"40\" src =\"bckImg.jpg\" onclick=\"change(4,0)\"></td><td><img id =\"41\" src =\"bckImg.jpg\" onclick=\"change(4,1)\"></td><td><img id =\"42\" src =\"bckImg.jpg\" onclick=\"change(4,2)\"></td><td><img id =\"43\" src =\"bckImg.jpg\" onclick=\"change(4,3)\"></td><td><img id =\"44\" src =\"bckImg.jpg\" onclick=\"change(4,4)\"></td><td><img id =\"45\" src =\"bckImg.jpg\" onclick=\"change(4,5)\"></td></tr><tr><td><img id =\"50\" src =\"bckImg.jpg\" onclick=\"change(5,0)\"></td><td><img id =\"51\" src =\"bckImg.jpg\" onclick=\"change(5,1)\"></td><td><img id =\"52\" src =\"bckImg.jpg\" onclick=\"change(5,2)\"></td><td><img id =\"53\" src =\"bckImg.jpg\" onclick=\"change(5,3)\"></td><td><img id =\"54\" src =\"bckImg.jpg\" onclick=\"change(5,4)\"></td><td><img id =\"55\" src =\"bckImg.jpg\" onclick=\"change(5,5)\"></td></tr>";
	} else if (document.getElementById("pairsNumber").value == 64) {
		row = 8;
		col = 8;
		document.getElementById("grid").innerHTML = "<tr><td><img id =\"00\" src =\"bckImg.jpg\" onclick=\"change(0,0)\"></td><td><img id =\"01\" src =\"bckImg.jpg\" onclick=\"change(0,1)\"></td><td><img id =\"02\" src =\"bckImg.jpg\" onclick=\"change(0,2)\"></td><td><img id =\"03\" src =\"bckImg.jpg\" onclick=\"change(0,3)\"></td><td><img id =\"04\" src =\"bckImg.jpg\" onclick=\"change(0,4)\"></td><td><img id =\"05\" src =\"bckImg.jpg\" onclick=\"change(0,5)\"></td><td><img id =\"06\" src =\"bckImg.jpg\" onclick=\"change(0,6)\"></td><td><img id =\"07\" src =\"bckImg.jpg\" onclick=\"change(0,7)\"></td></tr><tr><td><img id =\"10\" src =\"bckImg.jpg\" onclick=\"change(1,0)\"></td><td><img id =\"11\" src =\"bckImg.jpg\" onclick=\"change(1,1)\"></td><td><img id =\"12\" src =\"bckImg.jpg\" onclick=\"change(1,2)\"></td><td><img id =\"13\" src =\"bckImg.jpg\" onclick=\"change(1,3)\"></td><td><img id =\"14\" src =\"bckImg.jpg\" onclick=\"change(1,4)\"></td><td><img id =\"15\" src =\"bckImg.jpg\" onclick=\"change(1,5)\"></td><td><img id =\"16\" src =\"bckImg.jpg\" onclick=\"change(1,6)\"></td><td><img id =\"17\" src =\"bckImg.jpg\" onclick=\"change(1,7)\"></td></tr><tr><td><img id =\"20\" src =\"bckImg.jpg\" onclick=\"change(2,0)\"></td><td><img id =\"21\" src =\"bckImg.jpg\" onclick=\"change(2,1)\"></td><td><img id =\"22\" src =\"bckImg.jpg\" onclick=\"change(2,2)\"></td><td><img id =\"23\" src =\"bckImg.jpg\" onclick=\"change(2,3)\"></td><td><img id =\"24\" src =\"bckImg.jpg\" onclick=\"change(2,4)\"></td><td><img id =\"25\" src =\"bckImg.jpg\" onclick=\"change(2,5)\"></td><td><img id =\"26\" src =\"bckImg.jpg\" onclick=\"change(2,6)\"></td><td><img id =\"27\" src =\"bckImg.jpg\" onclick=\"change(2,7)\"></td></tr><tr><td><img id =\"30\" src =\"bckImg.jpg\" onclick=\"change(3,0)\"></td><td><img id =\"31\" src =\"bckImg.jpg\" onclick=\"change(3,1)\"></td><td><img id =\"32\" src =\"bckImg.jpg\" onclick=\"change(3,2)\"></td><td><img id =\"33\" src =\"bckImg.jpg\" onclick=\"change(3,3)\"></td><td><img id =\"34\" src =\"bckImg.jpg\" onclick=\"change(3,4)\"></td><td><img id =\"35\" src =\"bckImg.jpg\" onclick=\"change(3,5)\"></td><td><img id =\"36\" src =\"bckImg.jpg\" onclick=\"change(3,6)\"></td><td><img id =\"37\" src =\"bckImg.jpg\" onclick=\"change(3,7)\"></td></tr><tr><td><img id =\"40\" src =\"bckImg.jpg\" onclick=\"change(4,0)\"></td><td><img id =\"41\" src =\"bckImg.jpg\" onclick=\"change(4,1)\"></td><td><img id =\"42\" src =\"bckImg.jpg\" onclick=\"change(4,2)\"></td><td><img id =\"43\" src =\"bckImg.jpg\" onclick=\"change(4,3)\"></td><td><img id =\"44\" src =\"bckImg.jpg\" onclick=\"change(4,4)\"></td><td><img id =\"45\" src =\"bckImg.jpg\" onclick=\"change(4,5)\"></td><td><img id =\"46\" src =\"bckImg.jpg\" onclick=\"change(4,6)\"></td><td><img id =\"47\" src =\"bckImg.jpg\" onclick=\"change(4,7)\"></td></tr><tr><td><img id =\"50\" src =\"bckImg.jpg\" onclick=\"change(5,0)\"></td><td><img id =\"51\" src =\"bckImg.jpg\" onclick=\"change(5,1)\"></td><td><img id =\"52\" src =\"bckImg.jpg\" onclick=\"change(5,2)\"></td><td><img id =\"53\" src =\"bckImg.jpg\" onclick=\"change(5,3)\"></td><td><img id =\"54\" src =\"bckImg.jpg\" onclick=\"change(5,4)\"></td><td><img id =\"55\" src =\"bckImg.jpg\" onclick=\"change(5,5)\"></td><td><img id =\"56\" src =\"bckImg.jpg\" onclick=\"change(5,6)\"></td><td><img id =\"57\" src =\"bckImg.jpg\" onclick=\"change(5,7)\"></td></tr><tr><td><img id =\"60\" src =\"bckImg.jpg\" onclick=\"change(6,0)\"></td><td><img id =\"61\" src =\"bckImg.jpg\" onclick=\"change(6,1)\"></td><td><img id =\"62\" src =\"bckImg.jpg\" onclick=\"change(6,2)\"></td><td><img id =\"63\" src =\"bckImg.jpg\" onclick=\"change(6,3)\"></td><td><img id =\"64\" src =\"bckImg.jpg\" onclick=\"change(6,4)\"></td><td><img id =\"65\" src =\"bckImg.jpg\" onclick=\"change(6,5)\"></td><td><img id =\"66\" src =\"bckImg.jpg\" onclick=\"change(6,6)\"></td><td><img id =\"67\" src =\"bckImg.jpg\" onclick=\"change(6,7)\"></td></tr><tr><td><img id =\"70\" src =\"bckImg.jpg\" onclick=\"change(7,0)\"></td><td><img id =\"71\" src =\"bckImg.jpg\" onclick=\"change(7,1)\"></td><td><img id =\"72\" src =\"bckImg.jpg\" onclick=\"change(7,2)\"></td><td><img id =\"73\" src =\"bckImg.jpg\" onclick=\"change(7,3)\"></td><td><img id =\"74\" src =\"bckImg.jpg\" onclick=\"change(7,4)\"></td><td><img id =\"75\" src =\"bckImg.jpg\" onclick=\"change(7,5)\"></td><td><img id =\"76\" src =\"bckImg.jpg\" onclick=\"change(7,6)\"></td><td><img id =\"77\" src =\"bckImg.jpg\" onclick=\"change(7,7)\"></td></tr>";
	} else if (document.getElementById("pairsNumber").value == 100){
		row = 10;
		col = 10;
		document.getElementById ("grid").innerHTML = "<tr><td><img id =\"00\" src =\"bckImg.jpg\" onclick=\"change(0,0)\"></td><td><img id =\"01\" src =\"bckImg.jpg\" onclick=\"change(0,1)\"></td><td><img id =\"02\" src =\"bckImg.jpg\" onclick=\"change(0,2)\"></td><td><img id =\"03\" src =\"bckImg.jpg\" onclick=\"change(0,3)\"></td><td><img id =\"04\" src =\"bckImg.jpg\" onclick=\"change(0,4)\"></td><td><img id =\"05\" src =\"bckImg.jpg\" onclick=\"change(0,5)\"></td><td><img id =\"06\" src =\"bckImg.jpg\" onclick=\"change(0,6)\"></td><td><img id =\"07\" src =\"bckImg.jpg\" onclick=\"change(0,7)\"></td><td><img id =\"08\" src =\"bckImg.jpg\" onclick=\"change(0,8)\"></td><td><img id =\"09\" src =\"bckImg.jpg\" onclick=\"change(0,9)\"></td></tr><tr><td><img id =\"10\" src =\"bckImg.jpg\" onclick=\"change(1,0)\"></td><td><img id =\"11\" src =\"bckImg.jpg\" onclick=\"change(1,1)\"></td><td><img id =\"12\" src =\"bckImg.jpg\" onclick=\"change(1,2)\"></td><td><img id =\"13\" src =\"bckImg.jpg\" onclick=\"change(1,3)\"></td><td><img id =\"14\" src =\"bckImg.jpg\" onclick=\"change(1,4)\"></td><td><img id =\"15\" src =\"bckImg.jpg\" onclick=\"change(1,5)\"></td><td><img id =\"16\" src =\"bckImg.jpg\" onclick=\"change(1,6)\"></td><td><img id =\"17\" src =\"bckImg.jpg\" onclick=\"change(1,7)\"></td><td><img id =\"18\" src =\"bckImg.jpg\" onclick=\"change(1,8)\"></td><td><img id =\"19\" src =\"bckImg.jpg\" onclick=\"change(1,9)\"></td></tr><tr><td><img id =\"20\" src =\"bckImg.jpg\" onclick=\"change(2,0)\"></td><td><img id =\"21\" src =\"bckImg.jpg\" onclick=\"change(2,1)\"></td><td><img id =\"22\" src =\"bckImg.jpg\" onclick=\"change(2,2)\"></td><td><img id =\"23\" src =\"bckImg.jpg\" onclick=\"change(2,3)\"></td><td><img id =\"24\" src =\"bckImg.jpg\" onclick=\"change(2,4)\"></td><td><img id =\"25\" src =\"bckImg.jpg\" onclick=\"change(2,5)\"></td><td><img id =\"26\" src =\"bckImg.jpg\" onclick=\"change(2,6)\"></td><td><img id =\"27\" src =\"bckImg.jpg\" onclick=\"change(2,7)\"></td><td><img id =\"28\" src =\"bckImg.jpg\" onclick=\"change(2,8)\"></td><td><img id =\"29\" src =\"bckImg.jpg\" onclick=\"change(2,9)\"></td></tr><tr><td><img id =\"30\" src =\"bckImg.jpg\" onclick=\"change(3,0)\"></td><td><img id =\"31\" src =\"bckImg.jpg\" onclick=\"change(3,1)\"></td><td><img id =\"32\" src =\"bckImg.jpg\" onclick=\"change(3,2)\"></td><td><img id =\"33\" src =\"bckImg.jpg\" onclick=\"change(3,3)\"></td><td><img id =\"34\" src =\"bckImg.jpg\" onclick=\"change(3,4)\"></td><td><img id =\"35\" src =\"bckImg.jpg\" onclick=\"change(3,5)\"></td><td><img id =\"36\" src =\"bckImg.jpg\" onclick=\"change(3,6)\"></td><td><img id =\"37\" src =\"bckImg.jpg\" onclick=\"change(3,7)\"></td><td><img id =\"38\" src =\"bckImg.jpg\" onclick=\"change(3,8)\"></td><td><img id =\"39\" src =\"bckImg.jpg\" onclick=\"change(3,9)\"></td></tr><tr><td><img id =\"40\" src =\"bckImg.jpg\" onclick=\"change(4,0)\"></td><td><img id =\"41\" src =\"bckImg.jpg\" onclick=\"change(4,1)\"></td><td><img id =\"42\" src =\"bckImg.jpg\" onclick=\"change(4,2)\"></td><td><img id =\"43\" src =\"bckImg.jpg\" onclick=\"change(4,3)\"></td><td><img id =\"44\" src =\"bckImg.jpg\" onclick=\"change(4,4)\"></td><td><img id =\"45\" src =\"bckImg.jpg\" onclick=\"change(4,5)\"></td><td><img id =\"46\" src =\"bckImg.jpg\" onclick=\"change(4,6)\"></td><td><img id =\"47\" src =\"bckImg.jpg\" onclick=\"change(4,7)\"></td><td><img id =\"48\" src =\"bckImg.jpg\" onclick=\"change(4,8)\"></td><td><img id =\"49\" src =\"bckImg.jpg\" onclick=\"change(4,9)\"></td></tr><tr><td><img id =\"50\" src =\"bckImg.jpg\" onclick=\"change(5,0)\"></td><td><img id =\"51\" src =\"bckImg.jpg\" onclick=\"change(5,1)\"></td><td><img id =\"52\" src =\"bckImg.jpg\" onclick=\"change(5,2)\"></td><td><img id =\"53\" src =\"bckImg.jpg\" onclick=\"change(5,3)\"></td><td><img id =\"54\" src =\"bckImg.jpg\" onclick=\"change(5,4)\"></td><td><img id =\"55\" src =\"bckImg.jpg\" onclick=\"change(5,5)\"></td><td><img id =\"56\" src =\"bckImg.jpg\" onclick=\"change(5,6)\"></td><td><img id =\"57\" src =\"bckImg.jpg\" onclick=\"change(5,7)\"></td><td><img id =\"58\" src =\"bckImg.jpg\" onclick=\"change(5,8)\"></td><td><img id =\"59\" src =\"bckImg.jpg\" onclick=\"change(5,9)\"></td></tr><tr><td><img id =\"60\" src =\"bckImg.jpg\" onclick=\"change(6,0)\"></td><td><img id =\"61\" src =\"bckImg.jpg\" onclick=\"change(6,1)\"></td><td><img id =\"62\" src =\"bckImg.jpg\" onclick=\"change(6,2)\"></td><td><img id =\"63\" src =\"bckImg.jpg\" onclick=\"change(6,3)\"></td><td><img id =\"64\" src =\"bckImg.jpg\" onclick=\"change(6,4)\"></td><td><img id =\"65\" src =\"bckImg.jpg\" onclick=\"change(6,5)\"></td><td><img id =\"66\" src =\"bckImg.jpg\" onclick=\"change(6,6)\"></td><td><img id =\"67\" src =\"bckImg.jpg\" onclick=\"change(6,7)\"></td><td><img id =\"68\" src =\"bckImg.jpg\" onclick=\"change(6,8)\"></td><td><img id =\"69\" src =\"bckImg.jpg\" onclick=\"change(6,9)\"></td></tr><tr><td><img id =\"70\" src =\"bckImg.jpg\" onclick=\"change(7,0)\"></td><td><img id =\"71\" src =\"bckImg.jpg\" onclick=\"change(7,1)\"></td><td><img id =\"72\" src =\"bckImg.jpg\" onclick=\"change(7,2)\"></td><td><img id =\"73\" src =\"bckImg.jpg\" onclick=\"change(7,3)\"></td><td><img id =\"74\" src =\"bckImg.jpg\" onclick=\"change(7,4)\"></td><td><img id =\"75\" src =\"bckImg.jpg\" onclick=\"change(7,5)\"></td><td><img id =\"76\" src =\"bckImg.jpg\" onclick=\"change(7,6)\"></td><td><img id =\"77\" src =\"bckImg.jpg\" onclick=\"change(7,7)\"></td><td><img id =\"78\" src =\"bckImg.jpg\" onclick=\"change(7,8)\"></td><td><img id =\"79\" src =\"bckImg.jpg\" onclick=\"change(7,9)\"></td></tr><tr><td><img id =\"80\" src =\"bckImg.jpg\" onclick=\"change(8,0)\"></td><td><img id =\"81\" src =\"bckImg.jpg\" onclick=\"change(8,1)\"></td><td><img id =\"82\" src =\"bckImg.jpg\" onclick=\"change(8,2)\"></td><td><img id =\"83\" src =\"bckImg.jpg\" onclick=\"change(8,3)\"></td><td><img id =\"84\" src =\"bckImg.jpg\" onclick=\"change(8,4)\"></td><td><img id =\"85\" src =\"bckImg.jpg\" onclick=\"change(8,5)\"></td><td><img id =\"86\" src =\"bckImg.jpg\" onclick=\"change(8,6)\"></td><td><img id =\"87\" src =\"bckImg.jpg\" onclick=\"change(8,7)\"></td><td><img id =\"88\" src =\"bckImg.jpg\" onclick=\"change(8,8)\"></td><td><img id =\"89\" src =\"bckImg.jpg\" onclick=\"change(8,9)\"></td></tr><tr><td><img id =\"90\" src =\"bckImg.jpg\" onclick=\"change(9,0)\"></td><td><img id =\"91\" src =\"bckImg.jpg\" onclick=\"change(9,1)\"></td><td><img id =\"92\" src =\"bckImg.jpg\" onclick=\"change(9,2)\"></td><td><img id =\"93\" src =\"bckImg.jpg\" onclick=\"change(9,3)\"></td><td><img id =\"94\" src =\"bckImg.jpg\" onclick=\"change(9,4)\"></td><td><img id =\"95\" src =\"bckImg.jpg\" onclick=\"change(9,5)\"></td><td><img id =\"96\" src =\"bckImg.jpg\" onclick=\"change(9,6)\"></td><td><img id =\"97\" src =\"bckImg.jpg\" onclick=\"change(9,7)\"></td><td><img id =\"98\" src =\"bckImg.jpg\" onclick=\"change(9,8)\"></td><td><img id =\"99\" src =\"bckImg.jpg\" onclick=\"change(9,9)\"></td></tr>";
	}
	start(row,col);
	view();
}


function view() {
	var currentImage;
	for(var i = 0;i<row;i++) {
		for (var j = 0;j<col;j++) {
			currentImage = i.toString() + j.toString();
			if (photoLayout[i][j] == "\"Naruto.jpg\"") {
				document.getElementById(currentImage).src = "Naruto.jpg";
			} else if (photoLayout[i][j] == "\"Sasuke.jpg\"") {
				document.getElementById(currentImage).src = "Sasuke.jpg";
			}else if (photoLayout[i][j] == "\"Sakura.jpg\"") {
				document.getElementById(currentImage).src = "Sakura.jpg";
			}else if (photoLayout[i][j] == "\"Kakashi.jpg\"") {
				document.getElementById(currentImage).src = "Kakashi.jpg";
			}else if (photoLayout[i][j] == "\"Guy.jpg\"") {
				document.getElementById(currentImage).src = "Guy.jpg";
			}else if (photoLayout[i][j] == "\"Tenten.jpg\"") {
				document.getElementById(currentImage).src = "Tenten.jpg";
			}else if (photoLayout[i][j] == "\"RockLee.jpg\"") {
				document.getElementById(currentImage).src = "RockLee.jpg";
			}else if (photoLayout[i][j] == "\"Neji.jpg\"") {
				document.getElementById(currentImage).src = "Neji.jpg";
			}
		}
	}
	timeout = setTimeout(hideImages,5000);
}
function hideImages() {
	var currentImage;
	for(var i = 0;i<row;i++) {
		for (var j = 0;j<col;j++) {
			currentImage = i.toString() + j.toString();
			document.getElementById(currentImage).src = "bckImg.jpg";
		}
	}
	timeout = null;
}

function change(x,y){
	if(timeout) {
		return;
	}
	imageID = x.toString() + y.toString();
	if (solved[x][y] == 0) {
		if(ct) {
			selectedPhotos[2] = x;
			selectedPhotos[3] = y;
		} else {
			selectedPhotos[0] = x;
			selectedPhotos[1] = y;
		}

		name =  photoLayout[x][y];
		if (name == "\"Naruto.jpg\"")
		{
			document.getElementById(imageID).src = "Naruto.jpg";
		}
		else if (name == "\"Sasuke.jpg\"")
		{
			document.getElementById(imageID).src = "Sasuke.jpg";
		}
		else if (name == "\"Sakura.jpg\"")
		{
			document.getElementById(imageID).src = "Sakura.jpg";
		}
		else if (name == "\"Kakashi.jpg\"")
		{
			document.getElementById(imageID).src = "Kakashi.jpg";
		}else if (name == "\"Guy.jpg\"") {
				document.getElementById(imageID).src = "Guy.jpg";
		}else if (name == "\"Tenten.jpg\"") {
				document.getElementById(imageID).src = "Tenten.jpg";
		}else if (name == "\"RockLee.jpg\"") {
				document.getElementById(imageID).src = "RockLee.jpg";
		}else if (name == "\"Neji.jpg\"") {
				document.getElementById(imageID).src = "Neji.jpg";
		}
		if(ct == 1 &&(selectedPhotos[0] != selectedPhotos[2] || selectedPhotos[1] != selectedPhotos[3] )) {
			if (photoLayout[selectedPhotos[0]][selectedPhotos[1]]
				== photoLayout[selectedPhotos[2]][selectedPhotos[3]]  )
			{
				solved[selectedPhotos[0]][selectedPhotos[1]] = 1;
				solved[selectedPhotos[2]][selectedPhotos[3]] = 1;
				score += 12;
			}  else {
				x = selectedPhotos[0];
				y = selectedPhotos[1];
				oldImageID = x.toString() + y.toString();
				timeout = setTimeout(differentImagesView, 1500);
				score -= 2;
			}
			selectedPhotos[0] = 0;
			selectedPhotos[1] = 0;
			selectedPhotos[2] = 0;
			selectedPhotos[3] = 0;
			var end = 1;for(var i = 0;i<row;i++) {for(var j = 0;j<col;j++) {if(solved[i][j] == 0) {end = 0;}}}
			if (end == 1) {
				score = score - parseInt(seconds/2);
				gameOver();
				}
			ct = 0;
		} else {
			ct = 1;
		}
	}
	document.getElementById("score").innerHTML = "Your Score is " + score;
}
function gameOver(){
	document.body.style.background = 'url(https://media1.tenor.com/images/9a1f11839c9f9e902f09e8259805319a/tenor.gif?itemid=11805675)';
	document.body.style.backgroundSize = "cover";
	document.getElementById("fullPage").innerHTML ="";
	if (score < 0) {
		score = 0;
	}
	if(score > highScore) {
		storeHighScore(highScore,score);
		document.getElementById("finishScore").innerHTML = "Congratulations You Beat The highScore, Your Score is " + score;
	} else {
		document.getElementById("finishScore").innerHTML = "Congratulations Your Score is " + score;
	}
	document.getElementById("finishTime").innerHTML = "You finished in " +hours +" Hours " + minutes  +" Minutes "  + displaySeconds + " Seconds.";
	if(score > highScore) {
		document.getElementById("lastHighScore").innerHTML = "Your last High Score is " + highScore;
	}else {
		document.getElementById("lastHighScore").innerHTML = "Highest Score is " + highScore;
	}
}

function differentImagesView() {
		timeout = null;
		document.getElementById(imageID).src = "bckImg.jpg";
		document.getElementById(oldImageID).src = "bckImg.jpg";

}

function solveAll(){
	if(timeout) {
		return;
	}
	for(var i=0;i<row;i++) {
		for(var j=0;j<col;j++) {
			solved[i][j] = 1;
			imageID = i.toString() + j.toString();
			name =  photoLayout[i][j];
			if (name == "\"Naruto.jpg\"")
			{
				document.getElementById(imageID).src = "Naruto.jpg";
			}
			else if (name == "\"Sasuke.jpg\"")
			{
				document.getElementById(imageID).src = "Sasuke.jpg";
			}
			else if (name == "\"Sakura.jpg\"")
			{
				document.getElementById(imageID).src = "Sakura.jpg";
			}
			else if (name == "\"Kakashi.jpg\"")
			{
				document.getElementById(imageID).src = "Kakashi.jpg";
			}else if (name == "\"Guy.jpg\"") {
				document.getElementById(imageID).src = "Guy.jpg";
			}else if (name == "\"Tenten.jpg\"") {
					document.getElementById(imageID).src = "Tenten.jpg";
			}else if (name == "\"RockLee.jpg\"") {
					document.getElementById(imageID).src = "RockLee.jpg";
			}else if (name == "\"Neji.jpg\"") {
					document.getElementById(imageID).src = "Neji.jpg";
			}
			}
	}
	myStopFunction();
}

function myStopFunction() {
  clearInterval(timer);
}
