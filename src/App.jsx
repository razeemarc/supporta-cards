import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <Hero />
    </div>
  );
}