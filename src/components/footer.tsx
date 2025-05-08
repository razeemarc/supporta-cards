"use client"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12" style={{ background: "var(--SC-Heading-bg, #DEE2FF)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>

          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                YMCA International Building,
                <br />
                Lal Bahadur Shastri Rd, Kottayam, Kerala 686061
              </p>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
              <Link href="tel:+919188911326" className="text-sm">
                +91 9188911326
              </Link>
            </div>

            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
              <Link href="mailto:info@supporttasolutions.com" className="text-sm">
                info@supporttasolutions.com
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-600">
            Copyright © 2023 Supportta Solutions Private Limited. All rights reserved
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-700" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-700" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
