import ffmpeg from "fluent-ffmpeg";
import { PassThrough } from "stream";

const inputFilePath = "/Users/alkendester/Desktop/dester/test/video.mkv";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const audioTrack = searchParams.get("audioTrack") || "0";
  const stream = new PassThrough();

  ffmpeg(inputFilePath)
    .outputOptions([
      "-movflags",
      "+frag_keyframe+empty_moov+default_base_moof",
      "-map",
      "0:v",
      "-map",
      `0:a:${audioTrack}`,
    ])
    .outputFormat("mp4")
    .videoCodec("libx264")
    .audioCodec("aac")
    .on("start", (commandLine) => {
      console.log("Spawned FFmpeg with command: " + commandLine);
    })
    .on("error", (err, stdout, stderr) => {
      console.error("An error occurred: " + err.message);
      console.error("FFmpeg stdout: " + stdout);
      console.error("FFmpeg stderr: " + stderr);
      stream.end();
    })
    .on("end", () => {
      console.log("Transcoding succeeded!");
    })
    .pipe(stream, { end: true });

  return new Response(stream, {
    headers: {
      "Content-Type": "video/mp4",
    },
  });
}
