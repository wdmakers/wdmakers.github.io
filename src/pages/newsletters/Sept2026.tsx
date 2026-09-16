import React from 'react';
import AudioItem from '../../components/AudioItem';

const Sept2026 = () => {
  const audioRef = React.useRef(new Audio('/assets/sept2026/audio/jingle.mp3'));
  const playJingle = () => {
    audioRef.current.currentTime = 0; 
    audioRef.current.play();
  };

  const tactIdle = '/assets/sept2026/tact_idle.gif';
  const tactSpared = '/assets/sept2026/tact_spared.png';
  const [imagemSrc, setImagemSrc] = React.useState(tactIdle);

  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-full max-w-[568px] items-center mt-10 px-8 md:px-0">
        <img src="/assets/potd-logo.gif" alt='DeltaruneWM Pantheon of the Discarded'></img>
        <h1 className="text-deltarune-yellow font-pixel-bold md:text-3xl sm:text-xl text-center">
          SEPTEMBER 2026 NEWSLETTER
        </h1>
        <div className='self-start'>
          <p className='mt-10'>Spring changed to summer,</p>
          <p>and summer changed to cold.</p>
          <p className='mt-20'>Whether 11 hours or 11 years,</p>
          <p>DELTARUNE will--</p>
          <p className='mt-20'>oh, it's UNDERTALE's 11th anniversary.</p>
          <p>Whether 11 hours or 11 years,</p>
          <p>UNDERTALE will..</p>
          <p>be... waiting?</p>
        </div>
        <img
          src="/assets/sept2026/sus_polite.png"
          alt='Susie sitting politely.'
        ></img>
        <div className="!mt-10">
          <p>Long time no see, huh?</p>
          <p>Welcome to the next issue of the DELTARUNE・WM: Pantheon of the Discarded Newsletter!</p>
          <p>Just in time (almost) for the anniversary! Isn't that joyous?</p>
          <p className='mt-20'>Well, we owe you some news.</p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          WHAT HAPPENED TO YOU?
        </h2>
        <div>
          <p>We directors got hit with some real life issues, and then we got double struck by loss of motivation due to them.</p>
          <p>
            For a long while, our development speed had slowed down to a crawl. Things didn't stop completely, 
            but without the necessary organization from us, it was as slow as filling a pool with waterdrops.
          </p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          WHAT WILL HAPPEN TO YOU?
        </h2>
        <div>
          <p>
            Recently, we've found the resolve (and, most importantly, the free time) to continue development 
            <a onClick={playJingle}  className='hover:text-deltarune-yellow hover:underline hover:cursor-pointer ml-1'>from now on</a>.
          </p>
          <p>We want to resume everything we were doing before, and also neatly sort everything that was done while we were out.</p>
          <p>
            The first thing we're doing now that we're returned is this Newsletter. After that, who knows...?
            (We're gonna work on the game.)
          </p>
          <p>We also want to show you some more things, as an important gesture of "we aren't dead"!</p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          A GIFT TO  <h2 className='text-deltarune-green'>YOU</h2>
        </h2>
        <div>
          <p>This isn't a Museum, but here is an exhibit we think you'll find...</p>
          <p>... interesting.</p>
        </div>
        <img
          src="/assets/sept2026/grab_attack.gif"
          alt='Pairs of hands reach towards the soul and hold on to one another, keeping it in place.'
        ></img>
        <AudioItem
          name="♪ Brutal Blade"
          src="/assets/sept2026/audio/brutal_blade.wav"
          piano={true}
        />
        <p className="text-center text-[14px]">Composed by OnlyAReina</p>
        <div className='mt-10'>
          <p>How about it?</p>
          <p>The battle song will be out soon in our 
            <a
              href="https://www.youtube.com/@wanderingmakers"
              target="_blank"
              className="text-deltarune-yellow hover:underline decoration-1 mx-1"
            >
              YouTube 
            </a>
            and 
            <a
              href="https://soundcloud.com/wandering-makers"
              target="_blank"
              className="text-deltarune-yellow hover:underline decoration-1 mx-1"
            >
              Soundcloud
            </a>
            accounts.</p>
          <p>We hope it's something, at least.</p>
        </div>
        <img
          src={imagemSrc}
          onMouseEnter={() => setImagemSrc(tactSpared)}
          onMouseLeave={() => setImagemSrc(tactIdle)}
          alt="A tall, slender creature holds itself."
          className="mt-10"
        />
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          RELEASE
        </h2>
        <div>
          <p>The first thing we will release is a DEMO version containing the first few moments of Pantheon of the Discarded, plus a bossfight.</p>
          <p>It will be released in the name of showing you proof that this game is both real and underway (and hopefully reward your patience, just a little bit).</p>
          <p>The game comes with a story.</p>
          <p>It is not the same story as before.</p>
          <p>It has been molded together from its components.</p>
        </div>
        <div className='text-right mt-10'>
          <p>Everything here is done for you.</p>
          <p className='text-[#c9ffc9]'>with you.</p>
          <p className='text-[#abffab]'>by you.</p>
          <p className='text-[#57ff57]'>from you.</p>
          <p className='text-deltarune-green'>out of you.</p>
        </div>
        <img
          src="/assets/sept2026/cage.gif"
          alt='A green cage encloses the soul.'
          className='mt-10 h-[400px]'
        ></img>
        <div className='mt-10 mb-20 text-center text-deltarune-green'>
          <p>Take my hand into the Otherworld.</p>
          <div className='w-[568px]'>
            <p >Let us piece these broken dreams</p>
            <p>and open the way to a new one</p>
            <p>so that our dreams may be neverending.</p>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Sept2026;
