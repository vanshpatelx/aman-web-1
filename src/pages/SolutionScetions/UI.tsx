import React from 'react';
import { X } from 'lucide-react';

// --- Types ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

interface SectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray';
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// --- Components ---

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-sm",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white focus:ring-slate-500 shadow-sm",
    outline: "border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 bg-transparent focus:ring-blue-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc, ctaText = "Get Started", onCtaClick }) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 mt-12 sm:mt-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button type='button' onClick={onCtaClick} className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
            {ctaText}
          </button>
            <button type='button' className="border border-white text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
            Learn more
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({ title, description, children, className = '', bg = 'white' }) => {
  return (
    <section className={`py-16 md:py-24 ${bg === 'gray' ? 'bg-[#00020F]' : 'bg-[#00020F]'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          {description && <p className="text-lg text-[#A7ADBE]">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#00041F] p-8 py-10 rounded-xl shadow-sm border border-[#000730] hover:shadow-md transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-blue-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold tracking-wider text-white mb-3">{title}</h3>
    <p className="text-[#A7ADBE] leading-relaxed">{description}</p>
  </div>
);

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 transform transition-all scale-100 opacity-100 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button type='button' title='close'
            onClick={onClose} 
            className="p-1 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};