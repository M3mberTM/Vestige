import type { ElementSize } from "./types";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

const LINE_WIDTH = 1;
const LINE_CAP = "round";

/**
 * Sets up the website canvas properly and adds event listeners
 */
function init() {
    canvas = document.getElementById("markers") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    applyCanvasStyle();

}

function applyCanvasStyle() {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    ctx.strokeStyle = "#FCFF6C";
}

function drawMarker(frame: number, frameCount: number) {
    const x = Math.round(frame / (frameCount - 1) * canvas.width);
    ctx.fillRect(x, 0, 2, canvas.height);
}


function redrawMarkers(frames: number[], frameCount: number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const frame of frames) {
        const x = Math.round((frame / (frameCount - 1)) * (canvas.width - 1));
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, canvas.height);
        ctx.stroke();
    }
}

function setCanvasSize(size: ElementSize) {
    canvas.width = size.width;
    applyCanvasStyle();
}
export default {init, redrawMarkers, drawMarker, setCanvasSize};