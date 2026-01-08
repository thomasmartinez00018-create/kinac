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
    <section className="relative hero-critical-bg overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24 pb-12 lg:pt-32 lg:pb-20">
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
                  aria-label="Ver promoción de Enero de clases gratuitas"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-sm font-bold animate-pulse hover:scale-105 transition-all cursor-pointer shadow-md"
                >
                    <Gift className="w-4 h-4" />
                    <span>Promo Enero: +1 Clase Gratis</span>
                </button>
              </div>
            </Reveal>

            <Reveal priority>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6 hero-title-placeholder">
                Recuperá tu movimiento, <span className="text-brand-blue">potenciá tu bienestar.</span>
              </h1>
            </Reveal>

            <Reveal priority>
              <div className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                <p className="font-bold text-brand-blue uppercase tracking-wide text-sm mb-2">
                  Kinesiología · Actividad física adultos · Rehabilitación deportiva
                </p>
                <p>Un espacio profesional para entrenar sin miedo y sin dolor.</p>
              </div>
            </Reveal>

            <Reveal priority>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  aria-label="Solicitar evaluación profesional inicial"
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
                    width={32} 
                    height={32} 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover bg-gray-100" 
                    src={`https://picsum.photos/seed/kinac${i}/64/64`} 
                    alt={`Paciente de Kinac ${i}`} 
                   />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-brand-yellow mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-bold text-gray-800 underline decoration-brand-sky">Reseñas 5.0 Google</p>
              </div>
            </div>
          </div>

          <div className="order-2 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] md:h-[600px] border-4 border-white bg-gray-100">
               <img 
                 src="/image.webp" 
                 alt="Sala de kinesiología y entrenamiento Kinac en Recoleta" 
                 width={800}
                 height={1067}
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