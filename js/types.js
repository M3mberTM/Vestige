/**
 * Represents one continuous stroke in canvas
 * @typedef {object} Stroke
 * @property {string} color
 * @property {Point[]} points
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
 * @typedef {HTMLInputElement & {
 * valueAsNumber: number
 * }} RangeInput
 */

export const PLAYBACK_BUTTON = Object.freeze({PLAY: "Play", PAUSE: "Pause"});

/**
 * @typedef {typeof PLAYBACK_BUTTON[keyof typeof PLAYBACK_BUTTON]} PlaybackButton
 */
