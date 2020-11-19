


// ---------------------------------------------------------------------- //
// ------------------------------ VARIABLES ----------------------------- //
// ---------------------------------------------------------------------- //


var menuBtnsDisabled = false;


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


	if (menuBtnsDisabled == false) {


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


	if (menuBtnsDisabled == false) {


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
}




var btnActivate = 'btnActive';
var btnIconActivate = 'btnIconActive';

var btnDeactivate = 'btnDeactive';
var btnIconDeactivate = 'btnIconDeactive';


function showBtnActivityRight(btn, btnIcon, btnIconText, leftActive, rightActive, otherBtn, otherBtnIcon, otherBtnIconText) {

	if (!rightActive) {
		btnActivity1(btn, btnIcon, btnIconText, btnActivate, btnIconActivate);
	} else {
		btnActivity1(btn, btnIcon, btnIconText, btnDeactivate, btnIconDeactivate);
	}

	if (leftActive) {
		btnActivity2(btnIconText, otherBtn, otherBtnIcon, otherBtnIconText);
	}

}




function showBtnActivityLeft(btn, btnIcon, btnIconText, leftActive, rightActive, otherBtn, otherBtnIcon, otherBtnIconText) {

	if (!leftActive) {
		btnActivity1(btn, btnIcon, btnIconText, btnActivate, btnIconActivate);
	} else {
		btnActivity1(btn, btnIcon, btnIconText, btnDeactivate, btnIconDeactivate);
	}

	if (rightActive) {
		btnActivity2(btnIconText, otherBtn, otherBtnIcon, otherBtnIconText);
	}

}




function btnActivity1(btn, btnIcon, btnIconText, anim1, anim2) {
	btn.style.animationName = anim1;
	btnIcon.style.animationName = anim2;
	if (btnIconText != false) {
		btnIconText.style.animationName = anim2;
	}
}




function btnActivity2(btnIconText, otherBtn, otherBtnIcon, otherBtnIconText) {
	otherBtn.style.animationName = 'btnDeactive';
	otherBtnIcon.style.animationName = 'btnIconDeactive';
	if (btnIconText != false) {
		otherBtnIconText.style.animationName = 'btnIconDeactive';
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

	menuBtn.style.marginBottom = '158px';
	menuBtn.style.animationName = 'subBtnIn';
	menuBtnText.style.animationName = 'subBtnTextIn';

	if (menuBtnAlt1Active) {
		menuBtnAlt1.style.marginBottom = '158px';
		menuBtnAlt1.style.animationName = 'subBtnOut';
		menuBtnAlt1Text.style.animationName = 'subBtnTextOut';
		console.log(menuBtnAlt1Text.style.animationName);
	}

	if (menuBtnAlt2Active) {
		menuBtnAlt2.style.marginBottom = '158px';
		menuBtnAlt2.style.animationName = 'subBtnOut';
		menuBtnAlt2Text.style.animationName = 'subBtnTextOut';
			console.log(menuBtnAlt2Text.style.animationName);
	}

}




function resetBtnAnim(btn, btnText) {
	btn.style.marginBottom = '125px';
	btn.style.animationName = 'subIn';
	btnText.style.animationName = 'none';
}




function resetSubMenu(subMenu, btn1, btn1Text, btn2, btn2Text, btn3, btn3Text) {

	subMenu.style.display = 'none';

	resetBtnAnim(btn1, btn1Text);
	resetBtnAnim(btn2, btn2Text);
	resetBtnAnim(btn3, btn3Text);

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


var bikeColorsActive = false;
var carColorsActive = false;
var btn1WeekActive = false;
var btn1MonthActive = false;
var btn1YearActive = false;

var shower5ColorsActive = false;
var shower15ColorsActive = false;
var btn2WeekActive = false;
var btn2MonthActive = false;
var btn2YearActive = false;

var temp4ColorsActive = false;
var temp0ColorsActive = false;
var btn3WeekActive = false;
var btn3MonthActive = false;
var btn3YearActive = false;





function originalColors() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("x");
}



function removeAllClasses() {

	for (i = 0; i < greenBuurts.length; i++) {
		greenBuurts[i].classList.remove("greenBuurt");
	}
	for (i = 0; i < limeBuurts.length; i++) {
		limeBuurts[i].classList.remove("limeBuurt");
	}
	for (i = 0; i < yellowBuurts.length; i++) {
		yellowBuurts[i].classList.remove("yellowBuurt");
	}
	for (i = 0; i < orangeBuurts.length; i++) {
		orangeBuurts[i].classList.remove("orangeBuurt");
	}
	for (i = 0; i < redBuurts.length; i++) {
		redBuurts[i].classList.remove("redBuurt");
	}

}



function removeAllClassesX5() {
	removeAllClasses();
	removeAllClasses();
	removeAllClasses();
	removeAllClasses();
	removeAllClasses();
}





//---------- BTN SETUP ----------//



var mapBG = document.getElementById('mapBG');



function btnType(classifier, leftActive, rightActive, btnClassifier) {


	if (menuBtnsDisabled == false) {


		if (classifier == 1) {

			if (btnClassifier == 1) {
				bikeColorsActive = true;
				carColorsActive = false;
				showerActiveFalse();
				tempActiveFalse();
			} else if (btnClassifier == 2) {
				transportActiveFalse();
				shower5ColorsActive = true;
				shower15ColorsActive = false;
				tempActiveFalse();
			} else if (btnClassifier == 3) {
				transportActiveFalse();
				showerActiveFalse();
				temp4ColorsActive = true;
				temp0ColorsActive = false;
			}

			btnCheckCloseOpen(leftActive, btnClassifier);

		} else if (classifier == 2) {

			if (btnClassifier == 1) {
				bikeColorsActive = false;
				carColorsActive = true;
				showerActiveFalse();
				tempActiveFalse();
			} else if (btnClassifier == 2) {
				transportActiveFalse();
				shower5ColorsActive = false;
				shower15ColorsActive = true;
				tempActiveFalse();
			} else if (btnClassifier == 3) {
				transportActiveFalse();
				showerActiveFalse();
				temp4ColorsActive = false;
				temp0ColorsActive = true;
			}

			btnCheckCloseOpen(rightActive, btnClassifier);
		}

		mapBG.onclick = function() {closeAll();
			setTimeout(function(){

				setTimeout(function(){
					originalColors();
					allOpacityIn();
				}, 400);

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
			}, 50);
		}

	} else {
		mapBG.onclick = function() { }
	}
}




function transportActiveFalse() {
	bikeColorsActive = false;
	carColorsActive = false;
}




function showerActiveFalse() {
	shower5ColorsActive = false;
	shower15ColorsActive = false;
}




function tempActiveFalse() {
	temp4ColorsActive = false;
	temp0ColorsActive = false;
}




function btnCheckCloseOpen(btn, btnClassifier) {
	if (btn == true) {

		if (btnClassifier == 1) {

			if (btn1WeekActive) {
				setBtn(btnClassifier, 1);
			} else if (btn1YearActive) {
				setBtn(btnClassifier, 3);
			} else {
				setBtn(btnClassifier, 2);
			}

		} else if (btnClassifier == 2) {

			if (btn2WeekActive) {
				setBtn(btnClassifier, 1);
			} else if (btn2YearActive) {
				setBtn(btnClassifier, 3);
			} else {
				setBtn(btnClassifier, 2);
			}

		} else if (btnClassifier == 3) {

			if (btn3WeekActive) {
				setBtn(btnClassifier, 1);
			} else if (btn3YearActive) {
				setBtn(btnClassifier, 3);
			} else {
				setBtn(btnClassifier, 2);
			}

		}

	} else {
		closeAll();
		allOpacityOut();

		setTimeout(function(){
			originalColors();
			allOpacityIn();
		}, 400);

		transportActiveFalse();
		showerActiveFalse();
		tempActiveFalse();

		btn1Reset();
		btn2Reset();
		btn3Reset();
	}
}





//---------- BTNS ----------//



function setBtn(classifier, timeClassifier) {

	closeAll();
	allOpacityOut();


	if (classifier == 1) {

		setTimeout(function(){

			if (timeClassifier == 1) {
				btn2Reset();
				btn3Reset();
				btn1WeekActive = true;
				btn1MonthActive = false;
				btn1YearActive = false;

				if (bikeColorsActive) {
					bikeWeek();
				} else if (carColorsActive) {
					carWeek();
				}

			} else if (timeClassifier == 3) {
				btn2Reset();
				btn3Reset();
				btn1WeekActive = false;
				btn1MonthActive = false;
				btn1YearActive = true;

				if (bikeColorsActive) {
					bikeYear();
				} else if (carColorsActive) {
					carYear();
				}

			} else {
				btn2Reset();
				btn3Reset();
				btn1WeekActive = false;
				btn1MonthActive = true;
				btn1YearActive = false;

				if (bikeColorsActive) {
					bikeMonth();
				} else if (carColorsActive) {
					carMonth();
				}

			}

			allOpacityIn();
		}, 400);
	}


	if (classifier == 2) {

		setTimeout(function(){

			if (timeClassifier == 1) {
				btn1Reset();
				btn3Reset();
				btn2WeekActive = true;
				btn2MonthActive = false;
				btn2YearActive = false;

				if (shower5ColorsActive) {
					shower5Week();
				} else if (shower15ColorsActive) {
					shower15Week();
				}

			} else if (timeClassifier == 3) {
				btn1Reset();
				btn3Reset();
				btn2WeekActive = false;
				btn2MonthActive = false;
				btn2YearActive = true;

				if (shower5ColorsActive) {
					shower5Year();
				} else if (shower15ColorsActive) {
					shower15Year();
				}

			} else {
				btn1Reset();
				btn3Reset();
				btn2WeekActive = false;
				btn2MonthActive = true;
				btn2YearActive = false;

				if (shower5ColorsActive) {
					shower5Month();
				} else if (shower15ColorsActive) {
					shower15Month();
				}

			}

			allOpacityIn();
		}, 400);
	}


	if (classifier == 3) {

		setTimeout(function(){

			if (timeClassifier == 1) {
				btn1Reset();
				btn2Reset();
				btn3WeekActive = true;
				btn3MonthActive = false;
				btn3YearActive = false;

				if (temp4ColorsActive) {
					temp4Week();
				} else if (temp0ColorsActive) {
					temp0Week();
				}

			} else if (timeClassifier == 3) {
				btn1Reset();
				btn2Reset();
				btn3WeekActive = false;
				btn3MonthActive = false;
				btn3YearActive = true;

				if (temp4ColorsActive) {
					temp4Year();
				} else if (temp0ColorsActive) {
					temp0Year();
				}

			} else {
				btn1Reset();
				btn2Reset();
				btn3WeekActive = false;
				btn3MonthActive = true;
				btn3YearActive = false;

				if (temp4ColorsActive) {
					temp4Month();
				} else if (temp0ColorsActive) {
					temp0Month();
				}

			}

			allOpacityIn();
		}, 400);
	}

}




function btn1Reset() {
	btn1WeekActive = false;
	btn1MonthActive = false;
	btn1YearActive = false;
}



function btn2Reset() {
	btn2WeekActive = false;
	btn2MonthActive = false;
	btn2YearActive = false;
}



function btn3Reset() {
	btn3WeekActive = false;
	btn3MonthActive = false;
	btn3YearActive = false;
}






//---------- BTN 1 ----------//


function bikeWeek() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("greenBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("limeBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("limeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("f");
}



function bikeMonth() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("greenBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("greenBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("limeBuurt");
	buurtYellow2.classList.add("limeBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("limeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("yellowBuurt");
	updateSerial("g");
}



function bikeYear() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("greenBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("greenBuurt");
	buurtLime4.classList.add("greenBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("greenBuurt");
	buurtYellow2.classList.add("limeBuurt");
	buurtYellow3.classList.add("limeBuurt");
	buurtYellow4.classList.add("limeBuurt");
	buurtOrange1.classList.add("limeBuurt");
	buurtOrange2.classList.add("limeBuurt");
	updateSerial("h");
}



function carWeek() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("limeBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("yellowBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("yellowBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("x");
}



function carMonth() {
	removeAllClassesX5();
	buurtGreen1.classList.add("limeBuurt");
	buurtGreen2.classList.add("yellowBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("yellowBuurt");
	buurtLime3.classList.add("yellowBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("orangeBuurt");
	buurtYellow1.classList.add("orangeBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("orangeBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("redBuurt");
	updateSerial("i");
}



function carYear() {
	removeAllClassesX5();
	buurtGreen1.classList.add("yellowBuurt");
	buurtGreen2.classList.add("orangeBuurt");
	buurtLime1.classList.add("yellowBuurt");
	buurtLime2.classList.add("yellowBuurt");
	buurtLime3.classList.add("redBuurt");
	buurtLime4.classList.add("orangeBuurt");
	buurtLime5.classList.add("orangeBuurt");
	buurtYellow1.classList.add("redBuurt");
	buurtYellow2.classList.add("redBuurt");
	buurtYellow3.classList.add("redBuurt");
	buurtYellow4.classList.add("redBuurt");
	buurtOrange1.classList.add("redBuurt");
	buurtOrange2.classList.add("redBuurt");
	updateSerial("j");
}






//---------- BTN 2 ----------//


function shower5Week() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("greenBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("limeBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("yellowBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("x");
}



function shower5Month() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("greenBuurt");
	buurtLime5.classList.add("greenBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("limeBuurt");
	buurtYellow4.classList.add("limeBuurt");
	buurtOrange1.classList.add("yellowBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("x");
}



function shower5Year() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("greenBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("greenBuurt");
	buurtLime5.classList.add("greenBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("limeBuurt");
	buurtYellow3.classList.add("limeBuurt");
	buurtYellow4.classList.add("limeBuurt");
	buurtOrange1.classList.add("limeBuurt");
	buurtOrange2.classList.add("yellowBuurt");
	updateSerial("k");
}



function shower15Week() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("yellowBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("l");
}



function shower15Month() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("yellowBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("orangeBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("l");
}



function shower15Year() {
	removeAllClassesX5();
	buurtGreen1.classList.add("limeBuurt");
	buurtGreen2.classList.add("limeBuurt");
	buurtLime1.classList.add("yellowBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("yellowBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("yellowBuurt");
	buurtYellow1.classList.add("orangeBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("orangeBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("m");
}






//---------- BTN 3 ----------//


function temp4Week() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("greenBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("x");
}



function temp4Month() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("greenBuurt");
	buurtYellow1.classList.add("limeBuurt");
	buurtYellow2.classList.add("limeBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("n");
}



function temp4Year() {
	removeAllClassesX5();
	buurtGreen1.classList.add("greenBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("greenBuurt");
	buurtLime3.classList.add("limeBuurt");
	buurtLime4.classList.add("limeBuurt");
	buurtLime5.classList.add("greenBuurt");
	buurtYellow1.classList.add("limeBuurt");
	buurtYellow2.classList.add("limeBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("yellowBuurt");
	updateSerial("o");
}



function temp0Week() {
	removeAllClassesX5();
	buurtGreen1.classList.add("limeBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("limeBuurt");
	buurtLime3.classList.add("yellowBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("yellowBuurt");
	buurtYellow2.classList.add("yellowBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("orangeBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("p");
}



function temp0Month() {
	removeAllClassesX5();
	buurtGreen1.classList.add("limeBuurt");
	buurtGreen2.classList.add("greenBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("yellowBuurt");
	buurtLime3.classList.add("yellowBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("limeBuurt");
	buurtYellow1.classList.add("orangeBuurt");
	buurtYellow2.classList.add("orangeBuurt");
	buurtYellow3.classList.add("yellowBuurt");
	buurtYellow4.classList.add("yellowBuurt");
	buurtOrange1.classList.add("redBuurt");
	buurtOrange2.classList.add("orangeBuurt");
	updateSerial("q");
}



function temp0Year() {
	removeAllClassesX5();
	buurtGreen1.classList.add("limeBuurt");
	buurtGreen2.classList.add("limeBuurt");
	buurtLime1.classList.add("limeBuurt");
	buurtLime2.classList.add("yellowBuurt");
	buurtLime3.classList.add("orangeBuurt");
	buurtLime4.classList.add("yellowBuurt");
	buurtLime5.classList.add("yellowBuurt");
	buurtYellow1.classList.add("orangeBuurt");
	buurtYellow2.classList.add("orangeBuurt");
	buurtYellow3.classList.add("orangeBuurt");
	buurtYellow4.classList.add("orangeBuurt");
	buurtOrange1.classList.add("redBuurt");
	buurtOrange2.classList.add("redBuurt");
	updateSerial("r");
}
