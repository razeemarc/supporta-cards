import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
        The Smartest First Impression<br />You'll Ever Make.
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Built for leaders, founders, and high-impact professionals.<br />
        A digital identity that's instantly shareable, beautifully<br />
        designed, and paired with a premium NFC experience.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant="outline">
          Go to My Portfolio
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Button>
        
        <Button variant="primary">
          Start for Free
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Hero;