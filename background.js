"use strict";
var USE_TIME = .1;
var WAIT_TIME = .1;

var useSeconds = Math.floor(USE_TIME*60);
var waitSeconds = Math.floor(WAIT_TIME*60);

var useTimer = window.setInterval(useCountdown, 1000);
var waitTimer;

/*
 * Handles the time the user is browsing the web
 */
function useCountdown() {
	if (useSeconds == 0) {
		useSeconds = USE_TIME*60;
		clearInterval(useTimer);
		window.setTimeout(function() {
			alert('wait for ' + waitSeconds + ' before you can work again');
		}, 1);
		waitTimer = window.setInterval(waitCountdown, 1000);
	} else {
		printTime(useSeconds, "use");
		useSeconds--;
	}
}

/*
 * Handles the time we should be waiting
 */
function waitCountdown() {
	if (waitSeconds == 0) {
		waitSeconds = WAIT_TIME*60;
		clearInterval(waitTimer);
		window.setTimeout(function() {
			alert('remember to look awa in ' + useSeconds + ' or I\'ll be here to remind you');
		}, 1);
		useTimer = setInterval(useCountdown, 1000);
	} else {
		printTime(waitSeconds, "wait");
		waitSeconds--;
	}
}

/*
 * Prints the time for debugging
 */
function printTime(time, msg) {
	var min = Math.floor(time/60);
	var sec = time%60;
	console.log(msg + ' min: ' + min + ' sec: ' + sec);
}