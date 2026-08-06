import * as MediaBunny from "mediabunny";
import video from "./video";
import rendering from "./canvas/renderer";
import annotations from "./annotations";

async function burnVideo() {
    if (!video.isVideoLoaded()) throw new Error("No video loaded");

    const file = video.getVideoFile();
    if (!file) {
        throw new Error("Video file or info not loaded!");
    }
    const resolution = video.getVideoResolution();
    const canvas = new OffscreenCanvas(resolution.width, resolution.height);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Could not get 2D context");
    }
    const input = new MediaBunny.Input({
        formats: MediaBunny.ALL_FORMATS,
        source: new MediaBunny.BlobSource(file),
    })

    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) {
        throw new Error("Could not get video tracks");
    }

    const output = new MediaBunny.Output({
        format: new MediaBunny.Mp4OutputFormat(),
        target: new MediaBunny.BufferTarget()
    })

    let frame = 0;
    const conversion = await MediaBunny.Conversion.init({
        input,
        output,
        video: {
            process: (sample) => {
                ctx.clearRect(0, 0, resolution.width, resolution.height);
                sample.draw(ctx, 0,0);
                const drawings = annotations.getFrameAnnotations(frame);
                rendering.renderFrame(ctx, drawings, resolution);
                frame += 1;
                return canvas;
            }
        }
    })

    if (!conversion.isValid) {
        throw new Error(`Invalid conversion ${conversion.discardedTracks}`);
    }
    await conversion.execute();

    const buffer = output.target.buffer;

    if (!buffer) {
        throw new Error("Could not get buffer");
    }
    const blob = new Blob([buffer], {
        type: "video/mp4",
    });

    // TODO update logic to allow user to specify where to save the file
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "annotated.mp4";
    a.click();
    URL.revokeObjectURL(url);

}

export default {burnVideo};