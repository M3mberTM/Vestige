/* Represents a floating point number. Mostly used for better annotations in other types */
export type float = number;

/* Represents one continuous stroke in canvas */
export interface Stroke {
    type: "stroke",
    color: HexColor,
    points: Point[],
}
/* Relative canvas coordinates represented as [x, y] */
export type Point = [float, float];
/* Hex color represented as # followed by 6 characters of hex value*/
export type HexColor = string;


/** size of an element */
export interface ElementSize {
    width: number,
    height: number
}

/* Represents a clear operation */
export interface ClearDrawing {
    type: "clear";
}

/* Represents one text in canvas */
export interface TextDrawing {
    type: "text";
    color: HexColor;
    text: string;
    x: float;
    y: float;
}

export type Drawing = Stroke | TextDrawing | ClearDrawing;

export interface RangeInput extends HTMLInputElement {
    valueAsNumber: number
}

export enum PlaybackButton {
    PLAY = "Play",
    PAUSE = "Pause"
}

export enum Tool {
    BRUSH = "brush",
    TEXT = "text"
}

export type RenderContext = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

export type VoidFunction = () => void;