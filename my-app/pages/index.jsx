// pages/_app.js

import React from 'react';
import Header from '../components/layout/Header';
import Footer from 'components/layout/Footer';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <p>A</p>
      <Footer />      
    </>
  );
}

export default MyApp;
