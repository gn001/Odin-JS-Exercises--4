function helloWorld () {
	print("Hello World!");
}

function repeatString () {
	let string = "Repeat me! ";
	for (let i = 0; i < 3; i++) {
	console.log(string);
    console.log(i);
	}
}

function reverseString () {
	forwardString = prompt();
	newString ="";
	for (let i = forwardString.length - 1; i >= 0; < i--) {
		newString += forwardString[i];
	}
	console.log(newString);
}

function removeFromArray () {
	let myArray = ["This","is","an","array"]
	console.log(myArray);
	let popNum = prompt(); //print the current array
	myArray.splice(popNum,1); //at pos popNum, remove 1 item
	console.log(myArray); //print new array with 1 index item gone.
}

function sumAll () {
	let numberA = parseInt(prompt()); //prompt user for first number
	let numberB = parseInt(prompt()); //prompt user for second number
	let result = numberA; //initialise a result variable, set it to numA's initial value
	for (;numberA < numberB; numberA++) { //while A is less than B, do the thing, and increase A by 1 each time
		result += numberA; //add whatever numA is to the result variable
		console.log(result); //print the result on each loop
	}
}

function leapYears () {
	let userGivenYear = parseInt(prompt("Give me a year and I'll check if it's a leap year")); // ask user for year, covnert to integer
	if (userGivenYear % 4 == 0) { //check if that year is divisible by 4, if it is:
		console.log (`Yes. ${userGivenYear} is a leap year!`) //tell the user that their year is a leap year
	}
		else { console.log('nah')} //if not, just say nah.
}