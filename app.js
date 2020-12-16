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
addLogicBelow (response);




