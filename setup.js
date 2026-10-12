const fs = require('fs');
const path = require('path');

const structure = [
  'public/images',
  'src/components/Header.jsx',
  'src/components/Footer.jsx',
  'src/components/ProductCard.jsx',
  'src/components/CartDrawer.jsx',
  'src/components/LiveBadge.jsx',
  'src/pages/index.jsx',
  'src/pages/shop/index.jsx',
  'src/pages/shop/[category].jsx',
  'src/pages/shop/[subcat].jsx',
  'src/pages/product/[id].jsx',
  'src/pages/live-sell.jsx',
  'src/pages/reviews.jsx',
  'src/pages/cart.jsx',
  'src/pages/checkout.jsx',
  'src/pages/user/dashboard.jsx',
  'src/pages/user/wishlist.jsx',
  'src/pages/about.jsx',
  'src/pages/contact.jsx',
  'src/styles/globals.css',
  'src/utils/helpers.js',
  '.env',
  'package.json',
  'README.md'
];

structure.forEach(item => {
  const fullPath = path.join(__dirname, item);
  if (item.includes('.')) {
    // File
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(fullPath)) fs.writeFileSync(fullPath, '');
  } else {
    // Directory
    if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath, { recursive: true });
  }
});

console.log('Project structure created successfully!');