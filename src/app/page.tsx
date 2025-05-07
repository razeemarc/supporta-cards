import React from 'react';

import Hero from '../components/Hero';
import ProfileCardImage from '../components/ProfileCardImage';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
     
      <Hero />
      <ProfileCardImage />
      <HowItWorks />
      <ProductShowcase/>
    </div>
  );
}