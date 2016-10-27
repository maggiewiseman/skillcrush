
//variable to get the actual time
	var time = new Date().getHours();
	var morning = 12;
	var afternoon = 17;
	var evening = 21;
	var partyTime = 0;
	var wakeUpTime = 8;
	var napTime = 13;
	var lunchTime = 12;

function getMessage() {
	//variable to keep element where message appears
	var messageSpot = document.getElementById(
		"timeEvent");

	//variable to keep element where image appears
	var imageSpot = document.getElementById("lolcat");

	console.log("the time is:" + time);

	//set default message and image 
	messageSpot.innerText = "Good Day!";
	imageSpot.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if(time == partyTime){
			messageSpot.innerText = "Iz Partee Time!";
			imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else {
		if (time == wakeUpTime) {
			messageSpot.innerText = "Wake Up!";
			imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		} else if(time < morning) {
			messageSpot.innerText = "Good Morning!";
			imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		} else if (time == lunchTime ) {
			messageSpot.innerText = "Iz lunch time?";
			imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		}else if (time == napTime) {
			messageSpot.innerText = "Iz nap time?";
			imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		}else if (time < afternoon) {
			messageSpot.innerText = "Good afternoon!"
			imageSpot.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";	
		}else if (time < evening) {
			messageSpot.innerText = "Good Evening";
			imageSpot.src = "../../img/cats-74a-small.jpg";
		} else {
			messageSpot.innerText = "Good Night!";
			image = "../../img/bedtimecat.jpg";
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
		console.log("in napTimeEvent");

	
};

var button = document.getElementById("partyTimeButton");
button.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener('change', lunchTimeEvent);

var wakeUpTimeSelector = document.getElementById("napTimeSelector");
napTimeSelector.addEventListener('change', napTimeEvent);

partyEvent();
updateClock();
setInterval(updateClock, 1000);



