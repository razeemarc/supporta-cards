import React from 'react';

import Hero from '../components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import NfcProfileBanner from '@/components/ProfileBanner';
import Portfilio from '@/components/Portfolio';


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
     
      <Hero />
      {/* <ProfileCardImage /> */}
      <Portfilio/>
      <HowItWorks />
      <ProductShowcase/>
      <NfcProfileBanner/>
    </div>
  );
}