
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
      {/* Decorative Circles with Brand Colors */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Copy */}
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal priority>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-brand-blue text-sm font-semibold border border-primary-200">
                    <MapPin className="w-4 h-4" />
                    <span>Recoleta, Buenos Aires</span>
                </div>
                <button 
                  onClick={onPromoSchedule}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/15 text-brand-orange text-sm font-bold border border-brand-yellow animate-pulse hover:scale-105 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                    <Gift className="w-4 h-4" />
                    <span>Promo Enero: +1 Clase Gratis</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={100} priority>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Recuperá tu movimiento, <span className="text-brand-blue">potenciá tu bienestar.</span>
              </h1>
            </Reveal>

            <Reveal delay={200} priority>
              <div className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
                <p className="font-semibold text-brand-blue/80 uppercase tracking-wide text-sm md:text-base mb-2">
                  Kinesiología · Actividad física adultos · Rehabilitación deportiva
                </p>
                <p>Un espacio profesional para entrenar sin miedo.</p>
              </div>
            </Reveal>

            <Reveal delay={300} priority>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto shadow-xl shadow-brand-orange/20" 
                  onClick={onSchedule}
                >
                  Solicitar Evaluación
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400} priority>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                     <img key={i} loading="lazy" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://picsum.photos/seed/kinac${i}/100/100`} alt="user" />
                  ))}
                  <div className="h-8 w-8 rounded-full bg-gray-100 ring-2 ring-white flex items-center justify-center text-xs font-bold text-gray-500">+</div>
                </div>
                <div className="text-sm">
                  <div className="flex text-brand-yellow mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="font-medium text-gray-700">Comunidad Activa</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Image */}
          <div className="order-2 relative mt-8 lg:mt-0">
            <Reveal delay={200} priority>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-auto md:h-[600px] border-4 border-white ring-1 ring-gray-100">
                 <img 
                   src="https://i.postimg.cc/qR8RRLQ2/image.png" 
                   alt="Sala de ejercicios Kinac Recoleta" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                   // @ts-ignore
                   fetchpriority="high"
                 />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl hidden md:block border border-gray-100 z-20 min-w-[240px]">
                 <div className="flex items-center gap-4">
                   <div className="bg-primary-50 p-2.5 rounded-xl border border-primary-100">
                     <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                   </div>
                   <div>
                     <p className="text-xs text-brand-sky font-bold uppercase tracking-wider mb-0.5">Espacio Pro</p>
                     <p className="text-lg font-bold text-gray-900 font-serif">Equipamiento Moderno</p>
                   </div>
                 </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
