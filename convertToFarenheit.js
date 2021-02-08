function tempConvert() {
let celsius = parseInt(prompt("gimmie a temp in celsius"));  //Ask the user for a temp in celsius, convert to integer
let farenheit = 0; //initialize farenheit variable, set to 0
farenheit = celsius*1.8;//make farenheit variable equal to the celsius variable multiplied by 1.8
farenheit = farenheit+32;//add 32 to the farenheit variable
console.log(`${celsius} celsius is equal to ${farenheit} farenheit`) //print the result in the log
}