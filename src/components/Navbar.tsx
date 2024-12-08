"use client"

import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pages", href: "/productpage" },
  { name: "Products", href: "/product" },
  { name: "Blog", href: "/blog" },
  { name: "Shop", href: "/shopgrid" },
  { name: "Contact", href: "/contact" },
]

export default function Nav() {
  return (
    <nav className="w-full py-4">
      <div className="container w-[95%] 2xl:w-[1920px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-[34px] font-bold text-[#0D0E43] font-josefin-sans">
            Hekto
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-base ${
                  item.name === "Home"
                    ? "text-[#FB2E86]"
                    : "text-[#0D0E43]"
                } font-lato hover:text-[#FB2E86] transition-colors`}
              >
                {item.name}
                {item.name === "Home" && (
                  <ChevronDown className="ml-1 h-4 w-4 text-[#FB2E86]" />
                )}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] h-10 px-4 border-2 border-[#E7E6EF] focus:outline-none focus:border-[#FB2E86] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-10 w-10 bg-[#FB2E86] flex items-center justify-center hover:bg-[#e61d76] transition-colors"
              >
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6 text-[#0D0E43]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

