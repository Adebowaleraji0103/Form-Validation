import { useState } from "react";

const navLinks = ["Home", "About", "Experience", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mubarak</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-gray-700 hover:text-black cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${
              isOpen && "rotate-45 translate-y-1.5"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${isOpen && "opacity-0"}`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              isOpen && "-rotate-45 -translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="bg-white px-4 py-6 space-y-4 shadow">
          {navLinks.map((link) => (
            <li key={link} className="text-gray-700">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
