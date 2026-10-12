import React from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/StoreContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}