import canvas from "./canvas/editor.js";
import { Tool } from "./types";

/** @type {HTMLInputElement} */
let colorInput;
/** @type {HTMLButtonElement} */
let clearBtn;
/** @type {HTMLButtonElement} */
let deleteBtn;
/** @type {HTMLButtonElement} */
let brushBtn;
/** @type {HTMLButtonElement} */
let textBtn;
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
    // @ts-ignore
    deleteBtn = document.getElementById("deleteCanvasBtn");
    // @ts-ignore
    brushBtn = document.getElementById("brushBtn");
    // @ts-ignore
    textBtn = document.getElementById("textBtn");

    colorInput.addEventListener("input", onColorInputChange);
    clearBtn.addEventListener("click", onClearBtnClick);
    textBtn.addEventListener("click", onTextBtnClick);
    brushBtn.addEventListener("click", onBrushBtnClick);
    colorBtn.addEventListener("click", onColorBtnClick);
    deleteBtn.addEventListener("click", onDeleteBtnClick);

}

function onBrushBtnClick() {
    canvas.switchTool(Tool.BRUSH);
    brushBtn.classList.add("active");
    textBtn.classList.remove("active");
}

function onTextBtnClick() {
    canvas.switchTool(Tool.TEXT);
    textBtn.classList.add("active");
    brushBtn.classList.remove("active");
}
function onDeleteBtnClick() {
    canvas.deleteCanvas();
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