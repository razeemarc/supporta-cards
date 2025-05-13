import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <div className="w-full max-w-4xl h-[1058px] bg-black shadow-lg flex flex-col relative overflow-hidden">
        {/* Overlay A.png in the top-left corner */}
        <div className="absolute top-5 left-5 z-20">
          <Image
            src="/A.png"
            alt="A overlay"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
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
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/threads.png"
                      alt="threads icon"
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Right side image */}
              <div className="relative w-[313px] h-[313px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t opacity-80"></div>
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
          
          {/* First row - Email, Phone, Address with horizontal icon layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm mb-8">
            {/* Email */}
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="rounded-full bg-black p-1">
                <Image
                    src="/icons/email-icon.png"
                    alt="mail icon"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                  />                </div>
              </div>
              <div>
                <div className="text-gray-300">harshvardhan@gmail.com</div>
                <div className="text-gray-400 text-sm">harshvardhan@gmail.com</div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="rounded-full bg-black p-1">
                <Image
                    src="/icons/whatsapp-icon.png"
                    alt="pjone icon"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div>
                <div className="text-gray-300">+91 9123456789</div>
                <div className="rounded-full bg-black p-1 pt-4">
                <Image
                    src="/icons/phone-icon.png"
                    alt="mail icon"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                  />
                <div className="text-gray-400 text-sm">+91 9123456789</div>
                <div className="text-gray-400 text-sm">+91 9123456789</div>
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="rounded-full bg-black p-1">
                <Image
                    src="/icons/address-icon.png"
                    alt="mail icon"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div>
                <div className="text-gray-300">3rd floor, CSI Complex</div>
                <div className="text-gray-400 text-sm">Baker Junction</div>
                <div className="text-gray-400 text-sm">Kottayam, Kerala</div>
                <div className="text-gray-400 text-sm">682016</div>
              </div>
            </div>
          </div>
          
          {/* Second row - Website with horizontal icon layout */}
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <div className="rounded-full bg-black p-1">
              <Image
                    src="/icons/website-icon.png"
                    alt="mail icon"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                  />
              </div>
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
  );
};

export default Portfolio;