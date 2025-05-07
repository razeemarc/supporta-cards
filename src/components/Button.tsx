import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'outline', 
  className = "", 
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
        variant === 'primary' 
          ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
          : 'border border-gray-300 hover:bg-gray-100'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;