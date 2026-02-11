import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Activity, Zap, CreditCard, Heart, Sparkles, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: { reason: string; urgency: string; budget: string }) => void;
}

const PreQualModal: React.FC<PreQualModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: '',
    urgency: '',
    budget: ''
  });

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ reason: '', urgency: '', budget: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOptionSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (step < 3) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const isStepComplete = () => {
    if (step === 1) return !!formData.reason;
    if (step === 2) return !!formData.urgency;
    if (step === 3) return !!formData.budget;
    return false;
  };

  const steps = [
    {
      title: "¿Qué te trae hoy a Kinac?",
      subtitle: "Seleccioná el motivo principal de tu consulta.",
      field: 'reason',
      options: [
        { label: 'Dolor o Lesión Deportiva', icon: Activity, val: 'Rehabilitación Deportiva' },
        { label: 'Kinesiología Integral', icon: Heart, val: 'Kinesiología' },
        { label: 'Acupuntura Clínica', icon: Sparkles, val: 'Acupuntura' },
        { label: 'Clases / Talleres de Movimiento', icon: Activity, val: 'Clases Grupales' },
      ]
    },
    {
      title: "¿Cuál es tu nivel de urgencia?",
      subtitle: "Esto nos ayuda a priorizar tu agenda.",
      field: 'urgency',
      options: [
        { label: 'Dolor agudo (empezó hace poco)', icon: AlertCircle, val: 'Urgencia Alta (Dolor Agudo)' },
        { label: 'Molestia crónica (hace tiempo)', icon: Activity, val: 'Dolor Crónico' },
        { label: 'Preventivo / Mantenimiento', icon: Heart, val: 'Preventivo/Salud' },
      ]
    },
    {
      title: "Presupuesto / Forma de pago",
      subtitle: "Contamos con atención particular y reintegros.",
      field: 'budget',
      options: [
        { label: 'Atención Particular', icon: CreditCard, val: 'Particular' },
        { label: 'Obra Social / Prepaga (Reintegro)', icon: CreditCard, val: 'OS/Prepaga Reintegro' },
        { label: 'Consultar Presupuesto', icon: Zap, val: 'Consulta Presupuesto' },
      ]
    }
  ];

  const currentStepData = steps[step - 1];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden transform transition-all duration-500 animate-in zoom-in-95 fade-in">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
          <div 
            className="h-full bg-brand-blue transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
              Paso {step} de 3
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
              {currentStepData.title}
            </h3>
            <p className="text-gray-500">{currentStepData.subtitle}</p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 mb-10">
            {currentStepData.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(currentStepData.field, option.val)}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-300 group ${
                  (formData as any)[currentStepData.field] === option.val
                  ? 'border-brand-blue bg-primary-50 ring-4 ring-brand-blue/10'
                  : 'border-gray-100 bg-white hover:border-brand-blue/30 hover:bg-gray-50'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  (formData as any)[currentStepData.field] === option.val
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-brand-blue'
                }`}>
                  <option.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <span className={`font-bold block transition-colors ${
                    (formData as any)[currentStepData.field] === option.val ? 'text-brand-blue' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-all ${
                  (formData as any)[currentStepData.field] === option.val ? 'text-brand-blue translate-x-1' : 'text-gray-300'
                }`} />
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)}
                className="text-gray-500 font-bold text-sm hover:text-gray-900 transition-colors"
              >
                Volver
              </button>
            ) : <div />}

            {step === 3 ? (
              <Button 
                id="btn_wsp_final_confirmado"
                variant="primary" 
                className="shadow-xl" 
                disabled={!isStepComplete()}
                onClick={() => onComplete(formData)}
              >
                Continuar a WhatsApp
              </Button>
            ) : (
              <div className="text-xs text-gray-400 italic">
                Seleccioná una opción para continuar
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Atención personalizada · Equipo UBA · Recoleta
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreQualModal;