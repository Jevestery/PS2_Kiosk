


// ---------------------------------------------------------------------- //
// ---------------------- COLOR BUTTONS INFO LABEL ---------------------- //
// ---------------------------------------------------------------------- //


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




function activateBtn(btnColor, btnColorBG) {


	if (btnColor == greenBtn) {

		if (greenActive == false) {

			greenBtnLabel.style.animationName = 'labelAppear';
			greenBtnClose.style.animationName = 'labelCloseAppear';
			greenBtnLabel.style.display = 'block';
			greenBtnClose.style.display = 'block';

			closeAllOther(btnColor);

			allOpacityOut();
			setTimeout(function(){
				greenOpacityOut();
			}, 300);

			setTimeout(function(){
				greenActive = true;
			}, 600);

		} else {

			greenBtnLabel.style.animationName = 'labelDisappear';
			greenBtnClose.style.animationName = 'labelCloseDisappear';

			allOpacityIn();

			setTimeout(function(){
				greenBtnLabel.style.display = 'none';
				greenBtnClose.style.display = 'none';
				greenActive = false;
			}, 600);
		};

	} else if (btnColor == limeBtn) {

		if (limeActive == false) {

			limeBtnLabel.style.animationName = 'labelAppear';
			limeBtnClose.style.animationName = 'labelCloseAppear';
			limeBtnLabel.style.display = 'block';
			limeBtnClose.style.display = 'block';

			closeAllOther(btnColor);

			allOpacityOut();
			setTimeout(function(){
				limeOpacityOut();
			}, 300);

			setTimeout(function(){
				limeActive = true;
			}, 600);

		} else {

			limeBtnLabel.style.animationName = 'labelDisappear';
			limeBtnClose.style.animationName = 'labelCloseDisappear';

			allOpacityIn();

			setTimeout(function(){
				limeBtnLabel.style.display = 'none';
				limeBtnClose.style.display = 'none';
				limeActive = false;
			}, 600);
		};

	} else if (btnColor == yellowBtn) {

		if (yellowActive == false) {

			yellowBtnLabel.style.animationName = 'labelAppear';
			yellowBtnClose.style.animationName = 'labelCloseAppear';
			yellowBtnLabel.style.display = 'block';
			yellowBtnClose.style.display = 'block';

			closeAllOther(btnColor);

			allOpacityOut();
			setTimeout(function(){
				yellowOpacityOut();
			}, 300);

			setTimeout(function(){
				yellowActive = true;
			}, 600);

		} else {

			yellowBtnLabel.style.animationName = 'labelDisappear';
			yellowBtnClose.style.animationName = 'labelCloseDisappear';

			allOpacityIn();

			setTimeout(function(){
				yellowBtnLabel.style.display = 'none';
				yellowBtnClose.style.display = 'none';
				yellowActive = false;
			}, 600);
		};

	} else if (btnColor == orangeBtn) {

		if (orangeActive == false) {

			orangeBtnLabel.style.animationName = 'labelAppear';
			orangeBtnClose.style.animationName = 'labelCloseAppear';
			orangeBtnLabel.style.display = 'block';
			orangeBtnClose.style.display = 'block';

			closeAllOther(btnColor);

			allOpacityOut();
			setTimeout(function(){
				orangeOpacityOut();
			}, 300);

			setTimeout(function(){
				orangeActive = true;
			}, 600);

		} else {

			orangeBtnLabel.style.animationName = 'labelDisappear';
			orangeBtnClose.style.animationName = 'labelCloseDisappear';

			allOpacityIn();

			setTimeout(function(){
				orangeBtnLabel.style.display = 'none';
				orangeBtnClose.style.display = 'none';
				orangeActive = false;
			}, 600);
		};

	} else if (btnColor == redBtn) {

		if (redActive == false) {

			redBtnLabel.style.animationName = 'labelAppear';
			redBtnClose.style.animationName = 'labelCloseAppear';
			redBtnLabel.style.display = 'block';
			redBtnClose.style.display = 'block';

			closeAllOther(btnColor);

			allOpacityOut();
			setTimeout(function(){
				redOpacityOut();
			}, 300);

			setTimeout(function(){
				redActive = true;
			}, 600);

		} else {

			redBtnLabel.style.animationName = 'labelDisappear';
			redBtnClose.style.animationName = 'labelCloseDisappear';

			allOpacityIn();

			setTimeout(function(){
				redBtnLabel.style.display = 'none';
				redBtnClose.style.display = 'none';
				redActive = false;
			}, 600);
		};

	};
};




