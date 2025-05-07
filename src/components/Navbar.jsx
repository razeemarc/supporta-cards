import React from 'react';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-700">PRODUCT</a>
          <a href="#" className="text-sm font-medium text-gray-700">CART</a>
          <a href="#" className="text-sm font-medium text-gray-700">MY ORDER</a>
          <a href="#" className="text-sm font-medium text-gray-700">PROFILE</a>
        </div>
        
        <Button variant="primary">
          Talk to Us
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;