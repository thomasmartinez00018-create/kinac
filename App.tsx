import React from 'react';
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
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  // Función centralizada para manejar la redirección a WhatsApp y el tracking de eventos
  const handleContact = (isPromo = false) => {
    // Tracking de Meta Pixel (Lead Event)
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', {
        content_name: isPromo ? 'Promo Enero WhatsApp' : 'General Inquiry WhatsApp',
        status: 'Sent'
      });
    }

    // Tracking de Google Ads / GTM opcional (ya manejado por GTM si está configurado)
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        'event_category': 'Engagement',
        'event_label': isPromo ? 'Promo Enero' : 'Contacto General'
      });
    }

    const message = isPromo 
      ? "Hola Kinac! Me gustaría aprovechar la Promo Enero (2+1) para el Taller Corporal. ¿Me podrían dar más información?"
      : "Hola Kinac! Me gustaría recibir información sobre los turnos y servicios de kinesiología y acupuntura. Gracias!";

    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Abrir en nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen selection:bg-primary-200 selection:text-primary-900">
      <Navbar onSchedule={() => handleContact(false)} />
      <main>
        <Hero 
          onSchedule={() => handleContact(false)} 
          onPromoSchedule={() => handleContact(true)} 
        />
        <ProblemSection />
        <Services onSchedule={() => handleContact(false)} />
        <AcupunctureSection />
        <Methodology onSchedule={() => handleContact(false)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onSchedule={() => handleContact(false)} />
      
      <PromoPopup onClaim={() => handleContact(true)} />
      <FloatingCTA onClick={() => handleContact(false)} />
    </div>
  );
};

export default App;