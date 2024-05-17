import ffmpeg from "fluent-ffmpeg";

const inputFilePath = "/Users/alkendester/Desktop/dester/test/video.mkv";

const ffprobePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        resolve(metadata);
      }
    });
  });
};

export async function GET() {
  try {
    const metadata = await ffprobePromise(inputFilePath);

    const audioTracks = metadata.streams.filter(
      (stream) => stream.codec_type === "audio"
    );

    console.log(`Number of audio tracks: ${audioTracks.length}`);

    if (audioTracks.length > 1) {
      console.log(
        "Multiple audio tracks found:",
        audioTracks.map((track, index) => ({
          index,
          language: track.tags.language || "Unknown",
        }))
      );
    }

    return Response.json({
      audioTracks: audioTracks.map((track, index) => ({
        index,
        language: track.tags.language || "Unknown",
      })),
    });
  } catch (err) {
    console.error("Error probing video file: " + err.message);
    return Response.json(
      { error: "Error probing video file" },
      { status: 500 }
    );
  }
}
