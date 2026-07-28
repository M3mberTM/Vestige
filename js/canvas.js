import drawings from "./drawings";
import video from "./video";
/** @import {Stroke, ElementSize, HexColor, Point} from "./types" */

/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let ctx;
let canDraw = false;
let drawing = false;
/** @type {Stroke | null} */
let currentStroke = null;
let color = "#000000";
let canvasWidth = 0;
let canvasHeight = 0;

const LINE_WIDTH = 3;
const LINE_CAP = "round";

/**
 * Sets up the website canvas properly and adds event listeners
 */
function init() {
    // @ts-ignore
    canvas = document.getElementById("canvas");
    // @ts-ignore
    ctx = canvas.getContext("2d");

    applyCanvasStyle();

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseout", endDraw);
    canvas.addEventListener("mousemove", draw);
}

/**
 * Converts point to pixels representing the x and y coordinates
 * @param {Point} point 
 * @returns {[number, number]} x, y relative to the canvas
 */
function pointToPixels(point) {
    return [point[0] * canvasWidth, point[1] * canvasHeight];
}

/**
 * 
 * @param {number} x x coordinate of the point relative to the canvas
 * @param {number} y y coordinate of the point relative to the canvas
 * @returns {Point}
 */
function pixelsToPoint(x, y) {
    return [x / canvasWidth, y / canvasHeight];
}

function applyCanvasStyle() {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    ctx.strokeStyle = color;
}

/**
 * Removes the last stroke from the canvas
 */
function undoStroke() {

    const currentFrame = video.getCurrentFrame();
    drawings.removeLastStroke(currentFrame);
    redrawFrameCanvas(currentFrame);
}

/**
 * Draws all the drawings a user did on a specific frame
 * @param {number} frame 
 */
export function redrawFrameCanvas(frame) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const strokes = drawings.getFrameStrokes(frame);
    for (const stroke of strokes) {
        drawStroke(stroke);
    }

    ctx.beginPath();
}

/**
 * Draws a singular stroke on the current canvas
 * @param {Stroke} stroke 
 */
function drawStroke(stroke) {
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;

    ctx.beginPath();

    for (let i = 0; i < stroke.points.length; i++) {
        const p = pointToPixels(stroke.points[i]);

        if (i === 0) {
            ctx.moveTo(p[0], p[1]);
        } else {
            ctx.lineTo(p[0], p[1]);
            ctx.stroke();
        }
    }
    applyCanvasStyle();
}

/**
 * 
 * @param {MouseEvent} e 
 * @returns {[number, number]} x,y position relative to canvas
 */
function getCanvasPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top]
}

/**
 * Sets up the drawing process
 * @param {MouseEvent} e 
 */
function startDraw(e) {
    if (!canDraw) return;
    drawing = true;
    currentStroke = {
        color: color,
        points: [],
    };
    ctx.beginPath();
    const [x, y] = getCanvasPosition(e);
    ctx.moveTo(x, y);
    draw(e);
}

/**
 * Responsible for the drawing process. Draws on the canvas
 * @param {MouseEvent} e 
 */
function draw(e) {
    if (!canDraw || !drawing) return;

    const [x,y] = getCanvasPosition(e)

    if (!currentStroke) return; 
    currentStroke.points.push(pixelsToPoint(x, y));
    ctx.lineTo(x, y);
    ctx.stroke();
}

/**
 * Ends the drawing process
 */
function endDraw() {
    drawing = false;
    if (currentStroke) {
        const currentFrame = video.getCurrentFrame();
        drawings.addFrameStroke(currentFrame, currentStroke);
    }
    currentStroke = null;
    ctx.closePath();
}

/**
 * Removes everything that is on the canvas. Records the clear operation so that undo can be used
 */
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentFrame = video.getCurrentFrame();
    drawings.addFrameStroke(currentFrame, { color: color, points: []});
}

/**
 * 
 * @param {boolean} value 
 */
function setCanDraw(value) { canDraw = value; }

/**
 * 
 * @param {HexColor} newColor 
 */
function setColor(newColor) {
    color = newColor;
    ctx.strokeStyle = color;
}

/**
 * 
 * @param {ElementSize} size 
 */
function setCanvasSize(size) {
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.style.width = size.width + "px";
    canvas.style.height = size.height + "px";
    canvasWidth = size.width;
    canvasHeight = size.height;
    applyCanvasStyle();
}

export default {init, clearCanvas, setColor, setCanDraw, redrawFrameCanvas, setCanvasSize, undoStroke};