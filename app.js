var translateButton = document.querySelector("#btn-translate");
var textArea = document.querySelector("#txt-area");

function eventListener(){
    console.log("clicked");
    console.log(textArea.value);
}

translateButton.addEventListener("click", eventListener);
