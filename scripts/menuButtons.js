


// ---------------------------------------------------------------------- //
// ------------------------------ VARIABLES ----------------------------- //
// ---------------------------------------------------------------------- //


// BTN SET 1 //

var btn1Left = document.getElementById('menuBtn1Left');
var btn1LeftIcon = document.getElementById('menuBtn1LeftIcon');
var btn1LeftIconText = false;
var btn1Right = document.getElementById('menuBtn1Right');
var btn1RightIcon = document.getElementById('menuBtn1RightIcon');
var btn1RightIconText = false;

var subMenu1 = document.getElementById('menuBtn1Sub');
var subMenu1BtnLeft = document.getElementById('menuBtn1SubLeft');
var subMenu1BtnMiddle = document.getElementById('menuBtn1SubMiddle');
var subMenu1BtnRight = document.getElementById('menuBtn1SubRight');
var subMenu1BtnLeftText = document.getElementById('menuBtn1SubLeftText');
var subMenu1BtnMiddleText = document.getElementById('menuBtn1SubMiddleText');
var subMenu1BtnRightText = document.getElementById('menuBtn1SubRightText');

var menu1LeftActive = false;
var menu1RightActive = false;

var subMenu1BtnLeftActive = false;
var subMenu1BtnMiddleActive = true;
var subMenu1BtnRightActive = false;


// BTN SET 2 //

var btn2Left = document.getElementById('menuBtn2Left');
var btn2LeftIcon = document.getElementById('menuBtn2LeftIcon');
var btn2LeftIconText = document.getElementById('menuBtn2LeftIconText');
var btn2Right = document.getElementById('menuBtn2Right');
var btn2RightIcon = document.getElementById('menuBtn2RightIcon');
var btn2RightIconText = document.getElementById('menuBtn2RightIconText');

var subMenu2 = document.getElementById('menuBtn2Sub');
var subMenu2BtnLeft = document.getElementById('menuBtn2SubLeft');
var subMenu2BtnMiddle = document.getElementById('menuBtn2SubMiddle');
var subMenu2BtnRight = document.getElementById('menuBtn2SubRight');
var subMenu2BtnLeftText = document.getElementById('menuBtn2SubLeftText');
var subMenu2BtnMiddleText = document.getElementById('menuBtn2SubMiddleText');
var subMenu2BtnRightText = document.getElementById('menuBtn2SubRightText');

var menu2LeftActive = false;
var menu2RightActive = false;

var subMenu2BtnLeftActive = false;
var subMenu2BtnMiddleActive = true;
var subMenu2BtnRightActive = false;


// BTN SET 3 //

var btn3Left = document.getElementById('menuBtn3Left');
var btn3LeftIcon = document.getElementById('menuBtn3LeftIcon');
var btn3LeftIconText = document.getElementById('menuBtn3LeftIconText');
var btn3Right = document.getElementById('menuBtn3Right');
var btn3RightIcon = document.getElementById('menuBtn3RightIcon');
var btn3RightIconText = document.getElementById('menuBtn3RightIconText');

var subMenu3 = document.getElementById('menuBtn3Sub');
var subMenu3BtnLeft = document.getElementById('menuBtn3SubLeft');
var subMenu3BtnMiddle = document.getElementById('menuBtn3SubMiddle');
var subMenu3BtnRight = document.getElementById('menuBtn3SubRight');
var subMenu3BtnLeftText = document.getElementById('menuBtn3SubLeftText');
var subMenu3BtnMiddleText = document.getElementById('menuBtn3SubMiddleText');
var subMenu3BtnRightText = document.getElementById('menuBtn3SubRightText');

var menu3LeftActive = false;
var menu3RightActive = false;

var subMenu3BtnLeftActive = false;
var subMenu3BtnMiddleActive = true;
var subMenu3BtnRightActive = false;




var right = "right";
var left= "left";







// ---------------------------------------------------------------------- //
// -------------------------- ACTIVATE SUBMENU -------------------------- //
// ---------------------------------------------------------------------- //



