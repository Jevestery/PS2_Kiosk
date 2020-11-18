


// ---------------------------------------------------------------------- //
// ------------------------------ VARIABLES ----------------------------- //
// ---------------------------------------------------------------------- //



var colorBtnsDisabled = false;

var greenActive = false;
var limeActive = false;
var yellowActive = false;
var orangeActive = false;
var redActive = false;

var greenBtn = document.getElementById('greenBtn');
var limeBtn = document.getElementById('limeBtn');
var yellowBtn = document.getElementById('yellowBtn');
var orangeBtn = document.getElementById('orangeBtn');
var redBtn = document.getElementById('redBtn');

var greenBtnLabel = document.getElementById('greenBtnLabel');
var limeBtnLabel = document.getElementById('limeBtnLabel');
var yellowBtnLabel = document.getElementById('yellowBtnLabel');
var orangeBtnLabel = document.getElementById('orangeBtnLabel');
var redBtnLabel = document.getElementById('redBtnLabel');

var greenBtnClose = document.getElementById('greenBtnClose');
var limeBtnClose = document.getElementById('limeBtnClose');
var yellowBtnClose = document.getElementById('yellowBtnClose');
var orangeBtnClose = document.getElementById('orangeBtnClose');
var redBtnClose = document.getElementById('redBtnClose');







// ---------------------------------------------------------------------- //
// ---------------------- OPEN AND ACTIVATE LABELS ---------------------- //
// ---------------------------------------------------------------------- //



function activateBtn(btnColor, btnColorBG) {


	if (colorBtnsDisabled == false) {


		if (btnColor == greenBtn) {

			limeActive = false;
			yellowActive = false;
			orangeActive = false;
			redActive = false;

			if (greenActive == false) {

				showAnim(greenBtnLabel, greenBtnClose);
				closeAllOther(btnColor);

				allOpacityOut();
				setTimeout(function(){
					greenOpacityIn();
				}, 300);

				setTimeout(function(){
					greenActive = true;
				}, 600);

				updateSerial("a");

			} else {

				closeOneAnim(greenBtnLabel, greenBtnClose);
				allOpacityIn();

				setTimeout(function(){
					closeOneDisplay(greenBtnLabel, greenBtnClose);
					greenActive = false;
				}, 600);

				updateSerial("x");
			};






		} else if (btnColor == limeBtn) {

			greenActive = false;
			yellowActive = false;
			orangeActive = false;
			redActive = false;

			if (limeActive == false) {

				showAnim(limeBtnLabel, limeBtnClose);
				closeAllOther(btnColor);

				allOpacityOut();
				setTimeout(function(){
					limeOpacityIn();
				}, 300);

				setTimeout(function(){
					limeActive = true;
				}, 600);

				updateSerial("b");

			} else {

				closeOneAnim(limeBtnLabel, limeBtnClose);
				allOpacityIn();

				setTimeout(function(){
					closeOneDisplay(limeBtnLabel, limeBtnClose);
					limeActive = false;
				}, 600);

				updateSerial("x");
			};






		} else if (btnColor == yellowBtn) {

			greenActive = false;
			limeActive = false;
			orangeActive = false;
			redActive = false;

			if (yellowActive == false) {

				showAnim(yellowBtnLabel, yellowBtnClose);
				closeAllOther(btnColor);

				allOpacityOut();
				setTimeout(function(){
					yellowOpacityIn();
				}, 300);

				setTimeout(function(){
					yellowActive = true;
				}, 600);

				updateSerial("c");

			} else {

				closeOneAnim(yellowBtnLabel, yellowBtnClose);
				allOpacityIn();

				setTimeout(function(){
					closeOneDisplay(yellowBtnLabel, yellowBtnClose);
					yellowActive = false;
				}, 600);

				updateSerial("x");
			};





		} else if (btnColor == orangeBtn) {

			greenActive = false;
			limeActive = false;
			yellowActive = false;
			redActive = false;

			if (orangeActive == false) {

				showAnim(orangeBtnLabel, orangeBtnClose);
				closeAllOther(btnColor);

				allOpacityOut();
				setTimeout(function(){
					orangeOpacityIn();
				}, 300);

				setTimeout(function(){
					orangeActive = true;
				}, 600);

				updateSerial("d");

			} else {

				closeOneAnim(orangeBtnLabel, orangeBtnClose);
				allOpacityIn();

				setTimeout(function(){
					closeOneDisplay(orangeBtnLabel, orangeBtnClose);
					orangeActive = false;
				}, 600);

				updateSerial("x");
			};






		} else if (btnColor == redBtn) {

			greenActive = false;
			limeActive = false;
			orangeActive = false;
			orangeActive = false;

			if (redActive == false) {

				showAnim(redBtnLabel, redBtnClose);
				closeAllOther(btnColor);

				allOpacityOut();
				setTimeout(function(){
					redOpacityIn();
				}, 300);

				setTimeout(function(){
					redActive = true;
				}, 600);

				updateSerial("e");

			} else {

				closeOneAnim(redBtnLabel, redBtnClose);
				allOpacityIn();

				setTimeout(function(){
					closeOneDisplay(redBtnLabel, redBtnClose);
					redActive = false;
				}, 600);

				updateSerial("x");
			};


		};

	}
};




function showAnim(label, close) {
	label.style.animationName = 'labelAppear';
	close.style.animationName = 'labelCloseAppear';
	label.style.display = 'block';
	close.style.display = 'block';
}




function closeOneAnim(label, close) {
	label.style.animationName = 'labelDisappear';
	close.style.animationName = 'labelCloseDisappear';
}




