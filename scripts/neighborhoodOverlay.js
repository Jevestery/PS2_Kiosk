


// ---------------------------------------------------------------------- //
// ------------------------------ VARIABLES ----------------------------- //
// ---------------------------------------------------------------------- //


var mapElement = document.getElementById('map');
var overlayElement = document.getElementById('neighborhoodBox');

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
		map.style.animationName = buurtAnim;
		overlayElement.style.animationName = "opacity";
		overlayElement.style.display = "block";
		zoomed = true;

		disableAllOtherBtns();

		if (buurt == buurtGreen1) {
			buurtGreen1Zoomed = true;
		} else if (buurt == buurtGreen2) {
			buurtGreen2Zoomed = true;
		} else if (buurt == buurtLime1) {
			buurtLime1Zoomed = true;
		} else if (buurt == buurtLime2) {
			buurtLime2Zoomed = true;
		} else if (buurt == buurtLime3) {
			buurtLime3Zoomed = true;
		} else if (buurt == buurtLime4) {
			buurtLime4Zoomed = true;
		} else if (buurt == buurtLime5) {
			buurtLime5Zoomed = true;
		} else if (buurt == buurtYellow1) {
			buurtYellow1Zoomed = true;
		} else if (buurt == buurtYellow2) {
			buurtYellow2Zoomed = true;
		} else if (buurt == buurtYellow3) {
			buurtYellow3Zoomed = true;
		} else if (buurt == buurtYellow4) {
			buurtYellow4Zoomed = true;
		} else if (buurt == buurtOrange1) {
			buurtOrange1Zoomed = true;
		} else if (buurt == buurtOrange2) {
			buurtOrange2Zoomed = true;
		}


	} else {
		map.style.animationName = buurtAnimOut;
		overlayElement.style.animationName = "opacity-rev";
		zoomed = false;

		enableAllOtherBtns();

		setTimeout(function(){
			overlayElement.style.display = "none";
		}, 500);

		if (buurt == buurtGreen1) {
			buurtGreen1Zoomed = false;
		} else if (buurt == buurtGreen2) {
			buurtGreen2Zoomed = false;
		} else if (buurt == buurtLime1) {
			buurtLime1Zoomed = false;
		} else if (buurt == buurtLime2) {
			buurtLime2Zoomed = false;
		} else if (buurt == buurtLime3) {
			buurtLime3Zoomed = false;
		} else if (buurt == buurtLime4) {
			buurtLime4Zoomed = false;
		} else if (buurt == buurtLime5) {
			buurtLime5Zoomed = false;
		} else if (buurt == buurtYellow1) {
			buurtYellow1Zoomed = false;
		} else if (buurt == buurtYellow2) {
			buurtYellow2Zoomed = false;
		} else if (buurt == buurtYellow3) {
			buurtYellow3Zoomed = false;
		} else if (buurt == buurtYellow4) {
			buurtYellow4Zoomed = false;
		} else if (buurt == buurtOrange1) {
			buurtOrange1Zoomed = false;
		} else if (buurt == buurtOrange2) {
			buurtOrange2Zoomed = false;
		}
	}

}





var bottomBtns = document.getElementById('buttons');
var colorBtns = document.getElementById('colorBtns');



function disableAllOtherBtns() {

	if (menu1LeftActive == true || menu1RightActive == true || menu2LeftActive == true || menu2RightActive == true || menu3LeftActive == true || menu3RightActive == true) {
		btnCheckCloseOpen(false, false);
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



function enableAllOtherBtns() {
	bottomBtns.style.animationName = "opacity-3-rev";
	colorBtns.style.animationName = "opacity-3-rev";

	colorBtnsDisabled = false;
	menuBtnsDisabled = false;
}
