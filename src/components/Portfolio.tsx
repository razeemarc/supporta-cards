import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <div className="w-full max-w-4xl h-[1058px] bg-black shadow-lg flex flex-col relative overflow-hidden">
        {/* Main image section with gradient */}
        <div className="relative w-full h-96 md:h-[500px] flex-grow">
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
          <div className="absolute top-100 bottom-0 left-0 w-full p-8 z-10">
            <div className="flex justify-between items-end">
              <div className="flex-1 ">
                <h1 className="text-white text-5xl font-bold mb-2">Harshvardhan</h1>
                <h2 className="text-white text-xl mb-4">UI / UX Designer</h2>
                <p className="text-gray-300 text-sm max-w-md">
                  Deploy, manage and troubleshoot cloud-native applications that scale without overwhelming your engineers with the complexity of Kubernetes.
                </p>
                
                {/* Social icons */}
                <div className="flex gap-4 mt-6">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/facebook.png"
                      alt="facebook icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/instagram.png"
                      alt="instagram icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/X.png"
                      alt="twitter icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/pinterest.png"
                      alt="pinterest icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/linkdin.png"
                      alt="linkedin icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/youtube.png"
                      alt="youtube icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Right side image */}
              <div className="relative w-[313px] h-[313px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t   opacity-80"></div>
                <Image
                  src="/porfolio2.png" 
                  alt="Profile portrait"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact section at the bottom */}
        <div className="bg-black text-white px-8 pb-12 mt-auto">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          {/* Row layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Email */}
            <div className="flex flex-col items-start">
              <div className="mb-2 p-2 bg-black rounded-full">
                <Mail size={20} className="text-white" />
              </div>
              <div className="text-gray-300">harshvardhan@gmail.com</div>
              <div className="text-gray-400 text-sm">harshvardhan@gmail.com</div>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-start">
              <div className="mb-2 p-2 bg-black rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <div className="text-gray-300">+91 9123456789</div>
              <div className="text-gray-400 text-sm">+91 9123456789</div>
              <div className="text-gray-400 text-sm">+91 9123456789</div>
            </div>
            {/* Address */}
            <div className="flex flex-col items-start">
              <div className="mb-2 p-2 bg-black rounded-full">
                <MapPin size={20} className="text-white" />
              </div>
              <div className="text-gray-300">3rd floor, CSI Complex</div>
              <div className="text-gray-400 text-sm">Baker Junction</div>
              <div className="text-gray-400 text-sm">Kottayam, Kerala</div>
              <div className="text-gray-400 text-sm">682016</div>
            </div>
            {/* Website */}
            <div className="flex flex-col items-start">
              <div className="mb-2 p-2 bg-black rounded-full">
                <Globe size={20} className="text-white" />
              </div>
              <div className="text-gray-300">Website</div>
              <div className="text-gray-400 text-sm">Editing workflow.tech into where you drag/drop is a single/effort</div>
              <div className="text-gray-400 text-sm">Editing workflow.tech into where you drag/drop is a single/effort</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;