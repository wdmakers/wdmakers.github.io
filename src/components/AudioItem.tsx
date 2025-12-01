import React from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import type { AudioItemProps } from '../typings/typings';

const AudioItem: React.FC<AudioItemProps> = ({ src, name, piano }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const {
    playAudio,
    pauseAudio,
    handleEnded,
    currentPlayingName,
    currentPlayingAudioRef,
  } = useAudioPlayer();

  const [isThisAudioPlaying, setIsThisAudioPlaying] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const isGloballyPlaying = currentPlayingName === name;
    setIsThisAudioPlaying(isGloballyPlaying);

    if (!isGloballyPlaying && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [currentPlayingName, name, currentPlayingAudioRef]);

  const handleNativeAudioEvent = (
    event: React.SyntheticEvent<HTMLAudioElement, Event>,
  ) => {
    if (!audioRef.current) return;

    switch (event.type) {
      case 'play':
        playAudio(audioRef, name);
        break;
      case 'pause':
        pauseAudio(audioRef);
        break;
      case 'ended':
        handleEnded(audioRef);
        break;
      default:
        console.log(`Native audio event not mapped: ${event.type}`);
    }
  };

  const handleClick = () => {
    if (audioRef.current) {
      if (isThisAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error(
            'Error when trying to play the audio via button:',
            error,
          );
        });
      }
    }
  };

  return (
    <div>
      {name !== 'h' && <p className={`text-center !mb-0 font-pixel-bold ${isThisAudioPlaying ? "text-white" : "text-deltarune-gray"}`}>{name}</p>}
      <div className="flex items-center mb-2 mt-4 ">
        {piano && (
          <button onClick={handleClick} className="cursor-pointer">
            {!isThisAudioPlaying ? (
              <img
                src="assets/piano.png"
                className="hidden md:block !m-0"
                alt="Play Piano"
              />
            ) : (
              <img
                src="assets/piano_playing.gif"
                className="hidden md:block !m-0"
                alt="Playing Piano"
              />
            )}
          </button>
        )}
        <audio
          controls
          className="ml-2"
          ref={audioRef}
          src={src}
          onPlay={handleNativeAudioEvent}
          onPause={handleNativeAudioEvent}
          onEnded={handleNativeAudioEvent}
          loop
        />
      </div>
    </div>
  );
};

export default AudioItem;
