const nameInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

function checkTextArea(event) {
    event.preventDefault();
    if (nameInputEl.value = "") {
        textOutputEl.textContent = "Anonymous"
    } else {
        textOutputEl.textContent = nameInputEl.value
    }
}
nameInputEl.addEventListener("input", checkTextArea);