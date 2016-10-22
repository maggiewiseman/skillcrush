
function getMessage() {
	var time = new Date().getHours();

	console.log("the time is:" + time);

	var message = "Good Day!";
	var eventMessage = "";

	time = 22;

	if (time < 8) {
		eventMessage = "Wake up!";
	} else if(time < 12) {
		message = "Good Morning!";
	} else if (time === 12 ) {
		eventMessage = "Lunch time!";
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

