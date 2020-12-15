
var promptQuestion = "For a BBQ, would you chose Steak, Hamburgers, or something different?";
var response = prompt(promptQuestion);
var Color = response;

function addLogicBelow (response) {

    if (response === "steak") {
        color = "aqua"
    } else if (response === "hamburgers") {
        color = "blue"
    } else {
        color = "black";
    }
}
    document.getElementById("content").style.backgroundColor = color;

addLogicBelow (response);

//alert(alertMessage);
// element.innerText = reflected;
// element.style.color = textColor;
// element.style.backgroundColor = backgroundColor;
// element.style.textSize - textSize;