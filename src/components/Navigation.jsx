import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [expandBurger, setExpandBurger] = useState(false);

  const toggleMenu = () => {
    setExpandBurger(!expandBurger);
  };

  const navLinks = [
    { page: "Home", to: "/" },
    { page: "Service", to: "/service" },
    { page: "Produkte", to: "/produkte" },
    { page: "Über", to: "/ueber-uns" },
    { page: "Kontakt", to: "/kontakt" },
  ];

  return (
    <nav className="bg-primary-bg h-16 w-full flex items-center justify-between px-2">
      <div className="text-white text-lg font-bold">
        {/* Logo */}
        <NavLink to="/" className="text-2xl">
          NextVision-IT
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:mx-auto space-x-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-accent-1 text-lg font-bold tracking-wider"
                : "text-white text-lg tracking-wider"
            }
          >
            {link.page}
          </NavLink>
        ))}
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden">
        <div
          className="text-white md:hidden text-2xl cursor-pointer z-20"
          onClick={toggleMenu}
        >
          {expandBurger ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {expandBurger && (
        <div className="absolute top-[80px] h-1/2 left-0 w-full bg-primary-bg md:hidden z-50">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-accent-1 py-4"
                    : "text-white hover:text-accent-1 py-4"
                } 
          block px-6 py-2 text-xl border-t-[1px] border-gray-300 
          ${
            index === navLinks.length - 1
              ? "border-b-[1px] border-gray-300"
              : ""
          }`
              }
              onClick={toggleMenu}
            >
              {link.page}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
