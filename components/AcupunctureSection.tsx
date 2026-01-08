import React from 'react';
import { Sparkles, Wind, Flame, Zap, MousePointer2, UserCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const AcupunctureSection: React.FC = () => {
  const techniques = [
    { icon: Flame, title: "Moxibustión", desc: "Calor terapéutico para activar la circulación." },
    { icon: Wind, title: "Ventosas", desc: "Liberación miofascial y desintoxicación." },
    { icon: Zap, title: "Electroacupuntura", desc: "Estimulación nerviosa para casos de dolor agudo." },
    { icon: MousePointer2, title: "Auriculoterapia", desc: "Puntos reflejos en la oreja para equilibrio sistémico." },
  ];

  return (
    <section id="acupuntura" className="py-16 md:py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 bg-gray-100">
                  <img 
                    src="/acupuncture.webp" 
                    alt="Profesional de Kinac realizando sesión de Acupuntura Clínica" 
                    width={600}
                    height={750}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Benefit Card */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-[260px] hidden md:block border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-brand-green/10 p-1.5 rounded-lg">
                        <UserCheck className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="font-bold text-xs text-brand-green uppercase tracking-widest text-brand-green">Equilibrio Kinac</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    La Acupuntura potencia la recuperación y reduce el estrés, equilibrando tu bienestar físico y emocional.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-green/20">
                <Sparkles className="w-4 h-4" />
                Medicina Tradicional China
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Restablecé tu flujo <br/> 
                <span className="text-brand-green">energético y vital.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A través de la inserción de agujas milimétricas, restablecemos la circulación energética. Es una opción terapéutica natural y efectiva para aliviar el dolor crónico y promover el movimiento libre.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techniques.map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="bg-primary-50 p-2.5 rounded-lg text-brand-blue group-hover:bg-brand-green group-hover:text-white transition-all">
                      <tech.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{tech.title}</h4>
                      <p className="text-xs text-gray-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcupunctureSection;