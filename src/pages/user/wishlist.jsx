import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <h1 className="text-3xl font-extrabold mb-8">My Saved Wishlist ❤️</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-64 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center text-gray-400 text-xs">
                Wishlist Product
              </div>
              <h3 className="font-bold text-base text-gray-900">Luxe Winter Hoodie</h3>
              <p className="text-pink-600 font-semibold mt-1">$79.99</p>
            </div>
            <button className="mt-4 w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl hover:bg-pink-600 transition text-sm">
              Move to Cart 🛒
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}