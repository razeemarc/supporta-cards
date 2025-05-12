import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <div className="w-full max-w-4xl bg-black shadow-lg flex flex-col relative overflow-hidden">
        {/* Main image section with gradient */}
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src="/portfolio1.png"
            alt="Portfolio background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          
          {/* Smoother gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.9) 90%, #000000 100%)',
              opacity: 1
            }}
          />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 w-full p-8 z-10">
            <h1 className="text-white text-5xl font-bold mb-2">Harshvardhan</h1>
            <h2 className="text-white text-xl mb-4">UI / UX Designer</h2>
            <p className="text-gray-300 text-sm max-w-md">
              Deploy, manage and troubleshoot cloud-native applications that scale without overwhelming your engineers with the complexity of Kubernetes.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['facebook', 'instagram', 'twitter', 'pinterest', 'linkedin', 'youtube'].map((social) => (
                <div key={social} className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                  {/* Social icons would go here */}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact section */}
        <div className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          
          <div className="space-y-4">
            {/* Email row */}
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black rounded-full">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <div className="text-gray-300">harshvardhan@gmail.com</div>
                <div className="text-gray-400 text-sm">harshvardhan@gmail.com</div>
              </div>
            </div>
            
            {/* Phone row */}
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div className="text-gray-300">+91 9123456789</div>
                <div className="text-gray-400 text-sm">+91 9123456789</div>
                <div className="text-gray-400 text-sm">+91 9123456789</div>
              </div>
            </div>
            
            {/* Address row */}
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black rounded-full">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <div className="text-gray-300">3rd floor, CSI Complex</div>
                <div className="text-gray-400 text-sm">Baker Junction</div>
                <div className="text-gray-400 text-sm">Kottayam, Kerala</div>
                <div className="text-gray-400 text-sm">682016</div>
              </div>
            </div>
            
            {/* Website row */}
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black rounded-full">
                <Globe size={20} className="text-white" />
              </div>
              <div>
                <div className="text-gray-300">Website</div>
                <div className="text-gray-400 text-sm">Editing workflow.tech into where you drag/drop is a single/effort</div>
                <div className="text-gray-400 text-sm">Editing workflow.tech into where you drag/drop is a single/effort</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;