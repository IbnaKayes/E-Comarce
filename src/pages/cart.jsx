import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <h1 className="text-3xl font-extrabold mb-8">Your Shopping Cart 🛒</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-xs">
                  Product
                </div>
                <div>
                  <h3 className="font-bold text-lg">Luxe Winter Hoodie</h3>
                  <p className="text-sm text-gray-500">Size: M | Color: Black</p>
                  <p className="text-pink-600 font-semibold mt-1">$79.99</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 rounded-xl border border-gray-200 font-bold">-</button>
                <span className="font-semibold">1</span>
                <button className="w-8 h-8 rounded-xl border border-gray-200 font-bold">+</button>
              </div>
            </div>
          </div>

          {/* Cart Totals & Checkout CTA */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit space-y-6">
            <h3 className="font-bold text-xl border-b pb-4">Cart Total</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$79.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated USA Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between border-t pt-3 text-base font-bold">
                <span>Total</span>
                <span className="text-pink-600">$79.99</span>
              </div>
            </div>

            <a 
              href="/checkout"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg transition text-center block"
            >
              Proceed to Checkout 🔒
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}