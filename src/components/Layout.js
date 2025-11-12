import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
