import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StoreContext } from '../../utils/StoreContext';

export default function AdminDashboard() {
  const { categories, toggleCategoryVisibility, isAdminLoggedIn, setIsAdminLoggedIn } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAdminLoggedIn(true);
    } else {
      alert('Invalid Admin Credentials! Use admin / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {!isAdminLoggedIn ? (
          /* Admin Login Form */
          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h1 className="text-2xl font-extrabold text-center">Admin Login 🔒</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="admin" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="admin123" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500" 
                />
              </div>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-xl transition shadow">
                Login to Dashboard 🚀
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard & Settings Panel */
          <div className="space-y-8">
            <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div>
                <h1 className="text-2xl font-extrabold">Admin Control Panel ⚙️</h1>
                <p className="text-sm text-gray-500">Manage homepage categories and visibility settings</p>
              </div>
              <button 
                onClick={() => setIsAdminLoggedIn(false)}
                className="bg-red-100 text-red-600 font-bold px-4 py-2 rounded-xl text-sm hover:bg-red-200 transition"
              >
                Logout
              </button>
            </div>

            {/* Category Visibility Settings */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <h3 className="font-bold text-xl border-b pb-4">Homepage Category Settings (Hide / Show)</h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <h4 className="font-bold text-base">{cat.name}</h4>
                      {cat.subcategories && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          Subcategories: {cat.subcategories.join(', ')}
                        </p>
                      )}
                    </div>
                    <button 
                      onClick={() => toggleCategoryVisibility(cat.id)}
                      className={`px-5 py-2 rounded-xl text-sm font-bold transition ${
                        cat.visible ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {cat.visible ? 'Visible on Home ✅' : 'Hidden ❌'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}