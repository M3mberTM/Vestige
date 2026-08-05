import * as MediaBunny from "mediabunny";
import video from "./video";
import rendering from "./canvas/renderer";
import annotations from "./annotations";

async function burnVideo() {
    if (!video.isVideoLoaded()) return;

    const file = video.getVideoFile();
    if (!file) {
        console.log("Video file or info not loaded!");
        return;
    }
    const resolution = video.getVideoResolution();
    const canvas = new OffscreenCanvas(resolution.width, resolution.height);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.log("Could not get 2D context");
        return;
    }
    const input = new MediaBunny.Input({
        formats: MediaBunny.ALL_FORMATS,
        source: new MediaBunny.BlobSource(file),
    })

    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) {
        console.log("Could not get video tracks");
        return;
    }

    const sink = new MediaBunny.VideoSampleSink(videoTrack);
    let frameNum = 0;
    for await (const sample of sink.samples()) {
        sample.draw(ctx, 0,0);
        const drawings = annotations.getFrameAnnotations(frameNum);
        rendering.renderFrame(ctx, drawings, resolution);

        frameNum += 1;
        // TODO encode again and add to frames
    }

    // TODO properly export

}

export default {burnVideo};