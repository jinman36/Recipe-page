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

//login promt/ console log/ and print response in header
var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
var response = prompt(promptQuestion);
console.log (response);
var reflected;
var textColor;
var backgroundColor;
var textSize;
var alertMessage;

if (response === "steak") {
   // alertMessage = "Excellent!"
    reflected = "excellent choice! - Check the schedule below to make sure you are here on the right day!"
    textSize = "xx-large"
    backgroundColor = "aqua"
} else if (response === "hamburgers") {
   // console.log = (response)
   // alertMessage = "Check out page for better options!"
    reflected = "You should try steak - Be sure to check schedule below!";
    textColor = "#00FF00";
    backgroundColor = "blue"
    
}else {
   // alertMessage = "Check out page for better options!"
    reflected = "Did you misspell steak? If not, look below for our meal specials!"
    textColor = "#FF0000";
    backgroundColor = "black";
}

var element = document.getElementById('response')

//alert(alertMessage);
element.innerText = reflected;
element.style.color = textColor;
element.style.backgroundColor = backgroundColor;
element.style.textSize - textSize;


//radio button answer console log/ change color of schedule
//var correctAnswer = document.getElementById("Movie Night");

//if (correctAnswer.checked){
//    alert("Correct");
//}
//else {}sta

var today = new Date ();
var hourNow = today.getHours();
var greetings;

if (hourNow > 18) {
    greetings - 'Salamat Malam!';
} else if (hourNow > 12) {
    greetings = 'Selamat Sore!';
} else if (hourNow > 0) {
    greetings = 'Selamat Pagi!';
} else {
    greetings = 'Selamat!';
}

document.write('<h3>' + greetings + '</h3>');