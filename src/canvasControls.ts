import canvas from "./canvas/editor.js";
import { Tool } from "./types";

let colorInput: HTMLInputElement;
let clearBtn: HTMLButtonElement;
let deleteBtn: HTMLButtonElement;
let brushBtn: HTMLButtonElement;
let textBtn: HTMLButtonElement;
let colorBtn: HTMLDivElement;
let colorPreview: HTMLDivElement;

function init() {
    colorInput = document.getElementById("colorPicker") as HTMLInputElement;
    clearBtn = document.getElementById("clearCanvasBtn") as HTMLButtonElement;
    colorBtn = document.getElementById("colorBtn") as HTMLDivElement;
    colorPreview = document.getElementById("colorPreview") as HTMLDivElement;
    deleteBtn = document.getElementById("deleteCanvasBtn") as HTMLButtonElement;
    brushBtn = document.getElementById("brushBtn") as HTMLButtonElement;
    textBtn = document.getElementById("textBtn") as HTMLButtonElement;

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