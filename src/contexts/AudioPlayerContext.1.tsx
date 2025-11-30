import React from 'react';
import type { AudioPlayerContextType } from '../typings/typings';

export const AudioPlayerContext = React.createContext<
  AudioPlayerContextType | undefined
>(undefined);
