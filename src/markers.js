/** @import {ElementSize} from "./types" */
/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let ctx;

const LINE_WIDTH = 1;
const LINE_CAP = "round";

/**
 * Sets up the website canvas properly and adds event listeners
 */
function init() {
    // @ts-ignore
    canvas = document.getElementById("markers");
    // @ts-ignore
    ctx = canvas.getContext("2d");

    applyCanvasStyle();

}

function applyCanvasStyle() {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    ctx.strokeStyle = "#FCFF6C";
}

/**
 * 
 * @param {number} frame 
 * @param {number} frameCount 
 */
function drawMarker(frame, frameCount) {
    const x = Math.round(frame / (frameCount - 1) * canvas.width);
    ctx.fillRect(x, 0, 2, canvas.height);
}


/**
 * 
 * @param {number[]} frames 
 * @param {number} frameCount 
 */
function redraw(frames, frameCount) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const frame of frames) {
        const x = Math.round((frame / (frameCount - 1)) * (canvas.width - 1));
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, canvas.height);
        ctx.stroke();
    }
}

/**
 * 
 * @param {ElementSize} size 
 */
function setCanvasSize(size) {
    canvas.width = size.width;
    // canvas.style.width = size.width + "px";
    applyCanvasStyle();
}
export default {init, redraw, drawMarker, setCanvasSize};