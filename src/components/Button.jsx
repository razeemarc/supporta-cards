import React from 'react';

const Button = ({ children, variant, className = "" }) => {
  return (
    <button 
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