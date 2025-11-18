


export const Pause = (audioRef) => {
    audioRef.current.play();
}


export const Play = (audioRef) => {
    audioRef.current.pause();
}



export const Volume = (level, audioRef) => {
    const audio = audioRef.current;
    if (!audio) return;

    // level should be 0-100, convert to 0-1
    audio.volume = Math.min(Math.max(level / 100, 0), 1);
}





export const getAudioDuration = (audioRef, callback) => {
  const audio = audioRef.current;
  if (!audio) return;

  // If metadata already loaded, return duration immediately
  if (!isNaN(audio.duration)) {
    callback(audio.duration);
    return;
  }

  // Otherwise, wait for metadata to load
  const handleMetadata = () => {
    callback(audio.duration);
    audio.removeEventListener("loadedmetadata", handleMetadata);
  };

  audio.addEventListener("loadedmetadata", handleMetadata);

  // Trigger metadata loading
  audio.load();
};
