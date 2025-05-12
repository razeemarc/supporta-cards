import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-gray-700">PRODUCT</Link>
          <Link href="#" className="text-sm font-medium text-gray-700">CART</Link>
          <Link href="#" className="text-sm font-medium text-gray-700">MY ORDER</Link>
          <Link href="#" className="text-sm font-medium text-gray-700">PROFILE</Link>
        </div>
        
        <Button variant="primary">
          Talk to Us
         
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;