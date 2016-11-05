//variable to get the actual time
var time = new Date().getHours();

var partyTime = 0;
var wakeUpTime = 8;
var lunchTime = 12;
var napTime = 15;
var afternoon = 17;
var evening = 21;
var bedTime = 22;

function getMessage() {
	//variable to keep element where message appears
	var messageSpot = document.getElementById(
		"timeEvent");

	//variable to keep element where image appears
	var imageSpot = document.getElementById("lolcat");

	console.log("the time is:" + time);

	//time tests
	//time = "";
	// time = 0; //good morning
	// time = 6; //good morning
	// time = 8;  // wake-up!
	// time = 10; // good morning
	// time = 12; // lunch time
	// time = 15; // nap time
	// time = 16; // good afternoon
	// time = 17; // good evening
	// time = 20; // good evening
	// time = 21; // good night
	// time = 22; // bed time
	// time = 23; // good night

	//set default message and image 
	messageSpot.innerText = "Good Day!";
	imageSpot.src="img/roll-cat.jpg";

	if(time == partyTime){
			messageSpot.innerText = "Iz Partee Time!";
			imageSpot.src = "img/party-cat.jpg";
	} else {
		if (time == wakeUpTime) {
			messageSpot.innerText = "Wake Up!";
			imageSpot.src = "img/wake-up-cat.jpg";
		} else if (time == bedTime){
			console.log("in bedTime if statement");
      messageSpot.innerText = "Iz bed time?";
			imageSpot.src = "img/bedtime-cat.jpg";
    } else if (time == lunchTime ) {
			messageSpot.innerText = "Iz lunch time?";
			imageSpot.src = "img/lunch-cat.jpg";
		} else if (time == napTime) {
			messageSpot.innerText = "Iz nap time?";
			imageSpot.src = "img/nap-cat.jpg";
		}else if(time < lunchTime) {
			messageSpot.innerText = "Good Morning!";
			imageSpot.src = "img/morning-cat.jpg";
		}else if (time < afternoon) {
			messageSpot.innerText = "Good afternoon!"
			imageSpot.src="img/roll-cat.jpg";	
		}else if (time < evening) {
			messageSpot.innerText = "Good Evening";
			imageSpot.src = "img/evening-cat.jpg";
		} else {
			messageSpot.innerText = "Good Night!";
			imageSpot.src = "img/good-night-cat.jpg";
		}
	}
}


var showCurrentTime = function() {
	//display the string on the webpage
	var clock = document.getElementById("clock");

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Set hours
	if (hours >= 12) {
		meridian = "PM";
	}
	if (hours > 12) {
		hours = hours -12;
	}

	//Set minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	//Set seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	//put together the string that displayes time: 
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

var updateClock = function(){ 
	showCurrentTime();
	getMessage();
};

var partyEvent = function() {
    if (partyTime < 0) {
      partyTime = new Date().getHours(); 
        
			button.style.color = "#222";
			button.innerText = "Party Over";
			button.style["background"] = "#0A8DAB";
        // color of the button should be "#0A8DAB" (bonus!)
    } else {
      partyTime = -1;
			button.style.color = "#fff";
			button.innerText = "Party Time";
			button.style["background"] = "#222";
        // text in the button should read "PARTY TIME!"
        // color of the button should be "#222" (bonus!)
    }
};

var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelector.value;
	console.log("in wakeUpEvent: " + wakeUpTime);
};

var lunchTimeEvent = function(){
	lunchTime = lunchTimeSelector.value;
	console.log("in lunchTimeEvent: " + lunchTime);
};

var napTimeEvent = function(){
	napTime = napTimeSelector.value;
		console.log("in napTimeEvent: " + napTime);
};

var bedTimeEvent = function(){
	bedTime = bedTimeSelector.value;
	console.log("in bedTimeEvent: " + bedTime);
};

var button = document.getElementById("partyTimeButton");
button.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener('change', lunchTimeEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
napTimeSelector.addEventListener('change', napTimeEvent);

var bedTimeSelector = document.getElementById("bedTimeSelector");
bedTimeSelector.addEventListener('change', bedTimeEvent);

partyEvent();
updateClock();
setInterval(updateClock, 1000);



