import React from 'react';
import type { useCyclingTextProps } from '../typings/typings';

const useCyclingText = ({
  options,
  interval = 1000,
}: useCyclingTextProps): string | null => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (options.length === 0) {
      console.warn('useCyclingText: No options given to cycle.');
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, interval);

    return () => clearInterval(timer);
  }, [options, interval]);

  if (options.length === 0) {
    return null;
  }

  return options[currentIndex];
};

export default useCyclingText;
