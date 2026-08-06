import type {Point, ElementSize} from "../types";

/**
 * @returns x, y relative to the canvas
 */
function pointToPixels(point: Point, canvasSize: ElementSize): [number, number] {
    return [point[0] * canvasSize.width, point[1] * canvasSize.height];
}

function pixelsToPoint(x: number, y: number, canvasSize: ElementSize): Point {
    return [x / canvasSize.width, y / canvasSize.height];
}

/**
 * @returns x,y position relative to canvas
 */
function getCanvasPosition(e: MouseEvent, canvas: HTMLCanvasElement): [number, number] {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
}

export default { pointToPixels, pixelsToPoint, getCanvasPosition };