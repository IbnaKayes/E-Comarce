"use client";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Totes & Bags", "Straps & Lanyards", "Phone Cases"];

  const products = [
    {
      id: 1,
      category: "Totes & Bags",
      name: "Laneway Tote 15L",
      price: "$129",
      tag: "Featured App",
      description: "A versatile, everyday tote with essential organization and premium finish.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60",
      colors: ["#3E2723", "#212121", "#5C3317"]
    },
    {
      id: 2,
      category: "Totes & Bags",
      name: "Laneway Tote 19L",
      price: "$139",
      tag: "Featured App",
      description: "19L / A versatile, spacious everyday tote with surprising organization.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
      colors: ["#3E2723", "#212121", "#795548"]
    },
    {
      id: 3,
      category: "Straps & Lanyards",
      name: "Crossbody Strap",
      price: "$39",
      tag: "Accessory",
      description: "A secure phone lanyard designed for comfortable crossbody carry.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60",
      colors: ["#212121", "#D84315", "#4E342E"]
    },
    {
      id: 4,
      category: "Straps & Lanyards",
      name: "Wrist Strap",
      price: "$25",
      tag: "Accessory",
      description: "A minimal phone lanyard that tethers securely to your wrist.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60",
      colors: ["#212121", "#37474F", "#8D6E63"]
    },
    {
      id: 5,
      category: "Phone Cases",
      name: "Phone Case - Leather",
      price: "$59",
      tag: "For iPhone Series",
      description: "Slim protection with premium textured leather finish for your device.",
      image: "https://images.unsplash.com/photo-1603313042217-742a225822e5?w=500&auto=format&fit=crop&q=60",
      colors: ["#212121", "#37474F", "#A0522D"]
    },
    {
      id: 6,
      category: "Phone Cases",
      name: "Venture Phone Case",
      price: "$49",
      tag: "For iPhone Series",
      description: "Rugged protection with raised edges and MagSafe compatibility.",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60",
      colors: ["#212121", "#556B2F", "#BC8F8F"]
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden bg-darkBg text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-primaryAccent text-xs font-semibold">
            <Sparkles size={14} /> COLLECTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Products</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Browse our specialized products, accessories, and sub-categories.
          </p>
        </div>

        {/* Layout with Sub-Categories Sidebar & Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sub-Categories Sidebar */}
          <div className="lg:col-span-3 bg-cardBg border border-gray-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-3">
              Sub-Categories
            </h3>
            <div className="flex flex-col space-y-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat 
                      ? "bg-primaryAccent text-darkBg font-bold shadow-lg shadow-primaryAccent/20" 
                      : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <div 
                key={item.id}
                className="bg-cardBg border border-gray-800 rounded-3xl p-5 shadow-2xl hover:border-primaryAccent/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                {/* Product Image Container */}
                <div className="relative w-full h-64 bg-gray-900/80 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center p-4">
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                    {item.tag}
                  </span>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base group-hover:text-primaryAccent transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-mono font-bold text-primaryAccent text-base">
                      {item.price}
                    </span>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {item.colors.map((color, i) => (
                      <span 
                        key={i} 
                        className="w-3.5 h-3.5 rounded-full border border-gray-600 shadow-sm"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full py-2.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-primaryAccent text-white font-semibold text-xs flex items-center justify-center gap-2 group-hover:bg-primaryAccent group-hover:text-darkBg transition-all shadow-md">
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}