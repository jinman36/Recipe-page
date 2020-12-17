//var msg = 'Sign up to recieve our newsletter for 10% off!';

//function updateMessage(msg) {
//    var el = document.getElementById('message');
//   el.textContent=msg;
//}

//updateMessage(msg);

var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
var response = prompt(promptQuestion);
var color;

function addLogicBelow (response) {

    response = response.toLowerCase()

    if (response === "steak") {
        color = "aqua";
    } else if (response === "hamburgers") {
        color = "blue";
    } else {
        color = "green";
    }
    document.getElementById("content").style.backgroundColor = color;
   
}

function getUserPrompt (message){
    var userInput = prompt(message);
    return userInput;

}

function validateUserPassword() {
    var storedPassword = "twizted bbq";
    
    do {
        var passwd = getUserPrompt("Wheres the best BBQ?");
    } while(passwd !== storedPassword);

}
validateUserPassword();

function getUserRating (m){
    var promptQuestion = "How Many Stars Should We Get?"
    var response = prompt(promptQuestion);
    myMessage(response);
    return response;
}

var addhamburgers = getUserPrompt("How many stars will you give us?");
    for (var i = 0; i <= addHamburgers; i++) {
        console.log();
        
    }

addHamburgers();
addLogicBelow (response);