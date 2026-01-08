
import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

interface MethodologyProps {
  onSchedule: () => void;
}

const Methodology: React.FC<MethodologyProps> = ({ onSchedule }) => {
  return (
    <section id="metodologia" className="py-12 md:py-16 bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                {/* Single High-Quality Image Container */}
                <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 relative group">
                  <img 
                    src="https://i.postimg.cc/3x8ZJSRV/image.png" 
                    alt="Licenciada Silvina realizando tratamiento en Kinac" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Decorative background elements using brand colors */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-sky/10 rounded-full mix-blend-multiply filter blur-2xl -z-10 opacity-70"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-yellow/10 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60"></div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-brand-blue rounded-full text-sm font-semibold mb-4 border border-primary-100">
                <GraduationCap className="w-4 h-4" />
                Equipo Profesional UBA
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Más que un consultorio, <br className="hidden md:block"/>
                <span className="text-brand-blue">un lugar de encuentro y bienestar.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo de Licenciados se formó en la Universidad de Buenos Aires (UBA). Combinamos la rigurosidad clínica con la calidez de un espacio diseñado para que recuperes tu mejor versión en un entorno seguro y moderno.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onSchedule} className="w-full md:w-auto shadow-lg shadow-brand-blue/10">
                  Agendar reunión <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