function subAppear(subMenu, clicked) {

	if (subMenu == subMenu1) {

		activateSubMenu(subMenu, menu1LeftActive, menu1RightActive, clicked);
		closeOther(subMenu2, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnRight, subMenu2BtnRightText, menu2LeftActive, menu2RightActive);
		closeOther(subMenu3, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnRight, subMenu3BtnRightText, menu3LeftActive, menu3RightActive);
		deactivateAllBtns(btn2Left, btn2LeftIcon, btn2LeftIconText, menu2LeftActive, btn2Right, btn2RightIcon, btn2RightIconText, menu2RightActive);
		deactivateAllBtns(btn3Left, btn3LeftIcon, btn3LeftIconText, menu3LeftActive, btn3Right, btn3RightIcon, btn3RightIconText, menu3RightActive);

	} else if (subMenu == subMenu2) {

		activateSubMenu(subMenu, menu2LeftActive, menu2RightActive, clicked);
		closeOther(subMenu1, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnRight, subMenu1BtnRightText, menu1LeftActive, menu1RightActive);
		closeOther(subMenu3, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnRight, subMenu3BtnRightText, menu3LeftActive, menu3RightActive);
		deactivateAllBtns(btn1Left, btn1LeftIcon, btn1LeftIconText, menu1LeftActive, btn1Right, btn1RightIcon, btn1RightIconText, menu1RightActive);
		deactivateAllBtns(btn3Left, btn3LeftIcon, btn3LeftIconText, menu3LeftActive, btn3Right, btn3RightIcon, btn3RightIconText, menu3RightActive);

	} else if (subMenu == subMenu3) {

		activateSubMenu(subMenu, menu3LeftActive, menu3RightActive, clicked);
		closeOther(subMenu1, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnRight, subMenu1BtnRightText, menu1LeftActive, menu1RightActive);
		closeOther(subMenu2, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnRight, subMenu2BtnRightText, menu2LeftActive, menu2RightActive);
		deactivateAllBtns(btn1Left, btn1LeftIcon, btn1LeftIconText, menu1LeftActive, btn1Right, btn1RightIcon, btn1RightIconText, menu1RightActive);
		deactivateAllBtns(btn2Left, btn2LeftIcon, btn2LeftIconText, menu2LeftActive, btn2Right, btn2RightIcon, btn2RightIconText, menu2RightActive);

	}

}




function activateSubMenu(subMenu, leftActive, rightActive, clicked) {

	if (!leftActive && !rightActive) {
		subMenu.style.display = 'block';
	} else if (leftActive == true && clicked == right) {
		subMenu.style.display = 'block';
	} else if (rightActive == true && clicked == left) {
		subMenu.style.display = 'block';
	} else {
		if (subMenu == subMenu1) {
			resetSubMenu(subMenu, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnRight, subMenu1BtnRightText);
		} else if (subMenu == subMenu2) {
			resetSubMenu(subMenu, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnRight, subMenu2BtnRightText);
		} else if (subMenu == subMenu3) {
			resetSubMenu(subMenu, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnRight, subMenu3BtnRightText);
		}
	}

}




function btnActive(btn, btnIcon) {

	if (btn == btn1Right) {
		showBtnActivityRight(btn, btnIcon, btn1RightIconText, menu1LeftActive, menu1RightActive, btn1Left, btn1LeftIcon, btn1LeftIconText);
		if (menu1LeftActive) {
			menu1LeftActive = !menu1LeftActive;
		}
		menu1RightActive = !menu1RightActive;
	}


	if (btn == btn1Left) {
		showBtnActivityLeft(btn, btnIcon, btn1LeftIconText, menu1LeftActive, menu1RightActive, btn1Right, btn1RightIcon, btn1RightIconText);
		if (menu1RightActive) {
			menu1RightActive = !menu1RightActive;
		}
		menu1LeftActive = !menu1LeftActive;
	}


	if (btn == btn2Right) {
		showBtnActivityRight(btn, btnIcon, btn2RightIconText, menu2LeftActive, menu2RightActive, btn2Left, btn2LeftIcon, btn2LeftIconText);
		if (menu2LeftActive) {
			menu2LeftActive = !menu2LeftActive;
		}
		menu2RightActive = !menu2RightActive;
	}


	if (btn == btn2Left) {
		showBtnActivityLeft(btn, btnIcon, btn2LeftIconText, menu2LeftActive, menu2RightActive, btn2Right, btn2RightIcon, btn2RightIconText);
		if (menu2RightActive) {
			menu2RightActive = !menu2RightActive;
		}
		menu2LeftActive = !menu2LeftActive;
	}


	if (btn == btn3Right) {
		showBtnActivityRight(btn, btnIcon, btn3RightIconText, menu3LeftActive, menu3RightActive, btn3Left, btn3LeftIcon, btn3LeftIconText);
		if (menu3LeftActive) {
			menu3LeftActive = !menu3LeftActive;
		}
		menu3RightActive = !menu3RightActive;
	}


	if (btn == btn3Left) {
		showBtnActivityLeft(btn, btnIcon, btn3LeftIconText, menu3LeftActive, menu3RightActive, btn3Right, btn3RightIcon, btn3RightIconText);
		if (menu3RightActive) {
			menu3RightActive = !menu3RightActive;
		}
		menu3LeftActive = !menu3LeftActive;
	}
}




