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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            aria-label="Ir al inicio de Kinac"
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={(e) => handleNavClick(e, '#')}
          >
            <img 
              src="/assets/logo.webp" 
              alt="Logo de Kinac" 
              width="70"
              height="70"
              className="logo-img"
              // @ts-ignore
              fetchpriority="high"
            />
          </a>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                  className={`flex items-center gap-1.5 font-bold transition-colors text-xs uppercase tracking-widest ${
                    link.external 
                    ? 'text-brand-orange hover:opacity-80' 
                    : 'text-gray-700 hover:text-brand-blue'
                  }`}
                >
                  {link.external && <Instagram className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
            </div>
            
            <Button 
              size="sm" 
              variant="primary"
              aria-label="Agendar turno por WhatsApp"
              className="text-[11px] px-5 py-2.5 uppercase tracking-wider"
              onClick={onSchedule}
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              TURNOS
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button 
              size="sm" 
              variant="primary" 
              aria-label="Agendar turno"
              className="text-[10px] px-3 h-9 uppercase" 
              onClick={onSchedule}
            >
                TURNOS
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-2xl animate-in slide-in-from-top-5 duration-200 border-t border-gray-100">
          <div className="px-6 pt-6 pb-10 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 py-4 rounded-xl text-xl font-bold border-b border-gray-50 last:border-0 ${
                    link.external ? 'text-brand-orange' : 'text-gray-900'
                }`}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="secondary" className="w-full text-lg py-5" onClick={() => { setIsOpen(false); onSchedule(); }}>
                Solicitar Turno
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;