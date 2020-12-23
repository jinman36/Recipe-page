//var msg = 'Sign up to recieve our newsletter for 10% off!';

//function updateMessage(msg) {
//    var el = document.getElementById('message');
//   el.textContent=msg;
//}

//updateMessage(msg);

//var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
//var response = prompt(promptQuestion);
//var color;

//function addLogicBelow (response) {
    
//    response = response.toLowerCase()
    
//    if (response === "steak") {
//        color = "aqua";
//    } else if (response === "hamburgers") {
//        color = "blue";
//    } else {
//        color = " rgba(0,212,255,1) 100%)";
//    }
//    document.getElementById("content").style.backgroundColor = color;
    
//}

//addLogicBelow (response);



//function getUserPrompt (message){
//    var userInput = prompt(message);
 //   return userInput;

//}

//function validateUserPassword() {
//    var storedPassword = "yes";
    
 //   do {
 //       var passwd = getUserPrompt("Is Twizted BBQ the Best?");
//    } while(passwd !== storedPassword);

//}

//validateUserPassword();


function getUserRating (m){
   var promptQuestion = "How Many Stars Do We Rate?"
   var response = prompt(promptQuestion);
   myMessage(response);
   return response;

}

getUserRating();



function myMessage(response) {
   var alertMessage = "We give you " + response + " stars too!";

    if (response === "")

    alertMessage = "we still give you 5 stars!";

    alert(alertMessage);

    document.write(alertMessage);
    
}

//function addHamburgersToDocument() {
//   var addHamburgersToDocument = prompt("the real question is: how many steaks would you like?");
    //1. declare the index variable
    //2. set loop condition
    //3. index incrementor
//    for (var i = 0; i < addHamburgersToDocument; i++) {
//        console.log(i);
//        document.write('<img src="Food Pictures/BBQ steak.jpg">') ;

//   }
//}


//addHamburgersToDocument();

//function testValidate() {
//    var a = 42 {
//    console.log(i);
//    }
//}

//testValidate()

var today = new Date ();
var hourNow = today.getHours();
var greetings;


function timedGreeting(){
if (hourNow > 18) {
    greetings - 'Salamat Malam!';
} else if (hourNow > 12) {
    greetings = 'Selamat Sore!';
} else if (hourNow > 0) {
    greetings = 'Selamat Pagi!';
} else {
    greetings = 'Selamat!';
}
}

timedGreeting()