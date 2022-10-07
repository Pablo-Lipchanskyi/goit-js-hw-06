const fontSizeEl = document.querySelector("#font-size-control");
const sizedTextEl = document.querySelector("#text");
const textCont = sizedTextEl.textContent;
sizedTextEl.style.fontSize = `${fontSizeEl.value}px`;

function onInputChange() {
    const fontSizeRange = Number(fontSizeEl.value);
    sizedTextEl.style.fontSize = `${fontSizeRange}px`;
}
fontSizeEl.addEventListener('input', onInputChange);