function closeAllOther(btnColor) {

	if (btnColor == greenBtn) {

		limeBtnLabel.style.animationName = 'labelDisappear';
		limeBtnClose.style.animationName = 'labelCloseDisappear';
		yellowBtnLabel.style.animationName = 'labelDisappear';
		yellowBtnClose.style.animationName = 'labelCloseDisappear';
		orangeBtnLabel.style.animationName = 'labelDisappear';
		orangeBtnClose.style.animationName = 'labelCloseDisappear';
		redBtnLabel.style.animationName = 'labelDisappear';
		redBtnClose.style.animationName = 'labelCloseDisappear';

		setTimeout(function(){
			limeBtnLabel.style.display = 'none';
			limeBtnClose.style.display = 'none';
			limeActive = false;
			yellowBtnLabel.style.display = 'none';
			yellowBtnClose.style.display = 'none';
			yellowActive = false;
			orangeBtnLabel.style.display = 'none';
			orangeBtnClose.style.display = 'none';
			orangeActive = false;
			redBtnLabel.style.display = 'none';
			redBtnClose.style.display = 'none';
			redActive = false;
		}, 700);

	} else if (btnColor == limeBtn) {

		greenBtnLabel.style.animationName = 'labelDisappear';
		greenBtnClose.style.animationName = 'labelCloseDisappear';
		yellowBtnLabel.style.animationName = 'labelDisappear';
		yellowBtnClose.style.animationName = 'labelCloseDisappear';
		orangeBtnLabel.style.animationName = 'labelDisappear';
		orangeBtnClose.style.animationName = 'labelCloseDisappear';
		redBtnLabel.style.animationName = 'labelDisappear';
		redBtnClose.style.animationName = 'labelCloseDisappear';

		setTimeout(function(){
			greenBtnLabel.style.display = 'none';
			greenBtnClose.style.display = 'none';
			greenActive = false;
			yellowBtnLabel.style.display = 'none';
			yellowBtnClose.style.display = 'none';
			yellowActive = false;
			orangeBtnLabel.style.display = 'none';
			orangeBtnClose.style.display = 'none';
			orangeActive = false;
			redBtnLabel.style.display = 'none';
			redBtnClose.style.display = 'none';
			redActive = false;
		}, 700);

	} else if (btnColor == yellowBtn) {

		greenBtnLabel.style.animationName = 'labelDisappear';
		greenBtnClose.style.animationName = 'labelCloseDisappear';
		limeBtnLabel.style.animationName = 'labelDisappear';
		limeBtnClose.style.animationName = 'labelCloseDisappear';
		orangeBtnLabel.style.animationName = 'labelDisappear';
		orangeBtnClose.style.animationName = 'labelCloseDisappear';
		redBtnLabel.style.animationName = 'labelDisappear';
		redBtnClose.style.animationName = 'labelCloseDisappear';

		setTimeout(function(){
			greenBtnLabel.style.display = 'none';
			greenBtnClose.style.display = 'none';
			greenActive = false;
			limeBtnLabel.style.display = 'none';
			limeBtnClose.style.display = 'none';
			limeActive = false;
			orangeBtnLabel.style.display = 'none';
			orangeBtnClose.style.display = 'none';
			orangeActive = false;
			redBtnLabel.style.display = 'none';
			redBtnClose.style.display = 'none';
			redActive = false;
		}, 700);

	} else if (btnColor == orangeBtn) {

		greenBtnLabel.style.animationName = 'labelDisappear';
		greenBtnClose.style.animationName = 'labelCloseDisappear';
		limeBtnLabel.style.animationName = 'labelDisappear';
		limeBtnClose.style.animationName = 'labelCloseDisappear';
		yellowBtnLabel.style.animationName = 'labelDisappear';
		yellowBtnClose.style.animationName = 'labelCloseDisappear';
		redBtnLabel.style.animationName = 'labelDisappear';
		redBtnClose.style.animationName = 'labelCloseDisappear';

		setTimeout(function(){
			greenBtnLabel.style.display = 'none';
			greenBtnClose.style.display = 'none';
			greenActive = false;
			limeBtnLabel.style.display = 'none';
			limeBtnClose.style.display = 'none';
			limeActive = false;
			yellowBtnLabel.style.display = 'none';
			yellowBtnClose.style.display = 'none';
			yellowActive = false;
			redBtnLabel.style.display = 'none';
			redBtnClose.style.display = 'none';
			redActive = false;
		}, 700);

	} else if (btnColor == redBtn) {

		greenBtnLabel.style.animationName = 'labelDisappear';
		greenBtnClose.style.animationName = 'labelCloseDisappear';
		limeBtnLabel.style.animationName = 'labelDisappear';
		limeBtnClose.style.animationName = 'labelCloseDisappear';
		yellowBtnLabel.style.animationName = 'labelDisappear';
		yellowBtnClose.style.animationName = 'labelCloseDisappear';
		orangeBtnLabel.style.animationName = 'labelDisappear';
		orangeBtnClose.style.animationName = 'labelCloseDisappear';

		setTimeout(function(){
			greenBtnLabel.style.display = 'none';
			greenBtnClose.style.display = 'none';
			greenActive = false;
			limeBtnLabel.style.display = 'none';
			limeBtnClose.style.display = 'none';
			limeActive = false;
			yellowBtnLabel.style.display = 'none';
			yellowBtnClose.style.display = 'none';
			yellowActive = false;
			orangeBtnLabel.style.display = 'none';
			orangeBtnClose.style.display = 'none';
			orangeActive = false;
		}, 700);

	};
};