function closeOneDisplay(label, close) {
	label.style.display = 'none';
	close.style.display = 'none';
}







// ---------------------------------------------------------------------- //
// --------------------- CLOSE AND DEACTIVATE LABELS -------------------- //
// ---------------------------------------------------------------------- //



function closeAll() {

	closeOneAnim(greenBtnLabel, greenBtnClose);
	closeAnim(limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);

	setTimeout(function(){
		closeOneDisplay(greenBtnLabel, greenBtnClose);
		closeDisplay(limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);
		greenActive = false;
		limeActive = false;
		yellowActive = false;
		orangeActive = false;
		redActive = false;
	}, 600);

}



function closeAllOther(btnColor) {

	if (btnColor == greenBtn) {

		closeAnim(limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);

		setTimeout(function(){
			closeDisplay(limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);
			limeActive = false;
			yellowActive = false;
			orangeActive = false;
			redActive = false;
		}, 600);

	} else if (btnColor == limeBtn) {

		closeAnim(greenBtnLabel, greenBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);

		setTimeout(function(){
			closeDisplay(greenBtnLabel, greenBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);
			greenActive = false;
			yellowActive = false;
			orangeActive = false;
			redActive = false;
		}, 600);

	} else if (btnColor == yellowBtn) {

		closeAnim(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);

		setTimeout(function(){
			closeDisplay(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, orangeBtnLabel, orangeBtnClose, redBtnLabel, redBtnClose);
			greenActive = false;
			limeActive = false;
			orangeActive = false;
			redActive = false;
		}, 600);

	} else if (btnColor == orangeBtn) {

		closeAnim(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, redBtnLabel, redBtnClose);

		setTimeout(function(){
			closeDisplay(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, redBtnLabel, redBtnClose);
			greenActive = false;
			limeActive = false;
			yellowActive = false;
			redActive = false;
		}, 600);

	} else if (btnColor == redBtn) {

		closeAnim(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose);

		setTimeout(function(){
			closeDisplay(greenBtnLabel, greenBtnClose, limeBtnLabel, limeBtnClose, yellowBtnLabel, yellowBtnClose, orangeBtnLabel, orangeBtnClose);
			greenActive = false;
			limeActive = false;
			yellowActive = false;
			orangeActive = false;
		}, 600);

	};
};




function closeAnim(label1, close1, label2, close2, label3, close3, label4, close4) {
	label1.style.animationName = 'labelDisappear';
	close1.style.animationName = 'labelCloseDisappear';
	label2.style.animationName = 'labelDisappear';
	close2.style.animationName = 'labelCloseDisappear';
	label3.style.animationName = 'labelDisappear';
	close3.style.animationName = 'labelCloseDisappear';
	label4.style.animationName = 'labelDisappear';
	close4.style.animationName = 'labelCloseDisappear';
}




function closeDisplay(label1, close1, label2, close2, label3, close3, label4, close4) {
	label1.style.display = 'none';
	close1.style.display = 'none';
	label2.style.display = 'none';
	close2.style.display = 'none';
	label3.style.display = 'none';
	close3.style.display = 'none';
	label4.style.display = 'none';
	close4.style.display = 'none';
}







// ---------------------------------------------------------------------- //
// ----------------------------- MAP COLORS ----------------------------- //
// ---------------------------------------------------------------------- //


var greenBuurts = document.getElementsByClassName('greenBuurt');
var limeBuurts = document.getElementsByClassName('limeBuurt');
var yellowBuurts = document.getElementsByClassName('yellowBuurt');
var orangeBuurts = document.getElementsByClassName('orangeBuurt');
var redBuurts = document.getElementsByClassName('redBuurt');




function allOpacityIn() {
	greenOpacityIn();
	limeOpacityIn();
	yellowOpacityIn();
	orangeOpacityIn();
	redOpacityIn();
}



function allOpacityOut() {

	for (i = 0; i < greenBuurts.length; i++) {
		greenBuurts[i].style.animationName = 'buurtOpacityOut';
	}
	for (i = 0; i < limeBuurts.length; i++) {
		limeBuurts[i].style.animationName = 'buurtOpacityOut';
	}
	for (i = 0; i < yellowBuurts.length; i++) {
		yellowBuurts[i].style.animationName = 'buurtOpacityOut';
	}
	for (i = 0; i < orangeBuurts.length; i++) {
		orangeBuurts[i].style.animationName = 'buurtOpacityOut';
	}
	for (i = 0; i < redBuurts.length; i++) {
		redBuurts[i].style.animationName = 'buurtOpacityOut';
	}

}



function greenOpacityIn() {
	for (i = 0; i < greenBuurts.length; i++) {
		greenBuurts[i].style.animationName = 'buurtOpacityIn';
	}
}


function limeOpacityIn() {
	for (i = 0; i < limeBuurts.length; i++) {
		limeBuurts[i].style.animationName = 'buurtOpacityIn';
	}
}


function yellowOpacityIn() {
	for (i = 0; i < yellowBuurts.length; i++) {
		yellowBuurts[i].style.animationName = 'buurtOpacityIn';
	}
}


function orangeOpacityIn() {
	for (i = 0; i < orangeBuurts.length; i++) {
		orangeBuurts[i].style.animationName = 'buurtOpacityIn';
	}
}


function redOpacityIn() {
	for (i = 0; i < redBuurts.length; i++) {
		redBuurts[i].style.animationName = 'buurtOpacityIn';
	}
}
