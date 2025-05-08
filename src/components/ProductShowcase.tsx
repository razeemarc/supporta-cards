"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-12 bg-white">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block bg-purple-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NFC Cards
          </motion.span>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore The Designs
          </motion.h2>
        </motion.div>

        {isMobile ? (
          <div className="relative overflow-x-auto pb-8 -mx-4 px-4">
            <motion.div 
              className="flex space-x-4 w-max"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}

        {/* Explore button section */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
            >
              Explore
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  // Individual card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div 
      className="flex flex-col w-[250px] md:w-full"
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.div 
        className="relative h-[150px] mb-3 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={product.image || "/product1.png"} alt={product.title} fill className="object-cover" />
      </motion.div>
      <div>
        <motion.span 
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Modern
        </motion.span>
        <motion.h3 
          className="font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {product.title}
        </motion.h3>
        <motion.div 
          className="flex items-center mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
          <span className="font-bold text-gray-900 mx-2">₹{product.discountedPrice}</span>
          <motion.span 
            className="text-green-600 text-sm"
            whileHover={{ scale: 1.1 }}
          >
            {product.discountPercentage}% OFF
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}