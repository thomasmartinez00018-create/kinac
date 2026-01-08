import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Navigation, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import Button from './ui/Button';

interface FooterProps {
  onSchedule: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSchedule }) => {
  const [loadMap, setLoadMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } 
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="ubicacion" className="bg-brand-blue text-gray-200 scroll-mt-24">
      <div ref={mapRef} className="w-full h-[350px] md:h-[450px] bg-gray-100 relative overflow-hidden">
        {loadMap ? (
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2238497676646!2d-58.4078438!3d-34.5951911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf92e037037%3A0x3a7adaf9f6bbba3!2sKINAC%20%7C%20Centro%20de%20Kinesiolog%C3%ADa%20y%20Acupuntura!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Kinac Recoleta"
          ></iframe>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
            <MapPin className="w-10 h-10 text-brand-blue/20 mb-2" />
            <p className="text-gray-400 text-sm font-medium">Cargando mapa...</p>
          </div>
        )}

        <div className="absolute top-6 left-6 z-10 hidden md:block max-w-sm">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-gray-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm">
              <img 
                src="/logo.webp" 
                alt="Kinac" 
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-lg leading-tight">KINAC Recoleta</h4>
              <p className="text-gray-500 text-xs mt-1 mb-3">{CONTACT_INFO.address}</p>
              <a 
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand-sky hover:text-brand-blue transition-colors"
              >
                <Navigation className="w-3 h-3 mr-1" />
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-xl p-2 inline-block mb-4 shadow-md">
              <img 
                src="/logo.webp" 
                alt="Kinac Logo" 
                width={70}
                height={70}
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-6 text-primary-100">
              Kinesiología y Acupuntura en Recoleta. Especialistas en rehabilitación deportiva y columna.
            </p>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-primary-200 mb-4">Comunidad</h5>
              <a 
                href={CONTACT_INFO.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group text-white hover:text-brand-yellow transition-colors"
              >
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-brand-orange/20 transition-all">
                  <Instagram className="w-5 h-5"/>
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{CONTACT_INFO.instagram}</p>
                  <p className="text-[10px] text-primary-300 mt-1 flex items-center gap-1 uppercase tracking-tighter">
                    Seguinos para ver más <ArrowUpRight className="w-2 h-2" />
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-primary-100 hover:text-brand-yellow transition-colors text-sm flex items-center gap-2"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-sky flex-shrink-0" />
                <span className="max-w-[200px]">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-sky flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-sky flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div className="md:text-right" id="contact">
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Turnos</h4>
            <p className="text-sm text-primary-100 mb-4">
              Respondé 4 preguntas simples para asesorarte mejor.
            </p>
            <Button 
              variant="secondary" 
              className="w-full md:w-auto shadow-xl shadow-black/20"
              onClick={onSchedule}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Turno
            </Button>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} Kinac - Kinesiología y Acupuntura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;