
import React from 'react';
import { PAIN_POINTS } from '../constants';
import { Reveal } from './ui/Reveal';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">¿El dolor te detiene?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sabemos lo frustrante que es vivir limitado. Entendemos tu dolor y tenemos un plan para resolverlo.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, index) => (
            <Reveal key={point.id} delay={index * 100}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-sky/30 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-300">
                  <point.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
