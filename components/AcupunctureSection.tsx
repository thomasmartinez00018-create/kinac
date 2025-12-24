
import React from 'react';
import { Sparkles, Wind, Flame, Zap, MousePointer2, UserCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

interface AcupunctureSectionProps {
  onSchedule: () => void;
}

const AcupunctureSection: React.FC<AcupunctureSectionProps> = ({ onSchedule }) => {
  const techniques = [
    { icon: Flame, title: "Moxibustión", desc: "Calor terapéutico para activar la circulación." },
    { icon: Wind, title: "Ventosas", desc: "Liberación miofascial y desintoxicación." },
    { icon: Zap, title: "Electroacupuntura", desc: "Estimulación nerviosa para casos de dolor agudo." },
    { icon: MousePointer2, title: "Auriculoterapia", desc: "Puntos reflejos en la oreja para equilibrio sistémico." },
  ];

  return (
    <section id="acupuntura" className="py-20 md:py-28 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                  <img 
                    src="https://i.postimg.cc/25WjcwsM/Gemini-Generated-Image-7lfbt87lfbt87lfb.png" 
                    alt="Sesión de Acupuntura Profesional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Benefit Card */}
                <div className="absolute -bottom-6 -right-6 bg-primary-900 text-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <UserCheck className="w-5 h-5 text-accent-400" />
                    <span className="font-bold text-sm uppercase tracking-wider">Sinergia Kinac</span>
                  </div>
                  <p className="text-sm text-primary-100 leading-relaxed">
                    La Acupuntura junto a la Kinesiología potencia la recuperación de la fuerza y reduce el stress.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4" />
                Medicina Tradicional China
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Restablecé tu flujo <br/> 
                <span className="text-primary-600">energético y vital.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A través de la inserción de agujas milimétricas, restablecemos la circulación energética. Es una opción terapéutica natural y efectiva para aliviar el dolor crónico y promover el movimiento libre.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {techniques.map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="bg-primary-50 p-2.5 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <tech.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{tech.title}</h4>
                      <p className="text-xs text-gray-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onSchedule} variant="primary" size="lg">
                  Consultar por Acupuntura
                </Button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcupunctureSection;
