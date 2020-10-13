


// ---------------------------------------------------------------------- //
// ------------------------------ BLACKOUT ------------------------------ //
// ---------------------------------------------------------------------- //


var blackoutActive = false;
var blackout = document.getElementById('blackout');
var closeBtn = document.getElementById('closeInfoBtn');


function infoBlackout() {

	if (blackoutActive == false) {

		blackout.style.animationName = 'opacity-9';
		blackout.style.display = 'block';
		closeBtn.style.display = 'block';

		blackoutActive = true;

	} else {

		blackout.style.animationName = 'opacity-9-rev';
		closeBtn.style.display = 'none';

		setTimeout(function(){
			blackout.style.display = 'none';
			blackoutActive = false;
		}, 800);

	};
};
