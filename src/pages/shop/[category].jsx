import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [selectedSub, setSelectedSub] = useState('All');

  // Bellroy-style exact product layout
  const products = [
    { id: 1, name: 'Laneway Tote 15L', price: '$129', tag: '15L / A versatile, everyday tote with essential organization', colors: ['#4A3B32', '#2D3748', '#715364', '#C5A087'] },
    { id: 2, name: 'Laneway Tote 19L', price: '$139', tag: '19L / A versatile, spacious everyday tote with surprising organization', colors: ['#4A3B32', '#2D3748', '#715364', '#C5A087'] },
    { id: 3, name: 'Crossbody Strap', price: '$39', tag: 'A phone lanyard for crossbody carry', colors: ['#2D3748', '#274E3E', '#583133', '#C26D51', '#C5A087'] },
    { id: 4, name: 'Wrist Strap', price: '$25', tag: 'A phone lanyard that tethers to your wrist', colors: ['#2D3748', '#274E3E', '#583133', '#C26D51', '#C5A087'] },
    { id: 5, name: 'Phone Case', price: '$59', tag: 'Slim protection for your Apple iPhone', colors: ['#2D3748', '#274E3E', '#583133', '#C26D51'] },
    { id: 6, name: 'Venture Phone Case', price: '$49', tag: 'Rugged protection for iPhone', colors: ['#1A202C', '#556B2F', '#C26D51'] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />

      {/* Category Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-12 pb-8 border-b border-gray-100">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D04A35] bg-red-50 px-2.5 py-1 rounded">Collection</span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-2 capitalize">
          {category ? `${category} Items` : 'Men Items'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">Browse our specialized products and sub-categories</p>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Sidebar Sub-Categories */}
        <div className="md:col-span-1 space-y-6">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">Sub-Categories</h3>
            <ul className="space-y-2 text-sm font-semibold text-gray-700">
              {['All', 'Gym Accessories', 'Kitchen Accessories', 'Electric Accessories'].map((sub) => (
                <li key={sub}>
                  <button 
                    onClick={() => setSelectedSub(sub)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition ${
                      selectedSub === sub ? 'bg-black text-white shadow-sm' : 'hover:bg-gray-200/60'
                    }`}
                  >
                    {sub}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid - Exact Bellroy Minimalist Style */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col justify-between cursor-pointer">
              
              {/* Product Image Area - Clean Soft Background */}
              <div className="w-full h-[380px] bg-[#F7F7F7] rounded-2xl flex items-center justify-center p-8 relative overflow-hidden mb-5 group-hover:bg-[#F2EEEC] transition duration-300">
                <span className="text-xs text-gray-400 font-medium group-hover:scale-105 transition duration-500">
                  [{product.name} Image]
                </span>
              </div>

              {/* Product Details - Clean Typography */}
              <div className="space-y-1.5 px-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-gray-900 group-hover:text-[#D04A35] transition">{product.name}</h3>
                  <span className="font-bold text-base text-gray-900">{product.price}</span>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center space-x-2 pt-1">
                  {product.colors.map((color, idx) => (
                    <span 
                      key={idx} 
                      className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>

                <p className="text-xs text-gray-500 pt-1 leading-relaxed">{product.tag}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}