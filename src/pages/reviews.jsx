import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h1 className="text-4xl font-extrabold">Customer Love & Reviews</h1>
          <p className="text-gray-500">See what our USA shoppers have to say about our quality and live shopping experience.</p>
          <div className="flex items-center justify-center space-x-1 text-yellow-400 text-2xl pt-2">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            <span className="text-gray-800 font-bold text-lg ml-2">4.9 / 5.0 (2,450+ Reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Emily R.", location: "New York, USA", comment: "The live sell feature is addictive! Got my hoodie in just 2 days. Super premium quality." },
            { name: "Michael B.", location: "Texas, USA", comment: "Amazing customer support and fast shipping. Will definitely buy again from USAStore." },
            { name: "Sarah L.", location: "California, USA", comment: "Best e-commerce experience so far. The clothes fit perfectly as described!" }
          ].map((rev, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4"
            >
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-600 italic">"{rev.comment}"</p>
              <div className="border-t pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{rev.name}</h4>
                  <p className="text-xs text-gray-400">{rev.location}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">Verified Buyer</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}