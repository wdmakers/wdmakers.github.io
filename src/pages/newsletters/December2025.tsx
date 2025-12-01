import React from 'react';
import AudioItem from '../../components/AudioItem';

const Summer2025 = () => {
  const [pluey, setPluey] = React.useState(false);
  const [unplueying, setUnplueying] = React.useState(false);
  const [loadingPluey, setLoadingPluey] = React.useState(false);

  const handlePluey = () => {
    setLoadingPluey(true);

    if (pluey) {
      setUnplueying(true);
    } else {
      setPluey(true);
      setTimeout(() => setUnplueying(false), 10);
    }

    setTimeout(() => {
      setLoadingPluey(false);
    }, 300);
  };

  React.useEffect(() => {
    let timer: number;
    if (unplueying) {
      timer = setTimeout(() => {
        setPluey(false);
        setUnplueying(false);
      }, 350);
    }
    return () => clearTimeout(timer);
  }, [unplueying]);

  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-full max-w-[568px] items-center mt-10 px-8 md:px-0">
        <img src="/assets/potd-logo.gif" alt='DeltaruneWM Pantheon of the Discarded'></img>
        <h1 className="text-deltarune-yellow font-pixel-bold md:text-3xl sm:text-xl text-center">
          DECEMBER 2025 NEWSLETTER
        </h1>
        <div>
          <p className='mt-10'>Heeeeey everyone!</p>
          <p>Do you still remember us?</p>
          <p>Maybe this took a bit longer than expected…</p>
          <p>
            To be honest, I had an almost complete issue written and ready for release by summer. 
            But I wanted to make it a little more fun by adding something special.
          </p>
          <p>That was a recipe for disaster.</p>
          <p>
            While I waited for this thing to be ready, more and more setbacks arose, 
            and now here I am, writing an almost completely new issue.
          </p>
          <p>
            I guess filling up this newsletter with paragraphs about how bad the weather was here isn't appropriate anymore.
          </p>
        </div>
        <img
          src="/assets/december2025/RoulxsPeek.png"
          alt='Upon hearing about bad weather, Rouxls peeks from behind a wall.'
          className="max-h-[100px]"
        ></img>
        <p className="self-start">Get out.</p>
        <div className="!mt-10">
          <p>
            You might have noticed that the writing in this letter is a little
            different from usual.
          </p>
          <p>That's because this time, the writer is me, Snokie!</p>
          <p>
            I'm one of the Directors of the game, and the one behind the little
            drawings in this issue.
          </p>
          <p>
            Usually, Caramel (the other Director) is the one who does this kind
            of stuff (the writing, not the drawings). But he's busy. So you'll
            have to put up with me this time.
          </p>
          <p>Hopefully the reading won't be so awful.</p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          DELTARUNE CHAPTERS 3+4
        </h2>
        <div>
          <p>So DELTARUNE's Chapters 3+4 released!</p>
          <p>
            It completely blew our expectations away. That dog did it again!
          </p>
          <p>
            Our team hosted a group party to play both chapters and it was
            excitingly fun! A bit disorganized, but it was a first for us.
          </p>
          <p>
            Also, Chapter 5 is right around the corner, so we'll have the
            opportunity to play disorganizedly again soon! I'm looking forward
            to it.
          </p>
          <p className="!mt-20">So…</p>
          <p>What did you think? Were some of your theories correct? </p>
          <p>
            I made a bingo card to fill in while I played through the game, and
            even though I didn't get a bingo, the amount of squares I marked off
            was way more than I could have imagined! Guess that's a sign to keep
            believing in my guts. (That deer won't make it past this chapter.)
          </p>
          <p className="!mt-20">…</p>
          <p>Guess that's all we have to talk about these chapters.</p>
        </div>
        <button
          onClick={handlePluey}
          disabled={loadingPluey}
          className="cursor-pointer disabled:opacity-50 disabled:cursor-default mb-10 mt-20"
        >
          <h2 className="select-none font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-4xl text-center  hover:underline decoration-1">
            {!pluey
              ? 'UNLOCK EXTRA SECRET SECTION (DELTARUNE CHAPTERS 3+4 SPOILERS)'
              : 'LOCK EXTRA SECRET SECTION (DELTARUNE CHAPTERS 3+4 SPOILERS)'}
          </h2>
        </button>

        <div
          className={`collapsible-content ${
            unplueying ? 'animate-slideUpHeight' : 'animate-slideDownHeight'
          } ${pluey ? 'flex flex-col items-center' : 'hidden'}`}
        >
          <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
            PLUEY
          </h2>
          <img
            src="/assets/december2025/CatMike&CatMike.png"
            alt="Cat Mike dances with DeltaruneWM's original Cat Mike"
            className="max-h-[150px]"
          ></img>
          <div>
            <p>Okay, what was THAT?</p>
            <p>Mike really WAS a cat after all! We told you! </p>
            <p>One of them is, at least.</p>
            <p>
              We're sure Pluey (we're calling them Pluey to differentiate them
              from our Cat Mike) was made as an homage to all the Mikes that are
              cats and Mikes that are friends and Mikes that are cats and
              friends, but it's inevitable to feel especially happy and grateful
              that one of our characters that was made back in 2022, before the
              “FRIEND cat theory” got popular, was referenced and eternalized in
              some shape or form.
            </p>
            <p>To that, we can only say: Thank you, Toby.</p>
            <p>
              For inspiring us to keep on creating, and showing that you care
              about your community and its creations.
            </p>
            <p>
              With Pantheon of the Discarded, we hope to do the same for you and
              for them as well.
            </p>
          </div>
          <img
            src="/assets/december2025/CatMike&CatTenna.png"
            alt="DeltaruneWM's Tenna and Mike dances like Cat Mike"
            className="max-h-[200px]"
          ></img>
        </div>

        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          WHAT WILL BECOME OF PANTHEON OF THE DISCARDED?
        </h2>
        <div>
          <p>
            We already had discussions internally to analyze what level of
            damage the official chapters did to our poor baby.
          </p>
          <p>And the results were...</p>
          <p className="!mt-20">Well, you wouldn't believe it.</p>
          <p className="!mt-20">
            It's honestly hard to handle. I might just skip this part.
          </p>
          <p className="!mt-20">I think I'm gonna be sick…</p>
          <p className="!mt-20">Truth is…</p>
          <p className="!mt-20">…</p>
          <p className="!mt-20">Not much will change.</p>
          <p>
            We already did a good job coming up with something that stands on
            its own pretty well. So most of the new information we learned about
            DELTARUNE in the new chapters didn't shake our project all too much.
          </p>
          <p>
            There IS some stuff we're rewriting, but most of it is only to
            improve what we already had.
          </p>
          <p>...</p>
          <p>See? The truth is nauseating.</p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          WHAT TO EXPECT?
        </h2>
        <div>
          <p>
            The first wave is still not even close to being finished, but we are
            getting closer to it every passing day.
          </p>
          <p>
            We've been waiting for DELTARUNE for 6 and a half years now. It can
            persist, too.
          </p>
          <p>It is still waiting.</p>
          <p>But for how much longer now…?</p>
          <p>Your Pantheon…</p>
          <p>Anyway, we don't want to leave you in the dark-er for too long, so we
            decided to share, over the next few days, some of what we have
            worked on.</p>
          <p className="!mt-60">
            ...That's what I would say if we actually released this issue when it was supposed to. 
            So to make up for it, here's a special extra session of never-before-seen new stuff from Pantheon of the Discarded!
          </p>
        </div>
        <AudioItem
          name="♪ There's No Town Like Con Town!!"
          src="/assets/december2025/audio/con_town.wav"
          piano={true}
          />
        <p className='text-center'>"The most perfect town of the most perfect world ever!"</p>
        <p className="text-center text-[14px] !-mt-6">by <span className='underline'>Eribetra</span></p>
        <AudioItem
          name="♪ Sorry, We're Open"
          src="/assets/december2025/audio/sorry_were_open.wav"
          piano={true}
          />
        <p className='text-center'>"It's a picture of a business man next to his red car."</p>
        <p className="text-center text-[14px] !-mt-6">by <span className='underline'>Creepabotinc</span></p>
                <AudioItem
          name="♪ RING AROUND TOWN"
          src="/assets/december2025/audio/ring_around_town.wav"
          piano={true}
          />
        <p className='text-center'>"WHY are you here!?? What the hell is THAT!??"</p>
        <p className="text-center text-[14px] !-mt-6">by <span className='underline'>Conno02</span></p>
        <div className='text-left'>
          <p>
            Now for some characters.
          </p>
          <img
          src="/assets/december2025/RekkoRubyx&Rapjay.png"
          alt='Rekko, a cat dressed in a Visual Kei style, Rubyx, a glamorous TV personality wearing pink and sparkly accessories, and Rapjay, a big DJ with a chill attitude standing next to each other'
          className="max-h-[175px] mx-auto"
          ></img>
          <p>
            These are Rekko, Rubyx, and Rapjay, maybe not 
            necessarily in that order. (Yes it is).
          </p>
          <p>
            They are important characters that you will encounter in the 
            first wave. And that's all I'm going to say.
          </p>
          <p>
            Also, another cat? Their greed sickens me.
          </p>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          DEVELOPMENT OF THE GAME
        </h2>
        <div>
          <p>
            Since the release of DELTARUNE, the development of the game has
            slowed down, due to a number of reasons.
          </p>
          <p>
            That happens naturally when the team is made up of humans with other
            responsibilities to attend to and directed by humans with other
            responsibilities to attend to.
          </p>
          <p>
            I have yet to figure out how to turn myself into a powerful robot
            capable of creating everything that I have in mind, but for now it
            seems like I'm out of luck.
          </p>
          <p>
            I tried to replace my body with wires and gears, but I just can't
            get it to work!
          </p>
          <p>Guess I'll have to live on… as a boring box being.</p>
          <img
          src="/assets/december2025/CubeRobot.png"
          alt='A cube-headed creature attempting to create a robot in its own image'
          className="max-h-[120px] mx-auto mt-20"
          ></img>
          <p className="!mt-20">
            We've had some discussions and meetings, and made a lot of progress 
            since then. We've decided that our focus will now be on creating a 
            fully realized and entirely playable slice from point A to point B 
            so that the team can experience what you guys will one day be able 
            to play.
          </p>
          <p>
            Sorry, this time it's just for us. I'll play in your honor, 
            don't worry!
          </p>
          <p className="!mt-20">
            Before I forget, there's something else I need to tell you.
          </p>
          <p>
            Things got a bit hectic at the end of the year for most of us. 
            So we've decided to take a break from development until around 
            mid-January next year so everyone can clear their minds, rest, 
            and come back prepared to take this project to the next level. 
            This kind of thing is necessary to prevent one from going crazy, 
            y’know?
          </p>
          <p>
            But ultimately, I don't think someone like me can completely ignore
             the project. I'll be subconsciously thinking about it and rearranging 
             things for our return.
          </p>
          <p>
            Anyway, there are a few things I want to do with this free time, like 
            studying music-making and some other creative subjects a bit. 
            I've always been fascinated by that sort of thing.
          </p>
          <p>
            On that topic, I've been learning how to work with the game engine so 
            I can help in that department! Look at one of the things I've already managed to do:
          </p>
          <img
          src="/assets/december2025/ILoveCoding.gif"
          alt='A swarm of fish-eyes swoops towards the soul and begins to spin fiercely while shooting lightning bolts in its direction'
          className="max-h-[300px] mx-auto my-20"
          ></img>
          <p>
           I promise I'm getting better at it.
          </p>
          <p className='font-mono font-bold text-center mt-40'>
            (ring ring ring)
          </p>
          <img
          src="/assets/december2025/Phone.png"
          alt='A phone rings.'
          className="max-h-[200px] mx-auto mb-20"
          ></img>
          <p>
            Hang on, someone's calling me.
          </p>
          <img
          src="/assets/december2025/CubeTalkingPhone.png"
          alt='The cube-headed person picks up the call'
          className="max-h-[200px] mx-auto"
          ></img>
          <p>
            Hello?
          </p>
          <p>
            ...
          </p>
          <p>
            Oh, hey dude!
          </p>
          <p>
            ...
          </p>
          <p>
            Really? Should I tell them that?
          </p>
          <p>
            ...
          </p>
          <p>
            Oh, ok.
          </p>
          <p> 
            I'll pass the phone to them.
          </p>
          <p className='mt-20'>
            It's for you.
          </p>
          <img
          src="/assets/december2025/CaramelCalling.png"
          alt='The cube-headed being hands you the phone to speak with a small, orange, draconic creature.'
          className="max-h-[200px] mx-auto"
          ></img>

          <p className='font-mono'>
            Hello! This is Caramel writing.
          </p>
          <p className='font-mono'>
            Some developments have been made, and in short, we're changing our 
            approach for guest characters.
          </p>
          <p className='font-mono'>
            We'll reach out to people ourselves, and no longer consider new 
            pitches sent to us.
          </p>
          <p className='font-mono'>
            This decision is so that we can ensure a better quality consistency 
            across the roster and have a little more control over the scope of 
            the project (now that we actually have more pitches than what we 
            can develop into full segments).
          </p>
          <p className='font-mono'>
            To that effect, we're also re-organizing and re-evaluating our current 
            characters. This means we'll remove some characters, give space for 
            other ones, and carefully consider every character that has been sent 
            to us (pitches, confirmed guests, even our own original characters). 
            Our end goal is a varied roster that favors uniqueness and creativity.
          </p>
          <p className='font-mono'>
            (This does mean we'll inevitably reduce our total quantity of flowers 
            and cowboys... I apologize for the flower and cowboy fans.)
          </p> 
          <p className='font-mono'>
            Honestly, I'd love to develop every single idea sent to us. But, it's 
            the nature of a big passion project like PotD to take careful control 
            of its scope before it gets too big to reasonably create.
          </p>
          <p className='font-mono'>
            ... Okay, that's all I wanted to write about.
          </p>
          <p className='mt-40'>
            ...
          </p>
          <p>
            I thought he was busy??
          </p>
          <img
          src="/assets/december2025/CubeConfuse.png"
          alt='The cube-headed creature stands in confusion in front of the telephone'
          className="max-h-[135px] mx-auto"
          ></img>
        </div>
        <h2 className="font-pixel-bold text-deltarune-yellow md:text-3xl sm:text-xl text-center mb-10 mt-20">
          CONCLUSION
        </h2>
        <div>
          <p>
            That's all we have to share in this issue.
          </p>
          <p>
            I won't give an exact timeframe for the next update, but I promise 
            once we get back from break we'll try to make sure it doesn't take as long as this one.
          </p>
          <p>
            Hope everyone has a great holiday!
          </p>
          <p>
            Bye!
          </p>
          
        </div>
        <img
          src="/assets/december2025/TennaSunbathingPeacefully.png"
          alt='Tenna from DeltaruneWM is peacefully sunbathing and drinking a soda while Mike tries to dig himself out. Tenna may or may not have been responsible for this'
          className="!mt-30 !mb-20 max-h-[200px]"
        ></img>
      </div>
    </section>
  );
};

export default Summer2025;
