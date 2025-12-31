
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-md hover:shadow-lg focus:ring-brand-blue hover:scale-105",
    secondary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-md hover:shadow-lg focus:ring-brand-orange hover:scale-105",
    outline: "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-primary-50 focus:ring-brand-blue hover:scale-105",
    ghost: "text-gray-600 hover:text-brand-blue hover:bg-primary-50 focus:ring-gray-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
