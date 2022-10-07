const inputNameRef = document.querySelector("#validation-input");

function outOfFocus(event) {
    inputNameRef.classList.remove(`valid`);
    inputNameRef.classList.remove(`invalid`);
    if ( event.currentTarget.value.length === Number(inputNameRef.dataset.length)) {
        inputNameRef.classList.add(`valid`)
    } else {
        inputNameRef.classList.add(`invalid`);
    }
}
inputNameRef.addEventListener("blur", outOfFocus);