import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.less";

const Reproductor = () => {
  const audioPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audioPlayer = audioPlayerRef.current.audio.current;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const customControls = (
    <button className="custom-audio-control" onClick={handlePlayPause}>
      {isPlaying ? "Pausar" : "Reproducir"}
    </button>
  );

  return (
    <AudioPlayer
      ref={audioPlayerRef}
      autoPlay={false}
      src={"/audio.mp3"}
      customControlsSection={customControls}
    />
  );
};

export default Reproductor;
