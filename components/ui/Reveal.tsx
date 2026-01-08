import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  priority?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  priority = false 
}) => {
  const [isVisible, setIsVisible] = useState(priority); // Si es prioridad, es visible por defecto
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // No necesitamos observer para elementos prioritarios

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [priority]);

  return (
    <div ref={ref} style={{ width }} className="relative">
      <div
        className={`transition-all duration-500 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${priority ? 0 : delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};