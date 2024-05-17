"use client";
import React, { useEffect, useState } from "react";

const VideoPlayer = () => {
  const [audioTracks, setAudioTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("");

  useEffect(() => {
    fetchAudioTracks();
  }, []);

  const fetchAudioTracks = () => {
    fetch("/audio")
      .then((response) => response.json())
      .then((data) => {
        setAudioTracks(data.audioTracks);
        setSelectedTrack(data.audioTracks[0].index);
      })
      .catch((error) => {
        console.error("Error fetching audio tracks:", error);
      });
  };

  const handleTrackChange = (event) => {
    setSelectedTrack(event.target.value);
  };

  return (
    <div className="w-full aspect-video">
      <select value={selectedTrack} onChange={handleTrackChange}>
        {audioTracks.map((track) => (
          <option key={track.index} value={track.index}>
            {track.language}
          </option>
        ))}
      </select>
      <video
        className="w-full h-full"
        controls
        src={`http://localhost:3000/video?audioTrack=${selectedTrack}`}
      ></video>
    </div>
  );
};

export default VideoPlayer;
