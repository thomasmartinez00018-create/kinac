import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

interface ServicesProps {
  onSchedule: () => void;
}

const Services: React.FC<ServicesProps> = ({ onSchedule }) => {
  const clinicalServices = SERVICES.filter(s => s.category === 'clinical');
  const groupServices = SERVICES.filter(s => s.category === 'group');

  return (
    <>
      <section id="servicios" className="py-12 md:py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-gray-200 pb-6">
            <Reveal>
              <div>
                <span className="text-brand-blue font-bold tracking-wide uppercase text-xs">Consultorio Especializado</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Tratamientos Kinésicos</h2>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinicalServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-sky/30 transition-all h-full flex flex-col group">
                  <div className="mb-6 w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center overflow-hidden">
                    {service.iconUrl ? (
                      <img 
                        src={service.iconUrl} 
                        alt={service.title} 
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      service.icon && <service.icon className="w-7 h-7 text-brand-blue" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="clases" className="py-12 md:py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Clases y Talleres Grupales</h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {groupServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <div className={`relative bg-white p-8 rounded-2xl border transition-all h-full flex flex-col items-center text-center ${service.promo ? 'border-brand-orange bg-orange-50/20' : 'border-gray-100'}`}>
                  {service.promo && (
                    <div className="absolute -top-4 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {service.promo}
                    </div>
                  )}
                  <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm border border-brand-orange/10">
                    {service.icon && <service.icon className="w-8 h-8" aria-hidden="true" />}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;