import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const [selectedSub, setSelectedSub] = useState('All');
  const subCategories = ['All', 'Gym Accessories', 'Kitchen Accessories', 'Electric Accessories'];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="mb-10 pb-6 border-b flex justify-between items-center">
          <div>
            <span className="text-xs bg-pink-100 text-pink-600 font-bold px-3 py-1 rounded-full uppercase">Collection</span>
            <h1 className="text-3xl font-extrabold mt-2 capitalize">{category ? category : 'Category'} Items</h1>
            <p className="text-gray-500 mt-1">Browse our specialized products and sub-categories</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Side Sub-Category Filter Sidebar */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-fit space-y-4">
            <h3 className="font-bold text-lg text-gray-800 border-b pb-3">Sub-Categories</h3>
            <ul className="space-y-2 text-sm">
              {subCategories.map((sub, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setSelectedSub(sub)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold transition ${
                      selectedSub === sub 
                        ? 'bg-pink-50 text-pink-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Filtered Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-56 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center text-gray-400 text-xs">
                    {selectedSub} Item {item}
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-md">{selectedSub === 'All' ? 'Trending' : selectedSub}</span>
                  <h3 className="font-bold text-base text-gray-900 mt-2">Premium Quality Item</h3>
                  <p className="text-pink-600 font-semibold mt-1">$39.99</p>
                </div>
                <a href="/product/1" className="mt-4 w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl text-center hover:bg-pink-600 transition block text-sm">
                  View Details ⚡
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