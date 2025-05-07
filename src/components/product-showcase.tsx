"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  title: string
  image: string
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
}

export default function ProductShowcase() {
  const products: Product[] = [
    {
      id: 1,
      title: "Modern Business Card",
      image: "/product1.png?height=200&width=300",
      originalPrice: 1499,
      discountedPrice: 999,
      discountPercentage: 40,
    },
    {
      id: 2,
      title: "Modern Business Card",
      image: "/product2.png?height=200&width=300",
      originalPrice: 1499,
      discountedPrice: 999,
      discountPercentage: 40,
    },
    {
      id: 3,
      title: "Modern Business Card",
      image: "/product3.png?height=200&width=300",
      originalPrice: 1499,
      discountedPrice: 999,
      discountPercentage: 40,
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="inline-block bg-purple-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
          NFC Cards
        </span>
        <h2 className="text-2xl md:text-3xl font-bold">Explore The Designs</h2>
      </div>

      {isMobile ? (
        <div className="relative overflow-x-auto pb-8 -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <Link
          href="#"
          className="inline-flex items-center justify-center px-8 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
        >
          Explore
        </Link>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col w-[250px] md:w-full">
      <div className="relative h-[150px] mb-3 rounded-lg overflow-hidden">
        <Image src={product.image || "/product1.png"} alt={product.title} fill className="object-cover" />
      </div>
      <div>
        <span className="text-sm text-gray-500">Modern</span>
        <h3 className="font-medium">{product.title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
          <span className="font-bold text-gray-900 mx-2">₹{product.discountedPrice}</span>
          <span className="text-green-600 text-sm">{product.discountPercentage}% OFF</span>
        </div>
      </div>
    </div>
  )
}
