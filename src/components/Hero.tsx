import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
        The Smartest First Impression<br />You&apos;ll Ever Make.
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Built for leaders, founders, and high-impact professionals.<br />
        A digital identity that&apos;s instantly shareable, beautifully<br />
        designed, and paired with a premium NFC experience.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant="outline">
          Go to My Portfolio
          <ArrowRight size={20} />
        </Button>
        
        <Button variant="primary">
          Start for Free
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;