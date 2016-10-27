var messageSpot = document.getElementById(
	"timeEvent");

function getMessage() {
	var time = new Date().getHours();

	console.log("the time is:" + time);

	var message = "Good Day!";


	if (time < 8) {
		message = "Wake up!";
	} else if(time < 12) {
		message = "Good Morning!";
	} else if (time === 12 ) {
		message = "Lunch time!";
	}else if (time <= 17) {
		message = "Good Afternoon!";
	} else if (time <= 20) {
		message = "Good Evening!";
	} else {
		message = "Good Night!";
	}

	return message;

}

console.log(getMessage());
messageSpot.innerHTML = getMessage();
