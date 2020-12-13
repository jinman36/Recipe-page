//console.log("hello, world");
//console log();

//camel case
//var myVariableName;

//var myVariableName = "hello, world!";

//console.log(myVariableName);

//var order; //walk to coffee shop
//order = "black coffee" ; //pace order

//console.log("Your order of "+ order + " is ready!") //order ready

//console.log(myVariableName);


var promptQuestion = "What is your favorite food to BBQ?";
var response = prompt(promptQuestion);
console.log (response);
var reflected;

if (response === "steak") {
    reflected = "excellent choice!"
} else if (response === "hamburgers") {
    reflected = "You should try steak";
}else {
    reflected = "Did you misspell steak?"

}

var element = document.getElementById('response')

element.innerText = reflected;