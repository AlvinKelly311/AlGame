import React, { useState } from "react";
import { Link } from "react-router-dom";
import chip from './assets/chip.webp';
import cart1 from './assets/cart1.png'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <nav
        className={`p-5 text-slate-300 font-extrabold flex flex-row md:flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 shadow transition duration-300 ${
          scrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div>
          <img src={chip} alt="logo" className="w-14" />
        </div>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-2xl">
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row justify-center gap-8 font-black uppercase tracking-wider items-center ${
            isOpen ? "flex" : "hidden md:flex"
          } transition-all duration-300`}
        >
          <li>
            <Link to="/Home" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shopping" className="hover:text-blue-500">
              ShopList
            </Link>
          </li>
          <li>
            <Link to="/ShoppingCart" className="hover:text-blue-500">
              <img src={cart1} alt="Cart" className="w-7"/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
