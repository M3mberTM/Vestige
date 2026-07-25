import canvas from "./canvas.js";

/** @type {HTMLInputElement} */
let colorInput;
/** @type {HTMLButtonElement} */
let clearBtn;
/** @type {HTMLDivElement} */
let colorBtn;
/** @type {HTMLDivElement} */
let colorPreview;

function init() {
    // @ts-ignore
    colorInput = document.getElementById("colorPicker");
    // @ts-ignore
    clearBtn = document.getElementById("clearCanvasBtn");
    // @ts-ignore
    colorBtn = document.getElementById("colorBtn");
    // @ts-ignore
    colorPreview = document.getElementById("colorPreview");

    colorInput.addEventListener("input", onColorInputChange);
    clearBtn.addEventListener("click", onClearBtnClick);
    colorBtn.addEventListener("click", onColorBtnClick);

}

function onColorBtnClick() {
    colorInput.click();
}

function onClearBtnClick() {
    canvas.clearCanvas();
}

function onColorInputChange() {
    canvas.setColor(colorInput.value);
    colorPreview.style.backgroundColor = colorInput.value;
}

export default { init };