
var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
var response = prompt(promptQuestion);
//console.log (response);
//var reflected = response;
//var textColor  = response;
var backgroundColor;
//var textSize  = response;
//var alertMessage  = response;


function addLogicBelow (response){

if (response === "steak") {
    //alertMessage = "Excellent!"
    //reflected = "excellent choice! - Check the schedule below to make sure you are here on the right day!"
    //textSize = "xx-large"
    backgroundColor = "aqua"
} else if (response === "hamburgers") {
    //console.log = (response)
    //alertMessage = "Check out page for better options!"
    //reflected = "You should try steak - Be sure to check schedule below!";
    //textColor = "#00FF00";
    backgroundColor = "blue"
    
}else {
    //alertMessage = "Check out page for better options!"
    //reflected = "Did you misspell steak? If not, look below for our meal specials!"
    //textColor = "#FF0000";
    backgroundColor = "black";
}

    document.getElementById('response').style.backgroundColor = backgroundColor;
}

addLogicBelow (response);

//alert(alertMessage);
// element.innerText = reflected;
// element.style.color = textColor;
// element.style.backgroundColor = backgroundColor;
// element.style.textSize - textSize;