import React from 'react';
import { Star, MapPin, Gift } from 'lucide-react';
import Button from './ui/Button';
import { Reveal } from './ui/Reveal';

interface HeroProps {
  onSchedule: () => void;
  onPromoSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSchedule, onPromoSchedule }) => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal priority>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-blue text-sm font-bold border border-primary-200 shadow-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Recoleta, Buenos Aires</span>
                </div>
                <button 
                  onClick={onPromoSchedule}
                  aria-label="Ver promoción de Enero"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-sm font-bold animate-pulse hover:scale-105 transition-all cursor-pointer shadow-md"
                >
                    <Gift className="w-4 h-4" />
                    <span>Promo Enero: +1 Clase Gratis</span>
                </button>
              </div>
            </Reveal>

            <Reveal priority>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Recuperá tu movimiento, <span className="text-brand-blue">potenciá tu bienestar.</span>
              </h1>
            </Reveal>

            <Reveal delay={50} priority>
              <div className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                <p className="font-bold text-brand-blue/90 uppercase tracking-wide text-sm mb-2 text-brand-blue">
                  Kinesiología · Actividad física adultos · Rehabilitación deportiva
                </p>
                <p>Un espacio profesional para entrenar sin miedo y sin dolor.</p>
              </div>
            </Reveal>

            <Reveal delay={100} priority>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  aria-label="Solicitar evaluación ahora"
                  className="w-full sm:w-auto shadow-xl" 
                  onClick={onSchedule}
                >
                  Solicitar Evaluación
                </Button>
              </div>
            </Reveal>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                   <img 
                    key={i} 
                    loading="lazy" 
                    width="32" 
                    height="32" 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" 
                    src={`https://picsum.photos/seed/kinac${i}/64/64`} 
                    alt={`Paciente Kinac ${i}`} 
                   />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-brand-yellow mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="font-bold text-gray-800 underline decoration-brand-sky">Reseñas 5.0 Google</p>
              </div>
            </div>
          </div>

          <div className="order-2 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:h-[550px] border-4 border-white bg-gray-100">
               <img 
                 src="https://i.postimg.cc/qR8RRLQ2/image.png" 
                 alt="Sala de kinesiología y entrenamiento Kinac" 
                 width="800"
                 height="600"
                 className="w-full h-full object-cover"
                 // @ts-ignore
                 fetchpriority="high"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;