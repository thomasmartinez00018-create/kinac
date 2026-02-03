import React, { useEffect, useState } from 'react';
import { X, Gift, Sparkles, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

interface PromoPopupProps {
  onClaim: () => void;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ onClaim }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem('hasSeenPromoFeb');
    
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setShouldRender(true);
        setTimeout(() => setIsVisible(true), 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenPromoFeb', 'true');
    setTimeout(() => setShouldRender(false), 300);
  };

  const handleClaim = () => {
    onClaim();
    handleClose();
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[70] flex items-center justify-center px-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className={`relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        
        {/* Header using Brand Orange */}
        <div className="bg-gradient-to-r from-brand-orange to-accent-600 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-white rounded-full blur-2xl"></div>
          </div>
          
          <button 
            onClick={handleClose} 
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar promoción"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/30 animate-pulse">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-tight">¡Promo Febrero!</h3>
            <p className="text-white/80 font-medium text-sm mt-1">Gimnasia Integradora para Adultos</p>
          </div>
        </div>

        <div className="p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-orange font-bold bg-accent-50 py-2 px-4 rounded-lg inline-flex mx-auto border border-brand-orange/10">
            <Sparkles className="w-5 h-5" />
            <span>2 Clases + 1 de Regalo</span>
          </div>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Continuá el año en movimiento. Abonando 2 clases semanales, te regalamos la 3ra para que vengas más veces.
            <br/>
            <span className="text-xs text-gray-600 mt-2 block font-medium">(Válido solo por el mes de Febrero)</span>
          </p>

          <div className="space-y-3">
            <Button onClick={handleClaim} variant="secondary" className="w-full justify-center shadow-brand-orange/20">
              Quiero mi clase de regalo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <button 
              onClick={handleClose}
              className="text-gray-600 text-sm font-bold hover:text-gray-900 transition-colors py-2"
            >
              No, gracias.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;