// ---------------------------------------------------------------------- //
// ----------------------------- MAP COLORS ----------------------------- //
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



function allOpacityIn() {
	buurtGreen1.style.animationName = 'buurtOpacityIn';
	buurtGreen2.style.animationName = 'buurtOpacityIn';
	buurtLime1.style.animationName = 'buurtOpacityIn';
	buurtLime2.style.animationName = 'buurtOpacityIn';
	buurtLime3.style.animationName = 'buurtOpacityIn';
	buurtLime4.style.animationName = 'buurtOpacityIn';
	buurtLime5.style.animationName = 'buurtOpacityIn';
	buurtYellow1.style.animationName = 'buurtOpacityIn';
	buurtYellow2.style.animationName = 'buurtOpacityIn';
	buurtYellow3.style.animationName = 'buurtOpacityIn';
	buurtYellow4.style.animationName = 'buurtOpacityIn';
	buurtOrange1.style.animationName = 'buurtOpacityIn';
	buurtOrange2.style.animationName = 'buurtOpacityIn';
}



function allOpacityOut() {
	buurtGreen1.style.animationName = 'buurtOpacityOut';
	buurtGreen2.style.animationName = 'buurtOpacityOut';
	buurtLime1.style.animationName = 'buurtOpacityOut';
	buurtLime2.style.animationName = 'buurtOpacityOut';
	buurtLime3.style.animationName = 'buurtOpacityOut';
	buurtLime4.style.animationName = 'buurtOpacityOut';
	buurtLime5.style.animationName = 'buurtOpacityOut';
	buurtYellow1.style.animationName = 'buurtOpacityOut';
	buurtYellow2.style.animationName = 'buurtOpacityOut';
	buurtYellow3.style.animationName = 'buurtOpacityOut';
	buurtYellow4.style.animationName = 'buurtOpacityOut';
	buurtOrange1.style.animationName = 'buurtOpacityOut';
	buurtOrange2.style.animationName = 'buurtOpacityOut';
}



function greenOpacityOut() {
	buurtGreen1.style.animationName = 'buurtOpacityIn';
	buurtGreen2.style.animationName = 'buurtOpacityIn';
}


function limeOpacityOut() {
	buurtLime1.style.animationName = 'buurtOpacityIn';
	buurtLime2.style.animationName = 'buurtOpacityIn';
	buurtLime3.style.animationName = 'buurtOpacityIn';
	buurtLime4.style.animationName = 'buurtOpacityIn';
	buurtLime5.style.animationName = 'buurtOpacityIn';
}


function yellowOpacityOut() {
	buurtYellow1.style.animationName = 'buurtOpacityIn';
	buurtYellow2.style.animationName = 'buurtOpacityIn';
	buurtYellow3.style.animationName = 'buurtOpacityIn';
	buurtYellow4.style.animationName = 'buurtOpacityIn';
}


function orangeOpacityOut() {
	buurtOrange1.style.animationName = 'buurtOpacityIn';
	buurtOrange2.style.animationName = 'buurtOpacityIn';
}


function redOpacityOut() {
}
