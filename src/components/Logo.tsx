import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-semibold text-gray-800 relative">
        <Image 
          src="/logo.png" 
          alt="taproot" 
          width={96} 
          height={32} 
          className="h-8 w-auto" 
          priority
        />
      </span>
    </div>
  );
};

export default Logo;