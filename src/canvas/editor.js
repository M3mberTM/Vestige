import annotations from "../annotations";
import geometry from "./geometry";
import rendering from "./renderer";
import video from "../video";
import { TOOLS } from "../types";
/** @import {Stroke, ElementSize, HexColor, DrawingTool, TextDrawing} from "../types" */

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

    rendering.applyCanvasStyle(ctx);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseOut);
    canvas.addEventListener("mousemove", onMouseMove);
    textToolInput.addEventListener("keydown", onTextKeyDown);
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
 * @param {MouseEvent} e 
 */
function createTextBox(e) {
    const [x,y] = geometry.getCanvasPosition(e, canvas);
    textToolInput.style.left = `${x}px`;
    textToolInput.style.top = `${y}px`;
    textToolInput.style.display = "block";
    requestAnimationFrame(() => textToolInput.focus());
    const [relativeX, relativeY] = geometry.pixelsToPoint(x, y, getCanvasSize());
    console.log(document.activeElement);
    currentText = {
        type: "text",
        text: "",
        color: color,
        x: relativeX,
        y: relativeY
    }
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

function redrawCurrentFrame() {
    const frame = video.getCurrentFrame();
    const drawings = annotations.getFrameAnnotations(frame);
    rendering.renderFrame(ctx, drawings, getCanvasSize());
}

/**
 * 
 * @param {number} frame 
 */
function redrawFrame(frame) {
    const drawings = annotations.getFrameAnnotations(frame);
    rendering.renderFrame(ctx, drawings, getCanvasSize());
}

/**
 * 
 * @returns {ElementSize} canvas size
 */
function getCanvasSize() {
    return {
        width: canvas.width,
        height: canvas.height
    }
}
/**
 * Removes the last drawing from the canvas
 */
function undoStroke() {
    const currentFrame = video.getCurrentFrame();
    annotations.removeLastAnnotation(currentFrame);
    redrawCurrentFrame();
}

function deleteCanvas() {
    const currentFrame = video.getCurrentFrame();
    annotations.removeFrameAnnotations(currentFrame);
    redrawCurrentFrame();
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
    const [x, y] = geometry.getCanvasPosition(e, canvas);
    ctx.moveTo(x, y);
    draw(e);
}

/**
 * Responsible for the drawing process. Draws on the canvas
 * @param {MouseEvent} e 
 */
function draw(e) {
    if (!drawing) return;

    const [x,y] = geometry.getCanvasPosition(e, canvas)

    if (!currentStroke) return; 
    currentStroke.points.push(geometry.pixelsToPoint(x, y, getCanvasSize()));
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
}

/**
 * Removes everything that is on the canvas. Records the clear operation so that undo can be used
 */
function clearCanvas() {
    const currentFrame = video.getCurrentFrame();
    annotations.addFrameAnnotation(currentFrame, { type: "clear"});
    redrawCurrentFrame();
}

/**
 * @param {boolean} value 
 */
function setCanDraw(value) {
    canDraw = value;
}

/**
 * @param {HexColor} newColor 
 */
function setColor(newColor) {
    color = newColor;
    ctx.strokeStyle = color;
}

/**
 * @param {ElementSize} size 
 */
function setCanvasSize(size) {
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.style.width = size.width + "px";
    canvas.style.height = size.height + "px";
    rendering.applyCanvasStyle(ctx);
}

/**
 * @param {TextDrawing} textDrawing 
 */
function type(textDrawing) { 
    const currentFrame = video.getCurrentFrame();
    annotations.addFrameAnnotation(currentFrame, textDrawing);
    redrawCurrentFrame();

}


export default {init, clearCanvas, setColor, setCanDraw, setCanvasSize, undoStroke,
    deleteCanvas, switchTool, redrawFrame};