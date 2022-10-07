let counterValue = document.querySelector("#value");
counterValue.value = 0;
const incremButton = document.querySelector("[data-action=increment]");
const decremButton = document.querySelector("[data-action=decrement]");

incremButton.addEventListener('click', () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
});
decremButton.addEventListener('click', () => {
    counterValue.value += Number(decremButton.textContent);
    counterValue.textContent = String(counterValue.value);
});