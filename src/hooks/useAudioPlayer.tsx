import React from 'react';
import { AudioPlayerContext } from '../contexts/AudioPlayerContext.1';

export const useAudioPlayer = () => {
  const context = React.useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used inside AudioPlayerProvider');
  }
  return context;
};
