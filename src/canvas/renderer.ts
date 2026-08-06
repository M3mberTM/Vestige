import geometry from "./geometry";
import type { ElementSize, Stroke, TextDrawing, Drawing, RenderContext } from "../types";

const LINE_WIDTH = 3;
const LINE_CAP = "round";

/**
 * Draws all the drawings a user did on a specific frame
 */
function renderFrame(ctx: RenderContext, annotations: Drawing[], canvasSize: ElementSize) {
    
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
 */
function clearCanvas(ctx: RenderContext, canvasSize: ElementSize) {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
}
/**
 * Draws a singular stroke on the current canvas
 */
function drawStroke(ctx: RenderContext, stroke: Stroke, canvasSize: ElementSize) { 
    applyCanvasStyle(ctx);
    ctx.strokeStyle = stroke.color;
    ctx.beginPath();

    for (let i = 0; i < stroke.points.length; i++) {
        const p = geometry.pointToPixels(stroke.points[i]!, canvasSize);

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
 */
function drawText(ctx: RenderContext, textDrawing: TextDrawing, canvasSize: ElementSize) { 
    const [x, y] = geometry.pointToPixels([textDrawing.x, textDrawing.y], canvasSize);
    ctx.font = "17px Arial";
    ctx.fillStyle = textDrawing.color;
    ctx.fillText(textDrawing.text, x, y);
}

/**
 * Applies default style to the canvas
 */
function applyCanvasStyle(ctx: RenderContext) {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
}

export default { renderFrame, drawText, drawStroke, clearCanvas, applyCanvasStyle };