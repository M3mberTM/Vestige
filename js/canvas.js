import annotations from "./annotations";
import video from "./video";
import { TOOLS } from "./types";
/** @import {Stroke, ElementSize, HexColor, Point, DrawingTool, TextDrawing} from "./types" */

/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let ctx;
/** @type {HTMLInputElement} */
let textToolInput;


let canDraw = false;
let drawing = false;
/** @type {Stroke | null} */
let currentStroke = null;
/** @type {TextDrawing | null} */
let currentText = null;
let color = "#000000";
let canvasWidth = 0;
let canvasHeight = 0;

/** @type {DrawingTool} */
let currentTool = TOOLS.BRUSH;

const LINE_WIDTH = 3;
const LINE_CAP = "round";

/** * @type {(() => void) | null} */
let onDrawingsChangedCallback = null;

/**
 * Sets up the website canvas properly and adds event listeners
 */
function init() {
    // @ts-ignore
    canvas = document.getElementById("canvas");
    // @ts-ignore
    ctx = canvas.getContext("2d");
    // @ts-ignore
    textToolInput = document.getElementById("textTool");


    applyCanvasStyle();

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseOut);
    canvas.addEventListener("mousemove", onMouseMove);
    textToolInput.addEventListener("keydown", onTextKeyDown);
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
 * @param {KeyboardEvent} e 
 */
function onTextKeyDown(e) {
    e.stopPropagation();
    if (e.code === "Enter") {
        if (!currentText) return;
        const textDrawing = {...currentText, text: textToolInput.value};
        type(textDrawing);
        textToolInput.style.display = "none";
        textToolInput.value = "";
        currentText = null;
    }

}
/**
 * 
 * @param {MouseEvent} e 
 */
function onMouseMove(e) {
    if (!canDraw) return;
    if (currentTool === TOOLS.BRUSH) {
        draw(e);
    }
}
function onMouseOut() {
    if (!canDraw) return;
    if (currentTool === TOOLS.BRUSH) {
        endDraw();
    }
}

function onMouseUp() {
    if (!canDraw) return;
    if (currentTool === TOOLS.BRUSH) {
        endDraw();
    }
}
/**
 * 
 * @param {MouseEvent} e 
 */
function onMouseDown(e) {
    if (!canDraw) return;
    if (currentTool === TOOLS.BRUSH) {
        startDraw(e);
    }
    if (currentTool === TOOLS.TEXT) {
        createTextBox(e);
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function createTextBox(e) {
    const [x,y] = getCanvasPosition(e);
    textToolInput.style.left = `${x}px`;
    textToolInput.style.top = `${y}px`;
    textToolInput.style.display = "block";
    requestAnimationFrame(() => textToolInput.focus());
    // textToolInput.focus();
    console.log(document.activeElement);
    currentText = {
        type: "text",
        text: "",
        color: color,
        x,
        y
    }
}

/**
 * 
 * @param {() => void} callback 
 */
function setOnDrawingsChanged(callback) {
    onDrawingsChangedCallback = callback;
}

function onDrawingsChanged() {
    onDrawingsChangedCallback?.();
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
 * Removes the last drawing from the canvas
 */
function undoStroke() {
    const currentFrame = video.getCurrentFrame();
    annotations.removeLastAnnotation(currentFrame);
    redrawFrameCanvas(currentFrame);
}

function deleteCanvas() {
    const currentFrame = video.getCurrentFrame();
    annotations.removeFrameAnnotations(currentFrame);
    redrawFrameCanvas(currentFrame);
}

/**
 * Draws all the drawings a user did on a specific frame
 * @param {number} frame 
 */
export function redrawFrameCanvas(frame) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const drawings = annotations.getFrameAnnotations(frame);
    for (const drawing of drawings) {
        switch (drawing.type) {
            case "stroke":
                drawStroke(drawing); 
                break;
            case "clear":
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                break;
            case "text":
                drawText(drawing);
                break;
            default:
                break;
        }
    }
    onDrawingsChanged();
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
    drawing = true;
    currentStroke = {
        type: "stroke",
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
    if (!drawing) return;

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
        annotations.addFrameAnnotation(currentFrame, currentStroke);
    }
    currentStroke = null;
    ctx.closePath();
    onDrawingsChanged();
}

/**
 * Removes everything that is on the canvas. Records the clear operation so that undo can be used
 */
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentFrame = video.getCurrentFrame();
    annotations.addFrameAnnotation(currentFrame, { type: "clear"});
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

/**
 * 
 * @param {TextDrawing} textDrawing 
 */
function type(textDrawing) {
    drawText(textDrawing);
    const currentFrame = video.getCurrentFrame();
    annotations.addFrameAnnotation(currentFrame, textDrawing);
    onDrawingsChanged();

}
/**
 * 
 * @param {TextDrawing} textDrawing 
 */
function drawText(textDrawing) {
    ctx.font = "17px Arial";
    ctx.fillStyle = textDrawing.color;
    ctx.fillText(textDrawing.text, textDrawing.x, textDrawing.y);
}

/**
 * 
 * @param {DrawingTool} tool 
 */
function switchTool(tool) {
    currentTool = tool;
    if (currentTool !== TOOLS.TEXT) {
        textToolInput.style.display = "none";
        textToolInput.value = "";
    }
}

export default {init, clearCanvas, setColor, setCanDraw, redrawFrameCanvas, setCanvasSize, undoStroke,
    setOnDrawingsChanged, deleteCanvas, drawText, switchTool};