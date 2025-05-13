import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="flex justify-center mt-8 mb-16 px-4">
      <div className="w-full max-w-6xl bg-black shadow-lg flex flex-col relative overflow-hidden rounded-lg">
        {/* Overlay A.png */}
        <div className="absolute top-4 left-4 z-20">
          <Image
            src="/A.png"
            alt="A overlay"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Header section with background */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
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
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h1
                  className="text-white font-medium text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-tight"
                  style={{ fontFamily: 'Kalnia' }}
                >
                  Harshvardhan
                </h1>
                <h2
                  className="text-white font-normal text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight"
                  style={{ fontFamily: 'Merriweather' }}
                >
                  UI / UX Designer
                </h2>
                <p
                  className="text-gray-300 mt-4 text-[14px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto lg:mx-0"
                  style={{ fontFamily: 'Inter' }}
                >
                  Deploy, manage and troubleshoot cloud-native applications that scale without overwhelming your engineers with the complexity of Kubernetes.
                </p>

                {/* Social Media */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                  {['facebook', 'instagram', 'X', 'pinterest', 'linkdin', 'youtube', 'threads'].map((icon, idx) => (
                    <div key={idx} className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <Image
                        src={`/${icon}.png`}
                        alt={`${icon} icon`}
                        width={30}
                        height={30}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-lg overflow-hidden">
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
        <div className="bg-black text-white px-6 sm:px-10 py-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact</h2>

          {/* Contact Info Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm mb-8">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Image src="/icons/email-icon.png" alt="email" width={30} height={30} />
              <div>
                <div className="text-gray-300">harshvardhan@gmail.com</div>
                <div className="text-gray-400 text-sm">Email ID</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image src="/icons/whatsapp-icon.png" alt="whatsapp" width={30} height={30} />
                <div className="text-gray-300">+91 9123456789</div>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/icons/phone-icon.png" alt="phone" width={30} height={30} />
                <div>
                  <div className="text-gray-300">+91 9123456789</div>
                  <div className="text-gray-300 ">+91 9123456789</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <Image src="/icons/address-icon.png" alt="address" width={30} height={30} />
              <div>
                <div className="text-gray-300">3rd floor, CSI Complex</div>
                <div className="text-gray-400 text-sm">Baker Junction</div>
                <div className="text-gray-400 text-sm">Kottayam, Kerala</div>
                <div className="text-gray-400 text-sm">682016</div>
              </div>
            </div>
          </div>

          {/* Website Row */}
          <div className="flex items-start gap-3">
            <Image src="/icons/website-icon.png" alt="website" width={30} height={30} />
            <div>
              <div className="text-gray-300">Website</div>
              <div className="text-gray-400 text-sm">workflow.tech editing drag/drop</div>
              <div className="text-gray-400 text-sm">Effortless design solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
