import canvas from "./canvas.js";

/** @type {HTMLInputElement} */
let colorInput;

/** @type {HTMLButtonElement} */
let clearBtn;

function init() {
    // @ts-ignore
    colorInput = document.getElementById("colorPicker");
    // @ts-ignore
    clearBtn = document.getElementById("clearCanvasBtn");

    colorInput.addEventListener("input", onColorInputChange);
    clearBtn.addEventListener("click", onClearBtnClick);

}

function onClearBtnClick() {
    canvas.clearCanvas();
}

function onColorInputChange() {
    canvas.setColor(colorInput.value);
}

export default { init };