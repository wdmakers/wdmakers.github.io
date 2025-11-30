export interface AudioPlayerContextType {
  playAudio: (audioRef: RefObject<HTMLAudioElement>, audioName: string) => void;
  pauseAudio: (audioRef: RefObject<HTMLAudioElement>) => void;
  handleEnded: (audioRef: RefObject<HTMLAudioElement>) => void;
  currentPlayingName: string | null;
  currentPlayingAudioRef: RefObject<HTMLAudioElement> | null;
}

export interface AudioPlayerProviderProps {
  children: React.ReactNode;
}

interface AudioItemProps {
  src: string;
  name: string;
  piano?: boolean;
}

interface useCyclingTextProps {
  options: string[];
  interval?: number;
}
