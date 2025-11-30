import React, { type RefObject } from 'react';
import { AudioPlayerContext } from './AudioPlayerContext.1';
import type {
  AudioPlayerContextType,
  AudioPlayerProviderProps,
} from '../typings/typings';

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({
  children,
}) => {
  const [currentPlayingAudioRef, setCurrentPlayingAudioRef] =
    React.useState<RefObject<HTMLAudioElement> | null>(null);
  const [currentPlayingName, setCurrentPlayingName] = React.useState<
    string | null
  >(null);

  const playAudio = (
    audioRef: React.RefObject<HTMLAudioElement>,
    audioName: string,
  ) => {
    if (
      currentPlayingAudioRef &&
      currentPlayingAudioRef.current !== audioRef.current
    ) {
      currentPlayingAudioRef.current?.pause();
    }
    setCurrentPlayingAudioRef(audioRef);
    setCurrentPlayingName(audioName);

    audioRef.current?.play().catch((error) => {
      console.error('Error when trying to play the audio:', error);
      alert(
        `Error when playing "${audioName}". The browser might have blocked autoplay.`,
      );
      setCurrentPlayingAudioRef(null);
      setCurrentPlayingName(null);
    });
  };

  const pauseAudio = (audioRef: RefObject<HTMLAudioElement>) => {
    if (
      currentPlayingAudioRef &&
      currentPlayingAudioRef.current === audioRef.current
    ) {
      currentPlayingAudioRef.current?.pause();
      setCurrentPlayingAudioRef(null);
      setCurrentPlayingName(null);
    }
  };

  const handleEnded = (audioRef: RefObject<HTMLAudioElement>) => {
    if (
      currentPlayingAudioRef &&
      currentPlayingAudioRef.current === audioRef.current
    ) {
      setCurrentPlayingAudioRef(null);
      setCurrentPlayingName(null);
    }
  };

  const contextValue: AudioPlayerContextType = {
    playAudio,
    pauseAudio,
    handleEnded,
    currentPlayingName,
    currentPlayingAudioRef,
  };

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
