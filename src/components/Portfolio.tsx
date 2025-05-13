import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-6 mb-10 px-2 sm:px-4">
      <div className="w-full max-w-6xl bg-black shadow-lg flex flex-col relative overflow-hidden rounded-lg">
        {/* Overlay A.png */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
          <Image
            src="/A.png"
            alt="A overlay"
            width={50}
            height={50}
            className="sm:w-[80px] sm:h-[80px]"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Header section with background */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/portfolio1.png"
            alt="Portfolio background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.9) 90%, #000000 100%)',
            }}
          />
          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 z-10">
            <div className="flex flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h1
                  className="text-white font-medium text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-tight"
                  style={{ fontFamily: 'Kalnia' }}
                >
                  Harshvardhan
                </h1>
                <h2
                  className="text-white font-normal text-[12px] sm:text-[16px] md:text-[20px] lg:text-[26px] leading-tight"
                  style={{ fontFamily: 'Merriweather' }}
                >
                  UI / UX Designer
                </h2>
                <p
                  className="text-gray-300 mt-2 sm:mt-3 text-[11px] sm:text-[13px] md:text-[15px] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0"
                  style={{ fontFamily: 'Inter' }}
                >
                  Deploy, manage and troubleshoot cloud-native applications that scale without overwhelming your engineers with the complexity of Kubernetes.
                </p>

                {/* Social Media */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">
                  {['facebook', 'instagram', 'X', 'pinterest', 'linkdin', 'youtube', 'threads'].map((icon, idx) => (
                    <div key={idx} className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                      <Image
                        src={`/${icon}.png`}
                        alt={`${icon} icon`}
                        width={20}
                        height={20}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[260px] lg:h-[260px] rounded-lg overflow-hidden">
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

        {/* Contact Section */}
        <div className="bg-black text-white px-4 sm:px-6 md:px-10 py-8 sm:py-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Contact</h2>

          {/* Contact Info Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-sm mb-6 sm:mb-8">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Image src="/icons/email-icon.png" alt="email" width={24} height={24} />
              <div>
                <div className="text-gray-300 text-sm sm:text-base">harshvardhan@gmail.com</div>
                <div className="text-gray-400 text-xs">Email ID</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image src="/icons/whatsapp-icon.png" alt="whatsapp" width={24} height={24} />
                <div className="text-gray-300 text-sm sm:text-base">+91 9123456789</div>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/icons/phone-icon.png" alt="phone" width={24} height={24} />
                <div>
                  <div className="text-gray-300 text-sm sm:text-base">+91 9123456789</div>
                  <div className="text-gray-300 text-sm sm:text-base">+91 9123456789</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <Image src="/icons/address-icon.png" alt="address" width={24} height={24} />
              <div>
                <div className="text-gray-300 text-sm sm:text-base">3rd floor, CSI Complex</div>
                <div className="text-gray-400 text-xs">Baker Junction</div>
                <div className="text-gray-400 text-xs">Kottayam, Kerala</div>
                <div className="text-gray-400 text-xs">682016</div>
              </div>
            </div>
          </div>

          {/* Website Row */}
          <div className="flex items-start gap-3">
            <Image src="/icons/website-icon.png" alt="website" width={24} height={24} />
            <div>
              <div className="text-gray-300 text-sm sm:text-base">Website</div>
              <div className="text-gray-400 text-xs">workflow.tech editing drag/drop</div>
              <div className="text-gray-400 text-xs">Effortless design solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
