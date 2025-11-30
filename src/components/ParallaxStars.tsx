import React, { useRef, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const ParallaxStars: React.FC<{}> = () => {
  const star1Ref = useRef<HTMLImageElement>(null);
  const star2Ref = useRef<HTMLImageElement>(null);
  const star3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (star1Ref.current) {
        star1Ref.current.style.top = value * 0.58 + 'px';
      }
      if (star2Ref.current) {
        star2Ref.current.style.top = value * 0.9 + 'px';
      }
      if (star3Ref.current) {
        star3Ref.current.style.top = value * 0.95 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {' '}
      <img
        ref={star3Ref}
        src="assets/q12025/stars_3.gif"
        alt="Estrelas camada 3"
        className="absolute max-w-full -z-20"
        style={{ top: '0px' }}
      />
      <img
        ref={star2Ref}
        src="assets/q12025/stars_2.gif"
        alt="Estrelas camada 2"
        className="absolute max-w-full -z-20"
        style={{ top: '0px' }}
      />
      <img
        ref={star1Ref}
        src="assets/q12025/stars_1.gif"
        alt="Estrelas camada 1"
        className="absolute max-w-full -z-20"
        style={{ top: '0px' }}
      />
    </>
  );
};

export default ParallaxStars;
