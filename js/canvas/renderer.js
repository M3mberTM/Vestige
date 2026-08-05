import geometry from "./geometry";
/** @import {Stroke, TextDrawing, ElementSize, Drawing} from "../types" */

const LINE_WIDTH = 3;
const LINE_CAP = "round";

/**
 * Draws all the drawings a user did on a specific frame
 * @param {CanvasRenderingContext2D} ctx
 * @param {Drawing[]} annotations 
 * @param {ElementSize} canvasSize
 */
function renderFrame(ctx, annotations, canvasSize) { 
    clearCanvas(ctx, canvasSize);
    for (const annotation of annotations) {
        switch (annotation.type) {
            case "stroke":
                drawStroke(ctx, annotation, canvasSize); 
                break;
            case "clear":
                clearCanvas(ctx, canvasSize);
                break;
            case "text":
                drawText(ctx, annotation, canvasSize);
                break;
            default:
                break;
        }
    }
}

/**
 * Clears out all the annotations from the canvas
 * @param {CanvasRenderingContext2D} ctx
 * @param {ElementSize} canvasSize
 */
function clearCanvas(ctx, canvasSize) {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
}
/**
 * Draws a singular stroke on the current canvas
 * @param {CanvasRenderingContext2D} ctx
 * @param {Stroke} stroke 
 * @param {ElementSize} canvasSize
 */
function drawStroke(ctx, stroke, canvasSize) { 
    applyCanvasStyle(ctx);
    ctx.strokeStyle = stroke.color;
    ctx.beginPath();

    for (let i = 0; i < stroke.points.length; i++) {
        const p = geometry.pointToPixels(stroke.points[i], canvasSize);

        if (i === 0) {
            ctx.moveTo(p[0], p[1]);
        } else {
            ctx.lineTo(p[0], p[1]);
            ctx.stroke();
        }
    }
}

/**
 * Draws specific text on the canvas
 * @param {CanvasRenderingContext2D} ctx
 * @param {TextDrawing} textDrawing 
 * @param {ElementSize} canvasSize
 */
function drawText(ctx, textDrawing, canvasSize) { 
    const [x, y] = geometry.pointToPixels([textDrawing.x, textDrawing.y], canvasSize);
    ctx.font = "17px Arial";
    ctx.fillStyle = textDrawing.color;
    ctx.fillText(textDrawing.text, x, y);
}

/**
 * @param {CanvasRenderingContext2D} ctx 
 */
function applyCanvasStyle(ctx) {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
}

export default { renderFrame, drawText, drawStroke, clearCanvas, applyCanvasStyle };