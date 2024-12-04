import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';



const App = () => {
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
    <div>
      <Navbar scrolled={scrolled} />
      <main>
        <Outlet />
      </main>
     
 
    </div>
  );
}

export default App;