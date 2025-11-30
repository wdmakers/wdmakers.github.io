import { NavLink } from 'react-router-dom';

const Archive = () => {
  return (
    <section className="flex w-full justify-center font-pixel-bold">
      <div className="flex flex-col items-center text-center md:p-0 p-2">
        <h1 className="text-yellow-300 lg:text-6xl text-3xl mt-32 mb-20">
          DELTARUNE · WM
          <span className="text-white block"> NEWSLETTERS</span>
        </h1>
        <div>
          <NavLink
            to="/december2025"
            className="block hover:opacity-90 max-w-sm mb-24"
          >
            <h2 className="text-xl text-yellow-300">ISSUE 3 - December 2025</h2>
            <p className="!font-pixel-bold">
              Heeeeey everyone! Do you still remember us?
            </p>
          </NavLink>
          <NavLink
            to="/q12025"
            className="block hover:opacity-90 max-w-sm mb-24"
          >
            <h2 className="text-xl text-yellow-300">ISSUE 2 - Q1 2025</h2>
            <p className="!font-pixel-bold">
              How was UNDEREVENT? Most of us watched it, and had a fun time.
            </p>
          </NavLink>
          <NavLink
            to="/june2023"
            className="block hover:opacity-90 max-w-sm mb-24"
          >
            <h2 className="text-xl text-yellow-300">ISSUE 1 - June 2023</h2>
            <p className="!font-pixel-bold">
              We've come to reunite once again, bringing messages about past,
              present and future with you.
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Archive;
