
import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
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
      {/* Clinical Services Section - Dominated by Brand Blue */}
      <section id="servicios" className="py-12 md:py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-gray-200 pb-6">
            <Reveal>
              <div>
                <span className="text-brand-blue font-bold tracking-wide uppercase text-xs font-sans">Consultorio Especializado</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Tratamientos Kinésicos</h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Sesiones profesionales con Licenciados UBA. Combinamos terapia manual, ejercicios terapéuticos y fisioterapia analgésica para tu recuperación integral.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinicalServices.map((service, index) => {
              const isDeportiva = service.id === 'deportiva';
              return (
                <Reveal key={service.id} delay={index * 100}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-sky/30 hover:shadow-md transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-primary-100 transition-colors duration-300 overflow-hidden relative">
                        {service.iconUrl ? (
                          <img 
                            src={service.iconUrl} 
                            alt={service.title} 
                            className={`w-full h-full group-hover:scale-110 transition-transform duration-300 ${isDeportiva ? 'object-contain p-2' : 'object-cover'}`} 
                          />
                        ) : (
                          service.icon && <service.icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Reveal delay={300}>
              <Button onClick={onSchedule} className="shadow-lg shadow-brand-blue/10">
                Solicitar Turno Kinésico <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Group Classes Section - Dominated by Brand Orange/Yellow */}
      <section id="clases" className="py-12 md:py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <Reveal>
              <span className="text-brand-orange font-bold tracking-wide uppercase text-xs font-sans">Comunidad Kinac</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">Clases y Talleres Grupales</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Espacios de movimiento supervisado para mantenerte sano y activo en un entorno de cuidado.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {groupServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <div className={`relative bg-accent-50/30 p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col items-center text-center ${service.promo ? 'border-brand-yellow bg-brand-yellow/5 shadow-lg scale-105 z-10' : 'border-accent-100 hover:border-brand-orange/30 hover:shadow-lg'}`}>
                  
                  {service.promo && (
                    <div className="absolute -top-4 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {service.promo}
                    </div>
                  )}

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm z-10 relative overflow-hidden">
                      {service.iconUrl ? (
                        <img 
                          src={service.iconUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      ) : (
                        service.icon && <service.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-brand-yellow rounded-full blur-xl opacity-20"></div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
