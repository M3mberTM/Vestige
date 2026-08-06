import annotations from "../annotations";
import geometry from "./geometry";
import rendering from "./renderer";
import video from "../video";
import { Tool } from "../types";
import type { Stroke, ElementSize, HexColor, TextDrawing } from "../types";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let textToolInput: HTMLInputElement;


let canDraw = false;
let drawing = false;

let currentStroke: Stroke | null = null;
let currentText: TextDrawing | null = null;
let color: HexColor = "#000000";
let currentTool = Tool.BRUSH;

/**
 * Sets up the website canvas properly and adds event listeners
 */
function init() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    textToolInput = document.getElementById("textTool") as HTMLInputElement;

    rendering.applyCanvasStyle(ctx);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseOut);
    canvas.addEventListener("mousemove", onMouseMove);
    textToolInput.addEventListener("keydown", onTextKeyDown);
}


function onTextKeyDown(e: KeyboardEvent) {
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

function onMouseMove(e: MouseEvent) {
    if (!canDraw) return;
    if (currentTool === Tool.BRUSH) {
        draw(e);
    }
}

function onMouseOut() {
    if (!canDraw) return;
    if (currentTool === Tool.BRUSH) {
        endDraw();
    }
}

function onMouseUp() {
    if (!canDraw) return;
    if (currentTool === Tool.BRUSH) {
        endDraw();
    }
}

function onMouseDown(e: MouseEvent) {
    if (!canDraw) return;
    if (currentTool === Tool.BRUSH) {
        startDraw(e);
    }
    if (currentTool === Tool.TEXT) {
        createTextBox(e);
    }
}

function createTextBox(e: MouseEvent) {
    const [x,y] = geometry.getCanvasPosition(e, canvas);
    textToolInput.style.left = `${x}px`;
    textToolInput.style.top = `${y}px`;
    textToolInput.style.display = "block";
    requestAnimationFrame(() => textToolInput.focus());
    const [relativeX, relativeY] = geometry.pixelsToPoint(x, y, getCanvasSize());
    currentText = {
        type: "text",
        text: "",
        color: color,
        x: relativeX,
        y: relativeY
    }
}

function switchTool(tool: Tool) {
    currentTool = tool;
    if (currentTool !== Tool.TEXT) {
        textToolInput.style.display = "none";
        textToolInput.value = "";
    }
}

function redrawCurrentFrame() {
    const frame = video.getCurrentFrame();
    const drawings = annotations.getFrameAnnotations(frame);
    rendering.clearCanvas(ctx, getCanvasSize());
    rendering.renderFrame(ctx, drawings, getCanvasSize());
}

function redrawFrame(frame: number) {
    const drawings = annotations.getFrameAnnotations(frame);
    rendering.clearCanvas(ctx, getCanvasSize());
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
 */
function startDraw(e: MouseEvent) {
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
 */
function draw(e: MouseEvent) {
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

function setCanDraw(value: boolean) {
    canDraw = value;
}

function setColor(newColor: HexColor) {
    color = newColor;
    ctx.strokeStyle = color;
}

function setCanvasSize(size: ElementSize) {
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.style.width = size.width + "px";
    canvas.style.height = size.height + "px";
    ctx.strokeStyle = color;
    rendering.applyCanvasStyle(ctx);
}

function type(textDrawing: TextDrawing) { 
    const currentFrame = video.getCurrentFrame();
    annotations.addFrameAnnotation(currentFrame, textDrawing);
    redrawCurrentFrame();

}


export default {init, clearCanvas, setColor, setCanDraw, setCanvasSize, undoStroke,
    deleteCanvas, switchTool, redrawFrame};