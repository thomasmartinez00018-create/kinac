import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import AcupunctureSection from './components/AcupunctureSection';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import PromoPopup from './components/PromoPopup';
import PreQualModal from './components/PreQualModal';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isPreQualOpen, setIsPreQualOpen] = useState(false);
  const [isPromoFlow, setIsPromoFlow] = useState(false);

  // Inicia el flujo de pre-cualificación
  const startContactFlow = (isPromo = false) => {
    setIsPromoFlow(isPromo);
    setIsPreQualOpen(true);
  };

  // Finaliza el flujo y abre WhatsApp con los datos
  const handleFinalContact = (data: { reason: string; urgency: string; budget: string }) => {
    // Tracking de Meta Pixel (Lead Event)
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', {
        content_name: isPromoFlow ? 'Promo Febrero Concierge' : 'General Inquiry Concierge',
        status: 'Qualified',
        content_category: data.reason
      });
    }

    // Tracking de Google Ads
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        'event_category': 'Engagement',
        'event_label': `Qualified: ${data.reason}`
      });
    }

    const baseMessage = isPromoFlow 
      ? "¡Hola Kinac! Me interesa la PROMO FEBRERO (2+1). "
      : "¡Hola Kinac! Me gustaría solicitar un turno. ";
    
    const details = `\n\n📋 Mis datos de consulta:\n- Motivo: ${data.reason}\n- Urgencia: ${data.urgency}\n- Presupuesto/Pago: ${data.budget}`;
    
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(baseMessage + details)}`;
    window.open(url, '_blank');
    setIsPreQualOpen(false);
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen selection:bg-primary-200 selection:text-primary-900">
      <Navbar onSchedule={() => startContactFlow(false)} />
      <main>
        <Hero 
          onSchedule={() => startContactFlow(false)} 
          onPromoSchedule={() => startContactFlow(true)} 
        />
        <ProblemSection />
        <Services onSchedule={() => startContactFlow(false)} />
        <AcupunctureSection />
        <Methodology onSchedule={() => startContactFlow(false)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onSchedule={() => startContactFlow(false)} />
      
      <PromoPopup onClaim={() => startContactFlow(true)} />
      <FloatingCTA onClick={() => startContactFlow(false)} />

      {/* Nuevo Modal de Pre-cualificación */}
      <PreQualModal 
        isOpen={isPreQualOpen} 
        onClose={() => setIsPreQualOpen(false)}
        onComplete={handleFinalContact}
      />
    </div>
  );
};

export default App;