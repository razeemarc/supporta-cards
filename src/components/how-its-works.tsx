export default function HowItWorks() {
    return (
      <div className="w-full max-w-[1197px] mx-auto py-20 px-10 bg-[#f5f7ff] rounded-[40px]">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#e0e4ff] rounded-full text-[#5b6ad0] font-medium mb-4">
              Simple process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b]">How it works</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] w-full">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4">
                <span className="text-[#5b6ad0] font-medium">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Create Your Profile</h3>
              <p className="text-gray-600 text-sm">
                Sign in using your Google account and fill in your basic details to start building your personalized
                digital visiting card.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4">
                <span className="text-[#5b6ad0] font-medium">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Customize Your Portfolio</h3>
              <p className="text-gray-600 text-sm">
                Add your information, profile photo, and links to create a sleek, professional digital portfolio that&apos;s
                ready to share.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#e0e4ff] rounded-full mb-4">
                <span className="text-[#5b6ad0] font-medium">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e293b]">Choose & Buy Your NFC Card</h3>
              <p className="text-gray-600 text-sm">
                Browse a wide selection of stylish NFC card designs and buy your favorite one with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  