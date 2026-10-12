import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b">
          <div>
            <h1 className="text-3xl font-extrabold">All USA Collections</h1>
            <p className="text-gray-500 mt-1">Browse our latest trending apparel and accessories</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Filter Sidebar */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-fit space-y-6 hidden lg:block">
            <h3 className="font-bold text-lg">Filters</h3>
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-3">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/shop/men" className="hover:text-pink-600">Men Fashion</a></li>
                <li><a href="/shop/women" className="hover:text-pink-600">Women Trends</a></li>
                <li><a href="/shop/footwear" className="hover:text-pink-600">Footwear</a></li>
                <li><a href="/shop/accessories" className="hover:text-pink-600">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-3">Price Range</h4>
              <input type="range" className="w-full accent-pink-600" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-64 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center text-gray-400 text-xs">
                    Product Image
                  </div>
                  <h3 className="font-bold text-base text-gray-900">Modern Streetwear Outfit</h3>
                  <p className="text-pink-600 font-semibold mt-1">$65.00</p>
                </div>
                <a 
                  href={`/product/${item}`}
                  className="mt-4 w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl text-center hover:bg-pink-600 transition block text-sm"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}