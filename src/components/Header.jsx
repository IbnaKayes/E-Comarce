import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
            USA<span className="text-pink-600">Store</span> 🔴
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <a href="/" className="hover:text-pink-600 transition">Home</a>
          
          {/* Mega Menu Trigger on Shop / Featured */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <a href="/shop" className="hover:text-pink-600 transition flex items-center space-x-1 py-8">
              <span>Shop & Categories ▾</span>
            </a>

            {/* Mega Dropdown Box (Like Bellroy screenshot) */}
            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-20 left-[-200px] w-[850px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-8 text-gray-800"
                >
                  {/* Column 1: Popular Sub-categories */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-400">Popular Collections</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/shop/men" className="hover:text-pink-600 transition block py-1 font-semibold">Men Fashion</a></li>
                      <li><a href="/shop/women" className="hover:text-pink-600 transition block py-1 font-semibold">Women Trends</a></li>
                      <li><a href="/shop/footwear" className="hover:text-pink-600 transition block py-1 font-semibold">Footwear & Sneakers</a></li>
                    </ul>
                  </div>

                  {/* Column 2: Specialized Sub-items */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-gray-400">Special Accessories</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/shop/accessories" className="hover:text-pink-600 transition block py-1">Electric Accessories</a></li>
                      <li><a href="/shop/accessories" className="hover:text-pink-600 transition block py-1">Kitchen Items</a></li>
                      <li><a href="/shop/animal" className="hover:text-pink-600 transition block py-1">Animal & Pet Accessories</a></li>
                    </ul>
                  </div>

                  {/* Column 3: Featured Visual Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-2xl p-5 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
                    <div>
                      <span className="bg-pink-600 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">Featured Live</span>
                      <h4 className="font-bold text-lg mt-2">New USA Trends</h4>
                      <p className="text-xs text-gray-300 mt-1">Explore live selling items with exclusive discounts.</p>
                    </div>
                    <a href="/live-sell" className="mt-4 inline-block bg-white text-gray-900 font-bold text-xs py-2 px-4 rounded-xl text-center hover:bg-pink-500 hover:text-white transition">
                      Join Live Sell 🔴
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/live-sell" className="flex items-center space-x-1 text-red-600 font-bold animate-pulse hover:opacity-80 transition">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
            <span>Live Sell</span>
          </a>
          <a href="/reviews" className="hover:text-pink-600 transition">Reviews</a>
          <a href="/about" className="hover:text-pink-600 transition">About</a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-5">
          <a href="/user/wishlist" className="hidden sm:block text-gray-600 hover:text-pink-600 transition">
            ❤️ Wishlist
          </a>
          <a href="/cart" className="relative bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-pink-600 transition flex items-center space-x-2">
            <span>🛒 Cart</span>
            <span className="bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-4 shadow-lg"
          >
            <a href="/" className="block text-gray-700 font-medium hover:text-pink-600">Home</a>
            <a href="/shop" className="block text-gray-700 font-medium hover:text-pink-600">Shop</a>
            <a href="/shop/accessories" className="block text-gray-600 text-sm pl-4">↳ Electric & Kitchen Items</a>
            <a href="/shop/animal" className="block text-gray-600 text-sm pl-4">↳ Animal Accessories</a>
            <a href="/live-sell" className="block text-red-600 font-bold">Live Sell 🔴</a>
            <a href="/reviews" className="block text-gray-700 font-medium hover:text-pink-600">Reviews</a>
            <a href="/about" className="block text-gray-700 font-medium hover:text-pink-600">About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}