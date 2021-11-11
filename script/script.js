var Reg = document.getElementById('Registration');

Reg.onclick = function Registration() {
	prompt("Enter your email")
};

var CallUs = document.getElementById('CallUs');

CallUs.onclick = function CallUs() {
	confirm('Our number is 49-49-49')
}

let Clicks = 0;

var ClickButton = document.getElementById('Click');

ClickButton.onclick = function Click() {
	if (Clicks == 0) {
		alert("Don't click OK")
		Clicks += 1
	}
	if (Clicks == 1) {
		alert("I said don't click!")
		Clicks += 1
	}
	if (Clicks == 2) {
		alert("STOP IT")
		Clicks += 1
	}
	if (Clicks == 3) {
		alert("ARRGHH")
		Clicks += 1
	}
	if (Clicks == 4) {
		alert("JUST STOP")
		Clicks += 1
	}
	if (Clicks == 5) {
		alert("....")
		Clicks += 1
	}
	if (Clicks == 6) {
		alert("You know what?")
		Clicks += 1
	}
	if (Clicks == 7) {
		alert("i will pretend that nothing happened")
		Clicks += 1
	}
	if (Clicks == 8) {
		alert("okay i understand")
		Clicks += 1
	}
	if (Clicks == 9) {
		alert("here we go again")
		Clicks == 0 
	}
}

