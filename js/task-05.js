const nameInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

function checkTextArea(event) {
    if (nameInputEl.textContent = "") {
        textOutputEl.textContent = "Anonimous";
    } else {
        textOutputEl.textContent = event.currentTarget.value;
    }
}
nameInputEl.addEventListener("input", checkTextArea);