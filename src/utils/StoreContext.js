import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const defaultCategories = [
    { id: 'men', name: 'Men Fashion', visible: true },
    { id: 'women', name: 'Women Trends', visible: true },
    { id: 'footwear', name: 'Footwear', visible: true },
    { id: 'accessories', name: 'Accessories', visible: true, subcategories: ['Electric Accessories', 'Kitchen Items'] },
    { id: 'animal', name: 'Animal Accessories', visible: true },
  ];

  const [categories, setCategories] = useState(defaultCategories);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Client side a mount hobar por localStorage theke load kora
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('store_categories');
    if (saved) {
      try {
        setCategories(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleCategoryVisibility = (id) => {
    const updated = categories.map(cat => 
      cat.id === id ? { ...cat, visible: !cat.visible } : cat
    );
    setCategories(updated);
    localStorage.setItem('store_categories', JSON.stringify(updated));
  };

  // Hydration mismatch prevent korar jonno mount na howa porjonto default render kora
  if (!isMounted) {
    return null;
  }

  return (
    <StoreContext.Provider value={{ categories, toggleCategoryVisibility, isAdminLoggedIn, setIsAdminLoggedIn }}>
      {children}
    </StoreContext.Provider>
  );
}