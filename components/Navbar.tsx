
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Calendar } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

interface NavbarProps {
  onSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return; // Allow normal link behavior for external
    
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={(e) => handleNavClick(e, '#')}
          >
            <img 
              src="https://i.postimg.cc/c4Rr5ddD/Logo.png" 
              alt="Kinac Logo" 
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                  className={`flex items-center gap-1.5 font-semibold transition-colors text-xs uppercase tracking-widest ${
                    link.external 
                    ? 'text-brand-orange hover:text-brand-orange/80' 
                    : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {link.external && <Instagram className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
            </div>
            
            <Button 
              size="sm" 
              variant="outline"
              className="text-[10px] px-4 py-2 uppercase tracking-widest border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              onClick={onSchedule}
            >
              <Calendar className="w-3 h-3 mr-2" />
              Agendar Turno
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button size="sm" variant="secondary" className="text-[10px] px-3 py-1.5 h-8 uppercase tracking-tighter" onClick={onSchedule}>
                Turnos
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-blue focus:outline-none p-1.5"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-6 pt-6 pb-10 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 px-3 py-4 rounded-xl text-xl font-serif font-bold border-b border-gray-50 last:border-0 ${
                    link.external ? 'text-brand-orange' : 'text-gray-800'
                }`}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
              >
                {link.external && <Instagram className="w-6 h-6" />}
                {link.label}
              </a>
            ))}
            <div className="pt-6">
              <Button variant="secondary" className="w-full text-lg py-5 shadow-xl shadow-brand-orange/20" onClick={() => { setIsOpen(false); onSchedule(); }}>
                Solicitar Evaluación
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
