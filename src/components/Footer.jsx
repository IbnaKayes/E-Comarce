import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            USA<span className="text-pink-500">Store</span> 🔴
          </h2>
          <p className="text-sm text-gray-400">
            Your ultimate destination for modern USA trends, live shopping experiences, and premium quality products shipped nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-pink-500 transition">Shop All Products</a></li>
            <li><a href="/live-sell" className="hover:text-pink-500 transition">Live Selling Events 🔴</a></li>
            <li><a href="/reviews" className="hover:text-pink-500 transition">Customer Reviews</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact Us</a></li>
            <li><a href="/user/dashboard" className="hover:text-pink-500 transition">Order Tracking</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and live sale alerts.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-xl transition text-sm">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} USAStore Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Secure USA Payments (Stripe / PayPal)</span>
        </div>
      </div>
    </footer>
  );
}