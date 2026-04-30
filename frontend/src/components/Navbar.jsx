import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Features', path: '/#features' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4 bg-[#0a0a2e]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' : 'py-6 bg-gradient-to-b from-[#0a0a2e]/80 to-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative flex-shrink-0">
            {/* The Circuit N Symbol with mix-blend-screen to process dark backgrounds natively */}
            <img 
              src={`${import.meta.env.BASE_URL}NexGeniqLogo.png`} 
              alt="NexGeniq Logo" 
              className="w-10 h-10 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,1)] transition-all duration-500" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight leading-none">
              Nex<span className="text-brand-cyan">Gen</span><span className="text-white opacity-80">iq</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] mt-1.5 uppercase">
              <span className="text-white">Learn</span><span className="text-brand-cyan/50 mx-1">.</span><span className="text-brand-blue">Evolve</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isHashRoute = link.path.includes('#');
            const isActive = isHashRoute
              ? location.pathname === link.path.split('#')[0] && location.hash === '#' + link.path.split('#')[1]
              : location.pathname === link.path && !location.hash;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-cyan',
                  isActive ? 'text-brand-cyan' : 'text-white/70'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/#contact" className="inline-block bg-gradient-to-r from-[#9b5de5] to-[#3a86ff] hover:from-[#b073f5] hover:to-[#5597ff] text-white font-bold py-2.5 px-6 rounded-full shadow-[0_0_20px_rgba(155,93,229,0.3)] hover:shadow-[0_0_25px_rgba(155,93,229,0.5)] transform hover:-translate-y-0.5 transition-all duration-300">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 pt-24 px-6',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold hover:text-brand-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full py-4 text-xl mt-4 text-center block">
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
