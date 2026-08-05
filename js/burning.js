// import * as Mp4Box from "mp4box";
import * as MediaBunny from "mediabunny";
import video from "./video";

async function burnVideo() {
    if (!video.isVideoLoaded()) return;

    const file = video.getVideoFile();
    if (!file) {
        console.log("Video file or info not loaded!");
        return;
    }

    // const input = new MediaBunny.Input({
    //     source: file
    // })
}
    // const decoder = new VideoDecoder({
    //     output: (frame) => {
    //         console.log(frame);
    //         frame.close();
    //     },
    //     error: (err) => {
    //         console.error(err);
    //     }
    // });

    // // TODO create a helper function to get decoder description
    // const description = getDecoderConfig();
    // console.log(description);
    // if (!description) {
    //     console.log("Could not generate the decoder config");
    //     return;
    // };
    // decoder.configure(description);

    // decodeChunks(decoder);
    // await decoder.flush();
    // decoder.close();
// }

// function getDecoderConfig() {
//     const mp4File = video.getMp4File();
//     const videoInfo = video.getMp4Info();
//     if (!videoInfo || !mp4File) return;

//     const codec = videoInfo.videoTracks[0].codec;
//     const entry = /** @type {Mp4Box.VisualSampleEntry} */ (mp4File.moov.trak.mdia.minf.stbl.stsd.entries[0]);

//     if (codec.startsWith("avc1")) {
//         return {
//             codec: codec,
//             description: entry.avcC
//         }
//     }

//     if (codec.startsWith("hvc1")) {
//         return {
//             codec: codec,
//             description: entry.hvcC
//         }
//     }

//     return null;
// }


// /**
//  * 
//  * @param {VideoDecoder} decoder 
//  */
// function decodeChunks(decoder){
//     const samples = video.getVideoSamples();
//     for (const sample of samples) {
//         if (!sample.data) continue;
//         let frame = new EncodedVideoChunk({
//             type: sample.is_sync ? "key" : "delta",
//             timestamp: sample.cts,
//             data: sample.data
//         })
//         decoder.decode(frame);
//     }
// }


export default {burnVideo};