function showBtnActivityRight(btn, btnIcon, btnIconText, leftActive, rightActive, otherBtn, otherBtnIcon, otherBtnIconText) {

	if (!rightActive) {
		btn.style.animationName = 'btnActive';
		btnIcon.style.animationName = 'btnIconActive';
		if (btnIconText != false) {
			btnIconText.style.animationName = 'btnIconActive';
		}
	} else {
		btn.style.animationName = 'btnDeactive';
		btnIcon.style.animationName = 'btnIconDeactive';
		if (btnIconText != false) {
			btnIconText.style.animationName = 'btnIconDeactive';
		}
	}

	if (leftActive) {
		otherBtn.style.animationName = 'btnDeactive';
		otherBtnIcon.style.animationName = 'btnIconDeactive';
		if (btnIconText != false) {
			otherBtnIconText.style.animationName = 'btnIconDeactive';
		}
	}

}




function showBtnActivityLeft(btn, btnIcon, btnIconText, leftActive, rightActive, otherBtn, otherBtnIcon, otherBtnIconText) {

	if (!leftActive) {
		btn.style.animationName = 'btnActive';
		btnIcon.style.animationName = 'btnIconActive';
		if (btnIconText != false) {
			btnIconText.style.animationName = 'btnIconActive';
		}
	} else {
		btn.style.animationName = 'btnDeactive';
		btnIcon.style.animationName = 'btnIconDeactive';
		if (btnIconText != false) {
			btnIconText.style.animationName = 'btnIconDeactive';
		}
	}

	if (rightActive) {
		otherBtn.style.animationName = 'btnDeactive';
		otherBtnIcon.style.animationName = 'btnIconDeactive';
		if (btnIconText != false) {
			otherBtnIconText.style.animationName = 'btnIconDeactive';
		}
	}

}




function deactivateAllBtns(leftBtn, leftBtnIcon, leftBtnIconText, leftActive, rightBtn, rightBtnIcon, rightBtnIconText, rightActive) {

	if (leftActive) {
		leftBtn.style.animationName = 'btnDeactive';
		leftBtnIcon.style.animationName = 'btnIconDeactive';
		if (leftBtnIconText != false) {
			leftBtnIconText.style.animationName = 'btnIconDeactive';
		}

		if (leftActive = menu1LeftActive) {
			menu1LeftActive = ! menu1LeftActive;
		} else if (leftActive = menu2LeftActive) {
			menu2LeftActive = ! menu2LeftActive;
		} else if (leftActive = menu3LeftActive) {
			menu3LeftActive = ! menu3LeftActive;
		}
	}

	if (rightActive) {
		rightBtn.style.animationName = 'btnDeactive';
		rightBtnIcon.style.animationName = 'btnIconDeactive';
		if (rightBtnIconText != false) {
			rightBtnIconText.style.animationName = 'btnIconDeactive';
		}

		if (rightActive = menu1RightActive) {
			menu1RightActive = ! menu1RightActive;
		} else if (rightActive = menu2RightActive) {
			menu2RightActive = ! menu2RightActive;
		} else if (rightActive = menu3RightActive) {
			menu3RightActive = ! menu3RightActive;
		}
	}

}




