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


var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
var response = prompt(promptQuestion);
console.log (response);
var reflected;
var color;
var alertMessage;

if (response === "steak") {
    alertMessage = "Excellent!"
    reflected = "excellent choice!"
} else if (response === "hamburgers") {
    console.log = (response)
    alertMessage = "Check out page for better options!"
    reflected = "You should try steak";
    color = "#00FF00";
    
}else {
    alertMessage = "Check out page for better options!"
    reflected = "Did you misspell steak?"
    color = "#FF0000";
}


var element = document.getElementById('response')

alert(alertMessage);

element.innerText = reflected;
element.style.color = color;

