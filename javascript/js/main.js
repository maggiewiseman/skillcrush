
//variable to get the actual time
	var time = new Date().getHours();
	var partyTime = time;

	
function getMessage() {
	//variable to keep element where message appears
	var messageSpot = document.getElementById(
		"timeEvent");

	//variable to keep element where image appears
	var imageSpot = document.getElementById("lolcat");

	console.log("the time is:" + time);

	//set default message and image 
	messageSpot.innerText = "Good Day!";
	imageSpot.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"

	time =11;

	if (time <= 8) {
		lolcatTime = "wakeUp";
		messageSpot.innerText = "Wake Up!";
		imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
	} else if(time < 12) {
		messageSpot.innerText = "Good Morning!";
		imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"
	} else if (time === 12 ) {
		messageSpot.innerText = "Iz lunch time?";
		imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"
	}else if (time < 17) {
		messageSpot.innerText = "Is nap time?";
		imageSpot.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"
	} else if (time <= 20) {
		messageSpot.innerText = "Good Evening";
		imageSpot.src = "../../img/cats-74a.jpg"
	} else {
		messageSpot.innerText = "Good Night!";
		image = "../../img/bedtimecat.jpg"
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
		meridian = "PM"
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

updateClock();
setInterval(updateClock, 1000);



var partyEvent = function() {
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours(); 
        
		button.style.color = "#222";
		button.innerText = "Party Over";
		button.style["background"] = "#0A8DAB";
        // color of the button should be "#0A8DAB" (bonus!)
    }
    else
    {
        partyTime = -1;
        var imageSpot = document.getElementById("lolcat");
		imageSpot.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		button.style.color = "#fff";
		button.innerText = "Party Time";
		button.style["background"] = "#222";
        // text in the button should read "PARTY TIME!"
        // color of the button should be "#222" (bonus!)
    }
};

var button = document.getElementById("partyTimeButton");
button.addEventListener("click", partyEvent);

