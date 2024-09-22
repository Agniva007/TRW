import React from 'react';
import Solutions from '../Solutions/Solutions';
import Services from '../Services/Services';
import Custom from '../Custom/Custom';
import Materials from '../Materials/Materials';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Header from '../Header/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Banner />
        <Products />
        <Materials />
        <Services />
        <Custom />
        <Solutions />
        <ContactUs /> 
      </main>
      <Footer />
    </div>
  );
}