function subBtnActive(menu, menuBtn) {

	if (menu == subMenu1) {
		if (menuBtn == subMenu1BtnLeft) {
			switchSubMenu(subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnMiddleActive, subMenu1BtnRight, subMenu1BtnRightText, subMenu1BtnRightActive);

			subMenu1BtnLeftActive = true;
			subMenu1BtnMiddleActive = false;
			subMenu1BtnRightActive = false;
		}

		if (menuBtn == subMenu1BtnMiddle) {
			switchSubMenu(subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnLeftActive, subMenu1BtnRight, subMenu1BtnRightText, subMenu1BtnRightActive);

			subMenu1BtnLeftActive = false;
			subMenu1BtnMiddleActive = true;
			subMenu1BtnRightActive = false;
		}

		if (menuBtn == subMenu1BtnRight) {
			switchSubMenu(subMenu1BtnRight, subMenu1BtnRightText, subMenu1BtnLeft, subMenu1BtnLeftText, subMenu1BtnLeftActive, subMenu1BtnMiddle, subMenu1BtnMiddleText, subMenu1BtnMiddleActive);

			subMenu1BtnLeftActive = false;
			subMenu1BtnMiddleActive = false;
			subMenu1BtnRightActive = true;
		}
	}


	if (menu == subMenu2) {
		if (menuBtn == subMenu2BtnLeft) {
			switchSubMenu(subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnMiddleActive, subMenu2BtnRight, subMenu2BtnRightText, subMenu2BtnRightActive);

			subMenu2BtnLeftActive = true;
			subMenu2BtnMiddleActive = false;
			subMenu2BtnRightActive = false;
		}

		if (menuBtn == subMenu2BtnMiddle) {
			switchSubMenu(subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnLeftActive, subMenu2BtnRight, subMenu2BtnRightText, subMenu2BtnRightActive);

			subMenu2BtnLeftActive = false;
			subMenu2BtnMiddleActive = true;
			subMenu2BtnRightActive = false;
		}

		if (menuBtn == subMenu2BtnRight) {
			switchSubMenu(subMenu2BtnRight, subMenu2BtnRightText, subMenu2BtnLeft, subMenu2BtnLeftText, subMenu2BtnLeftActive, subMenu2BtnMiddle, subMenu2BtnMiddleText, subMenu2BtnMiddleActive);

			subMenu2BtnLeftActive = false;
			subMenu2BtnMiddleActive = false;
			subMenu2BtnRightActive = true;
		}
	}


	if (menu == subMenu3) {
		if (menuBtn == subMenu3BtnLeft) {
			switchSubMenu(subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnMiddleActive, subMenu3BtnRight, subMenu3BtnRightText, subMenu3BtnRightActive);

			subMenu3BtnLeftActive = true;
			subMenu3BtnMiddleActive = false;
			subMenu3BtnRightActive = false;
		}

		if (menuBtn == subMenu3BtnMiddle) {
			switchSubMenu(subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnLeftActive, subMenu3BtnRight, subMenu3BtnRightText, subMenu3BtnRightActive);

			subMenu3BtnLeftActive = false;
			subMenu3BtnMiddleActive = true;
			subMenu3BtnRightActive = false;
		}

		if (menuBtn == subMenu3BtnRight) {
			switchSubMenu(subMenu3BtnRight, subMenu3BtnRightText, subMenu3BtnLeft, subMenu3BtnLeftText, subMenu3BtnLeftActive, subMenu3BtnMiddle, subMenu3BtnMiddleText, subMenu3BtnMiddleActive);

			subMenu3BtnLeftActive = false;
			subMenu3BtnMiddleActive = false;
			subMenu3BtnRightActive = true;
		}
	}

}




function switchSubMenu(menuBtn, menuBtnText, menuBtnAlt1, menuBtnAlt1Text, menuBtnAlt1Active, menuBtnAlt2, menuBtnAlt2Text, menuBtnAlt2Active) {

	menuBtn.style.marginBottom = '165px';
	menuBtn.style.animationName = 'subBtnIn';
	menuBtnText.style.animationName = 'subBtnTextIn';

	if (menuBtnAlt1Active) {
		menuBtnAlt1.style.marginBottom = '165px';
		menuBtnAlt1.style.animationName = 'subBtnOut';
		menuBtnAlt1Text.style.animationName = 'subBtnTextOut';
	}

	if (menuBtnAlt2Active) {
		menuBtnAlt2.style.marginBottom = '165px';
		menuBtnAlt2.style.animationName = 'subBtnOut';
		menuBtnAlt2Text.style.animationName = 'subBtnTextOut';
	}

}




