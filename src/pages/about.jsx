import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">About USAStore</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Redefining e-commerce in the USA through real-time interactive live shopping and lightning-fast nationwide delivery.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p>
            Founded with a vision to merge modern entertainment with seamless retail, USAStore brings top-tier apparel and trending accessories directly to your doorstep. Our unique live-selling platform allows customers to interact, view products in real time, and shop with absolute confidence.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 pt-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Interactive Live Shopping Events 🔴</li>
            <li>Fast 2-3 Day Nationwide USA Shipping</li>
            <li>100% Secure Payments via Stripe & PayPal</li>
            <li>Dedicated 24/7 Customer Support</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}