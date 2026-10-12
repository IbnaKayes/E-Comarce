import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="w-full h-[450px] bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
              [Main High-Res Product Image]
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-28 bg-gray-100 rounded-2xl"></div>
              <div className="h-28 bg-gray-100 rounded-2xl"></div>
              <div className="h-28 bg-gray-100 rounded-2xl"></div>
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="space-y-6">
            <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1.5 rounded-full">In Stock • USA Warehouse</span>
            <h1 className="text-3xl md:text-4xl font-extrabold">Ultimate Premium Winter Hoodie</h1>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-pink-600">$79.99</span>
              <span className="line-through text-gray-400 text-lg">$110.00</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Crafted with organic cotton for maximum comfort and durability. Perfect for chilly weather across USA climates. Features modern styling and secure zipper pockets.
            </p>

            {/* Size Selector */}
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Select Size</h4>
              <div className="flex space-x-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-xl border border-gray-200 font-semibold hover:border-pink-600 hover:text-pink-600 transition">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg transition"
              >
                Add to Cart 🛒
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-lg transition"
              >
                Buy Now ⚡
              </motion.button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}