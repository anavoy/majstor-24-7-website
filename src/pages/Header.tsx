import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-900/70 backdrop-blur-md text-black border-b border-white/10">
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Logo normalne veličine */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="SZR Dragi logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        {/* Linkovi za desktop */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          <a href="#onama" className="hover:text-blue-300 transition">
            O nama
          </a>
          <a href="#usluge" className="hover:text-blue-300 transition">
            Usluge
          </a>
          <a href="#kontakt" className="hover:text-blue-300 transition">
            Kontakt
          </a>
        </div>

        {/* Burger meni za mobilne */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile meni */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4 md:hidden">
          <a
            href="#onama"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            O nama
          </a>
          <a
            href="#usluge"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Usluge
          </a>
          <a
            href="#kontakt"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
