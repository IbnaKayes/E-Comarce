import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StoreContext } from '../utils/StoreContext';

export default function Home() {
  const { categories } = useContext(StoreContext);
  const visibleCategories = categories.filter(cat => cat.visible);

  const [activeTab, setActiveTab] = useState('Bestsellers');

  // Hero Video Slider State (3 videos)
  const heroVideos = [
    '/images/hero-video-1.mp4',
    '/images/hero-video-2.mp4',
    '/images/hero-video-3.mp4'
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto slide videos every 12 seconds so users can watch fully
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [heroVideos.length]);

  const tabProducts = {
    Bestsellers: [
      { id: 1, name: 'Hide & Seek – RFID safe', price: '$89', colors: ['#2D3748', '#3182CE', '#2F855A', '#D69E2E', '#742A2A', '#DD6B20', '#1A202C'], tag: '5 – 12+ cards, flat bills, coins' },
      { id: 2, name: 'Transit Carry-On', price: '$299', colors: ['#2D3748', '#EDF2F7', '#1A365D', '#319795', '#C53030', '#4A5568'], tag: '41L volume / Hard shell, optimized for carry-on' },
      { id: 3, name: 'Carryology Essentials Sling', price: '$119', colors: ['#000000', '#CBD5E0'], tag: '4L / Everyday sling with optimized organization and materials' },
    ],
    'New Releases': [
      { id: 4, name: 'Apex Slim Backpack', price: '$199', colors: ['#1A202C', '#718096', '#2B6CB0'], tag: '20L / Tech focused with quick access compartments' },
      { id: 5, name: 'Tokyo Tote Pack', price: '$169', colors: ['#2D3748', '#9B2C2C', '#276749'], tag: 'Dual-use backpack or tote for daily commuting' },
    ],
    'Value Sets': [
      { id: 6, name: 'Travel Essentials Bundle', price: '$349', colors: ['#1A202C', '#D69E2E'], tag: 'Includes Carry-On + Tech Pouch + Sling' },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      <Header />

      {/* Top Search Bar Section */}
      <div className="bg-gray-50 border-b border-gray-100 py-4 px-6 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            className="w-full bg-white border border-gray-200 rounded-full py-3 pl-6 pr-12 text-sm text-gray-800 shadow-sm focus:outline-none focus:border-black transition"
          />
          <span className="absolute right-4 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Hero Banner Section with 3 Video Carousel */}
      <section className="relative w-full h-[600px] bg-black text-white flex items-center px-8 md:px-24 overflow-hidden">
        
        {/* Background Video with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.video 
            key={currentVideoIndex}
            autoPlay 
            loop 
            muted 
            playsInline 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase"
          >
            WE'VE GOT <br />YOUR BACK
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a 
              href="/shop" 
              className="inline-block bg-[#D04A35] hover:bg-[#b83d2a] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md transition shadow-lg"
            >
              Shop Backpacks
            </a>
          </motion.div>
        </div>

        {/* Interactive Dots for 3 Videos */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroVideos.map((_, index) => (
            <span 
              key={index} 
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                currentVideoIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* Dynamic Categories Section with Custom Background Class */}
      <section className="py-24 px-6 md:px-16 bg-cover bg-center category-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">Shop by Categories</h2>
            <p className="text-gray-500 mt-2">Explore our premium collections controlled via admin settings</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {visibleCategories.map((cat) => (
              <motion.a 
                key={cat.id}
                href={`/shop/${cat.id}`}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 text-center cursor-pointer transition block w-64"
              >
                <div className="w-full h-36 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-400 text-xs font-semibold">
                  {cat.name} Image
                </div>
                <h3 className="font-bold text-base text-gray-900">{cat.name}</h3>
                {cat.subcategories && (
                  <p className="text-xs text-[#D04A35] mt-1 font-medium">Includes Sub-items</p>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section (Tabs + Big Cards) */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
        <div className="flex space-x-8 border-b border-gray-200 pb-4 mb-12">
          {['Bestsellers', 'New Releases', 'Value Sets'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-bold transition pb-4 relative ${
                activeTab === tab ? 'text-[#D04A35]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-[#D04A35]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(tabProducts[activeTab] || tabProducts['Bestsellers']).map((product) => (
            <div key={product.id} className="bg-[#F7F7F7] rounded-xl p-8 flex flex-col justify-between relative group shadow-sm hover:shadow-md transition">
              <div className="w-full h-80 bg-white/60 rounded-lg mb-6 flex items-center justify-center text-gray-400 font-medium text-sm overflow-hidden">
                <span className="group-hover:scale-110 transition duration-700">[{product.name} Image]</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                  <span className="font-bold text-gray-900">{product.price}</span>
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  {product.colors.map((color, idx) => (
                    <span 
                      key={idx} 
                      className="w-4 h-4 rounded-full border border-gray-300 shadow-sm cursor-pointer"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>

                <p className="text-xs text-gray-500 pt-2">{product.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-left">
          <a 
            href="/shop" 
            className="inline-block border-2 border-black hover:bg-black hover:text-white text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-md transition"
          >
            Shop {activeTab}
          </a>
        </div>
      </section>

      {/* Photo Collage Section with Zoom on Hover */}
      <section className="bg-[#EBE7E3] py-20 px-6 md:px-16 mt-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            Like. Comment. Aspire.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="col-span-1 md:col-span-1 h-96 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
              <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Photo 1]</div>
            </motion.div>

            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-48 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
                <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Photo 2]</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-44 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
                <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Photo 3]</div>
              </motion.div>
            </div>

            <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} className="h-32 bg-gray-300 rounded-xl flex items-center justify-center text-xs text-gray-500 font-semibold overflow-hidden cursor-pointer">
                  <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Small 1]</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} className="h-32 bg-gray-300 rounded-xl flex items-center justify-center text-xs text-gray-500 font-semibold overflow-hidden cursor-pointer">
                  <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Small 2]</div>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} className="h-56 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
                <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Video / Frame]</div>
              </motion.div>
            </div>

            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-56 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
                <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Phone Shot]</div>
              </motion.div>
              <div className="grid grid-cols-2 gap-2">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} className="h-24 bg-gray-300 rounded-xl flex items-center justify-center text-[10px] text-gray-500 overflow-hidden cursor-pointer">
                  <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Mini 1]</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} className="h-24 bg-gray-300 rounded-xl flex items-center justify-center text-[10px] text-gray-500 overflow-hidden cursor-pointer">
                  <div className="w-full h-full hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Mini 2]</div>
                </motion.div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="col-span-1 md:col-span-1 h-96 bg-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-500 font-semibold shadow-sm overflow-hidden cursor-pointer">
              <div className="w-full h-full bg-gray-300 hover:bg-gray-200 transition duration-300 flex items-center justify-center">[Bicycle Rider]</div>
            </motion.div>
          </div>

          <div className="pt-8 text-center space-y-3 border-t border-gray-300/60">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Join us:</p>
            <div className="flex justify-center space-x-6 text-sm font-bold text-[#D04A35]">
              <a href="#instagram" className="hover:underline">Instagram</a>
              <a href="#tiktok" className="hover:underline">TikTok</a>
              <a href="#facebook" className="hover:underline">Facebook</a>
              <a href="#youtube" className="hover:underline">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}