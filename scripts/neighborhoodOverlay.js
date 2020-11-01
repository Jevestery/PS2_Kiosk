


// ---------------------------------------------------------------------- //
// ------------------------------ VARIABLES ----------------------------- //
// ---------------------------------------------------------------------- //


var mapElement = document.getElementById('map');
var overlayElement = document.getElementById('neighborhoodBox');

let buurtArray = new Array(12);

var buurtGreen1Zoomed = false;
var buurtGreen2Zoomed = false;
var buurtLime1Zoomed = false;
var buurtLime2Zoomed = false;
var buurtLime3Zoomed = false;
var buurtLime4Zoomed = false;
var buurtLime5Zoomed = false;
var buurtYellow1Zoomed = false;
var buurtYellow2Zoomed = false;
var buurtYellow3Zoomed = false;
var buurtYellow4Zoomed = false;
var buurtOrange1Zoomed = false;
var buurtOrange2Zoomed = false;

var buurtsZoomed = false;

var buurtGreen1Anim = "buurtGreen1Anim";
var buurtGreen2Anim = "buurtGreen2Anim";
var buurtLime1Anim = "buurtLime1Anim";
var buurtLime2Anim = "buurtLime2Anim";
var buurtLime3Anim = "buurtLime3Anim";
var buurtLime4Anim = "buurtLime4Anim";
var buurtLime5Anim = "buurtLime5Anim";
var buurtYellow1Anim = "buurtYellow1Anim";
var buurtYellow2Anim = "buurtYellow2Anim";
var buurtYellow3Anim = "buurtYellow3Anim";
var buurtYellow4Anim = "buurtYellow4Anim";
var buurtOrange1Anim = "buurtOrange1Anim";
var buurtOrange2Anim = "buurtOrange2Anim";

var buurtGreen1AnimOut = "buurtGreen1AnimOut";
var buurtGreen2AnimOut = "buurtGreen2AnimOut";
var buurtLime1AnimOut = "buurtLime1AnimOut";
var buurtLime2AnimOut = "buurtLime2AnimOut";
var buurtLime3AnimOut = "buurtLime3AnimOut";
var buurtLime4AnimOut = "buurtLime4AnimOut";
var buurtLime5AnimOut = "buurtLime5AnimOut";
var buurtYellow1AnimOut = "buurtYellow1AnimOut";
var buurtYellow2AnimOut = "buurtYellow2AnimOut";
var buurtYellow3AnimOut = "buurtYellow3AnimOut";
var buurtYellow4AnimOut = "buurtYellow4AnimOut";
var buurtOrange1AnimOut = "buurtOrange1AnimOut";
var buurtOrange2AnimOut = "buurtOrange2AnimOut";







// ---------------------------------------------------------------------- //
// ------------------------------- ZOOM IN ------------------------------ //
// ---------------------------------------------------------------------- //


