import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Pass the scrolled state to Navbar */}
      <Navbar scrolled={scrolled} />
      {/* Background image section */}
      <div className="bg-scroll bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONEVEJdykwwNHDTtByzRVesmdoSYm0kj01sOvIUIwP7WWcfCDccSOZk4pED6pqi3L3f8&usqp=CAU')] h-screen bg-cover bg-center md:bg-64 bg-no-repeat lg:bg-cover">
        {/* Content can go here */}
      </div>
      {/* Content section */}
      <div className="w-full h-1/2 p-4 md:p-9 bg-black rounded-tl-md flex flex-col items-center justify-center gap-4 md:gap-10">
        <h1 className='font-black uppercase text-3xl md:text-4xl lg:text-5xl text-slate-300 text-center'>
          Welcome to Al<span className="text-blue-300 font-black uppercase tracking-[0.5rem]">Game🎮</span>
        </h1>
        <div className='relative'>
          <p className='font-extrabold text-slate-300 text-lg md:text-xl'>@Alvin Kel Ly✌️</p>
        </div>
      </div> 
    </div>
  );
};

export default Home;