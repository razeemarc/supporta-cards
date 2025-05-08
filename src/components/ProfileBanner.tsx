import Image from "next/image"
import Link from "next/link"

export default function NfcProfileBanner() {
  return (
    <div className="bg-white mb-8 pt-6">
    <div className="relative h-[561px] overflow-hidden mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/profilebanner.png"
          alt="Hands together in unity"
          width={1437}
          height={561}
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(0deg, rgba(241, 243, 255, 0.85), rgba(241, 243, 255, 0.85)),
                linear-gradient(0deg, rgba(214, 219, 255, 0.5), rgba(214, 219, 255, 0.5))`,
          mixBlendMode: "normal",
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
          Personalized Help
        </div>

        <h2 className="max-w-2xl mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Create your profile. Own your NFC card.
        </h2>

        <Link
          href="#"
          className="px-6 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 transition-colors"
        >
          Get Support
        </Link>
      </div>
    </div>
    </div>
  )
}