function resetSubMenu(subMenu, btn1, btn1Text, btn2, btn2Text, btn3, btn3Text) {

	subMenu.style.display = 'none';

	btn1.style.marginBottom = '125px';
	btn1.style.animationName = 'subIn';
	btn1Text.style.animationName = 'none';

	btn2.style.marginBottom = '125px';
	btn2.style.animationName = 'subIn';
	btn2Text.style.animationName = 'none';

	btn3.style.marginBottom = '125px';
	btn3.style.animationName = 'subIn';
	btn3Text.style.animationName = 'none';

	if (subMenu = subMenu1) {
		subMenu1BtnLeftActive = false;
		subMenu1BtnMiddleActive = true;
		subMenu1BtnRightActive = false;
	}

	if (subMenu = subMenu2) {
		subMenu2BtnLeftActive = false;
		subMenu2BtnMiddleActive = true;
		subMenu2BtnRightActive = false;
	}

	if (subMenu = subMenu3) {
		subMenu3BtnLeftActive = false;
		subMenu3BtnMiddleActive = true;
		subMenu3BtnRightActive = false;
	}

}




function closeOther(subMenuAlt, subMenuAltBtnLeft, subMenuAltBtnLeftText, subMenuAltBtnMiddle, subMenuAltBtnMiddleText, subMenuAltBtnRight, subMenuAltBtnRightText, subMenuAltActive1, subMenuActive2) {

	if (subMenuAltActive1 || subMenuActive2) {
		resetSubMenu(subMenuAlt, subMenuAltBtnLeft, subMenuAltBtnLeftText, subMenuAltBtnMiddle, subMenuAltBtnMiddleText, subMenuAltBtnRight, subMenuAltBtnRightText);
	};

};







// ---------------------------------------------------------------------- //
// ----------------------------- CHANGE MAP ----------------------------- //
// ---------------------------------------------------------------------- //


var buurtGreen1 = document.getElementById('Path_288-2_1_');
var buurtGreen2 = document.getElementById('Path_294-2_1_');

var buurtLime1 = document.getElementById('Path_285-2_1_');
var buurtLime2 = document.getElementById('Path_284-2_1_');
var buurtLime3 = document.getElementById('Path_291-2_1_');
var buurtLime4 = document.getElementById('Path_293-2_1_');
var buurtLime5 = document.getElementById('Path_295-2_1_');

var buurtYellow1 = document.getElementById('Path_286-2_1_');
var buurtYellow2 = document.getElementById('Path_283-2_1_');
var buurtYellow3 = document.getElementById('Path_290-2_1_');
var buurtYellow4 = document.getElementById('Path_292-2_1_');

var buurtOrange1 = document.getElementById('Path_287-2_1_');
var buurtOrange2 = document.getElementById('Path_289-2_1_');





function originalColors() {

	buurtGreen1.style.fill = 'var(--p-green)';
	buurtGreen2.style.fill = 'var(--p-green)';
	buurtLime1.style.fill = 'var(--p-lime)';
	buurtLime2.style.fill = 'var(--p-lime)';
	buurtLime3.style.fill = 'var(--p-lime)';
	buurtLime4.style.fill = 'var(--p-lime)';
	buurtLime5.style.fill = 'var(--p-lime)';
	buurtYellow1.style.fill = 'var(--p-yellow)';
	buurtYellow2.style.fill = 'var(--p-yellow)';
	buurtYellow3.style.fill = 'var(--p-yellow)';
	buurtYellow4.style.fill = 'var(--p-yellow)';
	buurtOrange1.style.fill = 'var(--p-orange)';
	buurtOrange2.style.fill = 'var(--p-orange)';

}


function bikeColor() {

	buurtLime2.style.fill = "var(--p-green)";
	buurtLime3.style.fill = "var(--p-green)";

}
