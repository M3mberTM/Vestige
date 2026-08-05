/** @import {Point, ElementSize} from "../types" */

/**
 * Converts point to pixels representing the x and y coordinates
 * @param {Point} point 
 * @param {ElementSize} canvasSize
 * @returns {[number, number]} x, y relative to the canvas
 */
function pointToPixels(point, canvasSize) {
    return [point[0] * canvasSize.width, point[1] * canvasSize.height];
}

/**
 * @param {number} x x coordinate of the point relative to the canvas
 * @param {number} y y coordinate of the point relative to the canvas
 * @param {ElementSize} canvasSize
 * @returns {Point}
 */
function pixelsToPoint(x, y, canvasSize) {
    return [x / canvasSize.width, y / canvasSize.height];
}

/**
 * @param {MouseEvent} e 
 * @param {HTMLCanvasElement} canvas
 * @returns {[number, number]} x,y position relative to canvas
 */
function getCanvasPosition(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
}

export default { pointToPixels, pixelsToPoint, getCanvasPosition };