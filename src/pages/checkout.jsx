import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <h1 className="text-3xl font-extrabold mb-8">Secure USA Checkout 🔒</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Billing & Shipping Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-bold text-xl border-b pb-4">Shipping Information (USA)</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
              <input type="text" placeholder="123 Main Street, Apt 4B" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <input type="text" placeholder="New York" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                <input type="text" placeholder="NY" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                <input type="text" placeholder="10001" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" />
              </div>
            </div>

            <h3 className="font-bold text-xl border-b pb-4 pt-4">Payment Method</h3>
            <div className="flex space-x-4">
              <div className="flex-1 border-2 border-pink-600 bg-pink-50/50 p-4 rounded-2xl font-semibold text-center cursor-pointer">
                Credit / Debit Card (Stripe)
              </div>
              <div className="flex-1 border border-gray-200 p-4 rounded-2xl font-semibold text-center cursor-pointer hover:border-gray-400">
                PayPal
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit space-y-6">
            <h3 className="font-bold text-xl border-b pb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Luxe Winter Hoodie (x1)</span>
                <span className="font-semibold">$79.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">USA Standard Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between border-t pt-3 text-base font-bold">
                <span>Total Amount</span>
                <span className="text-pink-600">$79.99</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg transition text-center block"
            >
              Place Order Now 🚀
            </motion.button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}