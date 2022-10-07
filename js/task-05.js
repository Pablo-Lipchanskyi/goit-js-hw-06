const nameInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

function checkTextArea(event) {
    if ( event.currentTarget.value !== "") {
        textOutputEl.textContent = event.currentTarget.value;
    } else {
        textOutputEl.textContent = "Anonymous";
    }
}
nameInputEl.addEventListener("input", checkTextArea);

