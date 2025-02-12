"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Pages", href: "/error" },
  { name: "Products", href: "/product" },
  { name: "Blog", href: "/blog" },
  { name: "Shop", href: "/shopgrid" },
  { name: "Contact", href: "/contact" },
];

const homeSubLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isMobileHomeOpen, setIsMobileHomeOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-white">
      <div className="container w-[95%] 2xl:w-[1920px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[34px] font-bold text-[#0D0E43] font-josefin-sans"
          >
            Hekto
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              <button className="flex items-center text-base text-[#0D0E43] font-lato hover:text-[#FB2E86] transition-colors">
                Home
                <ChevronDown className="ml-1 h-4 w-4 text-[#FB2E86]" />
              </button>
              {isHomeDropdownOpen && (
                <div className="absolute top-full mt-1 bg-white border border-[#E7E6EF] shadow-lg rounded-md py-2 z-50">
                  {homeSubLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-base text-[#0D0E43] font-lato hover:bg-[#FB2E86] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-base text-[#0D0E43] font-lato hover:text-[#FB2E86] transition-colors"
              >
                {item.name}
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
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 shadow-lg p-8 space-y-6">
          {/* Home Link with Collapsible Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileHomeOpen(!isMobileHomeOpen)}
              className="flex items-center text-base text-[#0D0E43] font-lato hover:text-[#FB2E86] transition-colors w-full text-left"
            >
              Home
              <ChevronDown
                className={`ml-2 h-4 w-4 transform ${
                  isMobileHomeOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileHomeOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {homeSubLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-base text-[#0D0E43] font-lato hover:text-[#FB2E86] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-base text-[#0D0E43] font-lato hover:text-[#FB2E86] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

