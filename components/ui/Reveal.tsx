
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50); 
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        // Umbral más bajo en móviles para que aparezca más rápido al hacer scroll
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const failsafe = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Reducido de 1.5s a 1s

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      clearTimeout(failsafe);
    };
  }, [priority]);

  return (
    <div ref={ref} style={{ width }} className="relative">
      <div
        className={`transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};
