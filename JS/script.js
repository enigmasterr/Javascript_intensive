function myFirstApp(name, age) {
	alert("Hello, my name is " + name + ". This is my first program!");
	function showSkills() {
		let skills = [
			"I know on base level HTML/CSS.",
			"I can create console applications on Python.",
			"I can create console applications on C++"
		];

		for (let i = 0; i < skills.length; i++) {
			// Я владею HTML <br>
			document.write(skills[i] + "<br>");
		}
	}
	
	showSkills();

	function checkAge(){
		if (age > 18) {
			document.write("You are adult!<br>");
		} else {
			document.write("You are young!<br>");
		}
	}
	
	checkAge();

	function calcPow(num) {
		let p = 1;
		for (let i = 1; i <= num; i++) {
			p = p * num;
		}
		document.write(" Answer " + num + "^2 = " + p + "<br>");
	}

	calcPow(4);
}

myFirstApp("Vadim", 35);