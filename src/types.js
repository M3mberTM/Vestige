/**
 * Represents one continuous stroke in canvas
 * @typedef {object} Stroke
 * @property {"stroke"} type
 * @property {HexColor} color
 * @property {Point[]} points
 */

/**
 * Represents one text in canvas
 * @typedef {object} TextDrawing
 * @property {"text"} type
 * @property {HexColor} color
 * @property {string} text
 * @property {number} x
 * @property {number} y
 */

/**
 * Represents a clear operation
 * @typedef {object} ClearDrawing
 * @property {"clear"} type
 */

/**
 * @typedef {Stroke | TextDrawing | ClearDrawing} Drawing
 */

/**
 * Canvas coordinates represented as [x, y]
 * @typedef {[number, number]} Point
 */

/**
 * size of an element
 * @typedef {object} ElementSize
 * @property {number} width
 * @property {number} height
 */

/**
 * Hex color represented as # followed by 6 characters of hex value
 * @typedef {string} HexColor
 */

/**
 * @typedef {HTMLInputElement & {
 * valueAsNumber: number
 * }} RangeInput
 */

export const PLAYBACK_BUTTON = Object.freeze({PLAY: "Play", PAUSE: "Pause"});
export const TOOLS = Object.freeze({BRUSH: "brush", TEXT: "text"});

/**
 * @typedef {typeof PLAYBACK_BUTTON[keyof typeof PLAYBACK_BUTTON]} PlaybackButton
 */

/**
 * @typedef {typeof TOOLS[keyof typeof TOOLS]} DrawingTool
 */

/**
 * @typedef {CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D} RenderContext
 */