function zoomIn(buurt, zoomed, buurtAnim, buurtAnimOut) {

	if (zoomed == false) {
		mapElement.style.animationName = buurtAnim;
		overlayElement.style.animationName = "opacity";
		overlayElement.style.display = "block";
		zoomed = true;

		disableAllOtherBtns(buurt);

		if (buurt == buurtGreen1) {
			buurtGreen1Zoomed = true;
			buurtInformation("Wippolder", "var(--p-green)", "13025", "312 ha", "2616-2628", "3220 kg", "1<sup>st</sup>");
			fillArray(buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtGreen2) {
			buurtGreen2Zoomed = true;
			buurtInformation("Abtswoude", "var(--p-green)", "30", "160 ha", "2623-2626", "23 kg", "2<sup>nd</sup>");
			fillArray(buurtGreen1, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime1) {
			buurtLime1Zoomed = true;
			buurtInformation("Binnenstad", "var(--p-lime)", "12440", "148 ha", "2611-2613", "3580 kg", "3<sup>rd</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime2) {
			buurtLime2Zoomed = true;
			buurtInformation("Vrijenban", "var(--p-lime)", "9530", "152 ha", "2612", "3390 kg", "6<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime3) {
			buurtLime3Zoomed = true;
			buurtInformation("Buitenhof", "var(--p-lime)", "13650", "226 ha", "2625", "3435 kg", "4<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime4) {
			buurtLime4Zoomed = true;
			buurtInformation("Tanthof-West", "var(--p-lime)", "8010", "124 ha", "2622", "3250 kg", "7<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime5) {
			buurtLime5Zoomed = true;
			buurtInformation("Ruiven", "var(--p-lime)", "320", "254 ha", "2629", "55 kg", "5<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow1) {
			buurtYellow1Zoomed = true;
			buurtInformation("Hof van Delft", "var(--p-yellow)", "13090", "152 ha", "2613-2624", "3795 kg", "8<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow2) {
			buurtYellow2Zoomed = true;
			buurtInformation("Delftse Hout", "var(--p-yellow)", "85", "300 ha", "2616", "75 kg", "11<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow3) {
			buurtYellow3Zoomed = true;
			buurtInformation("Voorhof", "var(--p-yellow)", "13490", "129 ha", "2624", "3905 kg", "9<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow4) {
			buurtYellow4Zoomed = true;
			buurtInformation("Tanthof-Oost", "var(--p-yellow)", "6045", "96 ha", "2623", "3105 kg", "10<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtOrange1) {
			buurtOrange1Zoomed = true;
			buurtInformation("Voordijkshoorn", "var(--p-orange)", "12620", "160 ha", "2614-2625", "4010 kg", "11<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange2);
		} else if (buurt == buurtOrange2) {
			buurtOrange2Zoomed = true;
			buurtInformation("Schieweg", "var(--p-orange)", "1240", "204 ha", "2614-2625", "2130 kg", "12<sup>th</sup>");
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1);
		}

		opacityInAllOther(buurt, zoomed, buurtAnim, buurtAnimOut);


	} else {
		mapElement.style.animationName = buurtAnimOut;
		overlayElement.style.animationName = "opacity-rev";
		zoomed = false;

		enableAllOtherBtns();

		setTimeout(function(){
			overlayElement.style.display = "none";
		}, 500);

		if (buurt == buurtGreen1) {
			buurtGreen1Zoomed = false;
			fillArray(buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtGreen2) {
			buurtGreen2Zoomed = false;
			fillArray(buurtGreen1, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime1) {
			buurtLime1Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime2) {
			buurtLime2Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime3) {
			buurtLime3Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime4) {
			buurtLime4Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtLime5) {
			buurtLime5Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow1) {
			buurtYellow1Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow2) {
			buurtYellow2Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow3, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow3) {
			buurtYellow3Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow4, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtYellow4) {
			buurtYellow4Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtOrange1, buurtOrange2);
		} else if (buurt == buurtOrange1) {
			buurtOrange1Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange2);
		} else if (buurt == buurtOrange2) {
			buurtOrange2Zoomed = false;
			fillArray(buurtGreen1, buurtGreen2, buurtLime1, buurtLime2, buurtLime3, buurtLime4, buurtLime5, buurtYellow1, buurtYellow2, buurtYellow3, buurtYellow4, buurtOrange1);
		}

		opacityOutAllOther();
	}

}





function resetMap(buurt, zoomed, buurtAnim, buurtAnimOut) {
	zoomIn(buurt, zoomed, buurtAnim, buurtAnimOut);
	setTimeout(function(){
		resetAllOnclicks();
	}, 50);
	mapElement.onclick = function() { };
}





function resetAllOnclicks() {
	buurtGreen1.onclick = function() { zoomIn(buurtGreen1, buurtGreen1Zoomed, buurtGreen1Anim, buurtGreen1AnimOut) };
	buurtGreen2.onclick = function() { zoomIn(buurtGreen2, buurtGreen2Zoomed, buurtGreen2Anim, buurtGreen2AnimOut) };
	buurtLime1.onclick = function() { zoomIn(buurtLime1, buurtLime1Zoomed, buurtLime1Anim, buurtLime1AnimOut) };
	buurtLime2.onclick = function() { zoomIn(buurtLime2, buurtLime2Zoomed, buurtLime2Anim, buurtLime2AnimOut) };
	buurtLime3.onclick = function() { zoomIn(buurtLime3, buurtLime3Zoomed, buurtLime3Anim, buurtLime3AnimOut) };
	buurtLime4.onclick = function() { zoomIn(buurtLime4, buurtLime4Zoomed, buurtLime4Anim, buurtLime4AnimOut) };
	buurtLime5.onclick = function() { zoomIn(buurtLime5, buurtLime5Zoomed, buurtLime5Anim, buurtLime5AnimOut) };
	buurtYellow1.onclick = function() { zoomIn(buurtYellow1, buurtYellow1Zoomed, buurtYellow1Anim, buurtYellow1AnimOut) };
	buurtYellow2.onclick = function() { zoomIn(buurtYellow2, buurtYellow2Zoomed, buurtYellow2Anim, buurtYellow2AnimOut) };
	buurtYellow3.onclick = function() { zoomIn(buurtYellow3, buurtYellow3Zoomed, buurtYellow3Anim, buurtYellow3AnimOut) };
	buurtYellow4.onclick = function() { zoomIn(buurtYellow4, buurtYellow4Zoomed, buurtYellow4Anim, buurtYellow4AnimOut) };
	buurtOrange1.onclick = function() { zoomIn(buurtOrange1, buurtOrange1Zoomed, buurtOrange1Anim, buurtOrange1AnimOut) };
	buurtOrange2.onclick = function() { zoomIn(buurtOrange2, buurtOrange2Zoomed, buurtOrange2Anim, buurtOrange2AnimOut) };
}






var bottomBtns = document.getElementById('buttons');
var colorBtns = document.getElementById('colorBtns');




function disableAllOtherBtns(buurt) {

	if (menu1LeftActive == true || menu1RightActive == true || menu2LeftActive == true || menu2RightActive == true || menu3LeftActive == true || menu3RightActive == true) {
		closeAll();
		allOpacityOut();
		setTimeout(function(){
			originalColors();
			clickedColorIn(buurt);
		}, 300);
		transportActiveFalse();
		showerActiveFalse();
		tempActiveFalse();
		btn1Reset();
		btn2Reset();
		btn3Reset();
		resetSubMenu(subMenu1, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnRight, subMenu1BtnRightText);
		resetSubMenu(subMenu2, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnRight, subMenu2BtnRightText);
		resetSubMenu(subMenu3, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnRight, subMenu3BtnRightText);
		deactivateAllBtns(btn1Left, btn1LeftIcon, btn1LeftIconText, menu1LeftActive, btn1Right, btn1RightIcon, btn1RightIconText, menu1RightActive);
		deactivateAllBtns(btn2Left, btn2LeftIcon, btn2LeftIconText, menu2LeftActive, btn2Right, btn2RightIcon, btn2RightIconText, menu2RightActive);
		deactivateAllBtns(btn3Left, btn3LeftIcon, btn3LeftIconText, menu3LeftActive, btn3Right, btn3RightIcon, btn3RightIconText, menu3RightActive);
	}

	bottomBtns.style.animationName = "opacity-3";
	colorBtns.style.animationName = "opacity-3";

	colorBtnsDisabled = true;
	menuBtnsDisabled = true;
}




function clickedColorIn(buurt) {
	buurt.style.animationName = "buurtOpacityIn";
}





function enableAllOtherBtns() {
	bottomBtns.style.animationName = "opacity-3-rev";
	colorBtns.style.animationName = "opacity-3-rev";

	colorBtnsDisabled = false;
	menuBtnsDisabled = false;
}






function fillArray(buurt1, buurt2, buurt3, buurt4, buurt5, buurt6, buurt7, buurt8, buurt9, buurt10, buurt11, buurt12) {
	buurtArray[0] = buurt1;
	buurtArray[1] = buurt2;
	buurtArray[2] = buurt3;
	buurtArray[3] = buurt4;
	buurtArray[4] = buurt5;
	buurtArray[5] = buurt6;
	buurtArray[6] = buurt7;
	buurtArray[7] = buurt8;
	buurtArray[8] = buurt9;
	buurtArray[9] = buurt10;
	buurtArray[10] = buurt11;
	buurtArray[11] = buurt12;
}




function opacityInAllOther(buurt, zoomed, buurtAnim, buurtAnimOut) {
	for (var i = 0; i < buurtArray.length; i++) {
		buurtArray[i].style.animationName = "buurtOpacityOut";
		buurtArray[i].onclick = function() { };
		setTimeout(function(){
			mapElement.onclick = function() { resetMap(buurt, zoomed, buurtAnim, buurtAnimOut); };
		}, 50);
	}
}




function opacityOutAllOther() {
	for (var i = 0; i < buurtArray.length; i++) {
		buurtArray[i].style.animationName = "buurtOpacityIn";
	}
}







// ---------------------------------------------------------------------- //
// ------------------------------- OVERLAY ------------------------------ //
// ---------------------------------------------------------------------- //


var buurtName = document.getElementById('buurtName');
var buurtColor = document.getElementById('buurtColor');
var buurtResidents = document.getElementById('buurtResidents');
var buurtArea = document.getElementById('buurtArea');
var buurtPostcode = document.getElementById('buurtPostcode');
var buurtEmissions = document.getElementById('buurtEmissions');
var buurtRank = document.getElementById('buurtRank');





function buurtInformation(name, color, residents, area, postcode, emissions, rank) {
	buurtName.innerHTML = name;
	buurtColor.style.backgroundColor = color;
	buurtResidents.innerHTML = residents;
	buurtArea.innerHTML = area;
	buurtPostcode.innerHTML = postcode;
	buurtEmissions.innerHTML = emissions;
	buurtRank.innerHTML = rank;
}
