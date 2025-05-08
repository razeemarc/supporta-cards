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
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
        variant === 'primary'
          ? 'bg-[#6872FF] text-white hover:bg-[#6872FF]'
          : 'bg-white text-[#6872FF] border border-indigo-100 hover:bg-indigo-50'
      } ${className}`}
    >
      {children}
      {variant === 'primary' && (
        <div className="flex items-center justify-center bg-white rounded-full w-6 h-6 ml-1">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#6872FF]"
          >
            <path 
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      )}
      {variant === 'outline' && (
        <div className="flex items-center justify-center bg-indigo-100 rounded-full w-6 h-6 ml-1">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#6872FF]"
          >
            <path 
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;