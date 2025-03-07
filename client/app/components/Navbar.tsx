"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-black h-16 items-center">

          <div className="text-2xl font-bold text-gray-950">
            <Link href="/">App Logo</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
