"use client"

import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from 'lucide-react'
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-[#7E33E0] text-white">
      <div className="container w-[95%] 2xl:w-[1920px] mx-auto px-4">
        <div className="flex h-11 items-center justify-between text-sm">
          {/* Left side - Contact Info */}
          <div className="hidden space-x-6 sm:flex">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="font-semibold">mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(12345)67890</span>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className=" flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold">English</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="font-semibold">USD</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/login" className="flex items-center gap-2 hover:text-gray-200">
              <User className="h-4 w-4" />
              <span className="font-semibold">Login</span>
            </Link>
            <Link href="/demo" className="flex items-center gap-2 hover:text-gray-200">
              <Heart className="h-4 w-4" />
              <span className="font-semibold">Wishlist</span>
            </Link>
            <Link href="/cart" className="flex items-center hover:text-gray-200">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

