import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LiveSell() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <span className="w-4 h-4 bg-red-600 rounded-full animate-ping"></span>
          <h1 className="text-3xl font-extrabold">Live Shopping Event 🔴</h1>
        </div>

        {/* Live Stream & Chat Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left & Center: Video Player & Pinned Product */}
          <div className="lg:col-span-2 space-y-6">
            <div className="w-full h-[450px] bg-black rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center text-white">
              <div className="absolute top-4 left-4 bg-red-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                LIVE NOW
              </div>
              <p className="text-gray-400">[Live Video Stream / Broadcast Player]</p>
            </div>

            {/* Pinned Product Card in Live */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
                <div>
                  <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2.5 py-1 rounded-md">Featured on Live</span>
                  <h3 className="font-bold text-lg mt-1">Exclusive USA Denim Jacket</h3>
                  <p className="text-pink-600 font-semibold">$89.99</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow transition"
              >
                Buy Now ⚡
              </motion.button>
            </div>
          </div>

          {/* Right: Live Chat Box */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col h-[550px]">
            <h3 className="font-bold text-lg border-b pb-3 mb-4">Live Chat Stream</h3>
            <div className="flex-1 overflow-y-auto space-y-3 text-sm pr-2">
              <p><strong className="text-pink-600">Jessica M:</strong> "Is the medium size available?"</p>
              <p><strong className="text-indigo-600">USAStore Host:</strong> "Yes Jessica! All sizes are in stock."</p>
              <p><strong className="text-gray-700">David K:</strong> "Just ordered one! Super excited 🔥"</p>
            </div>
            <div className="pt-4 border-t mt-4 flex space-x-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-pink-500"
              />
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-600 transition">
                Send
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}