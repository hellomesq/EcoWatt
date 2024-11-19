'use client';

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Banner from './landingpage/Banner';
import SobreNos from './landingpage/Sobre';
import Planos from './landingpage/Planos';
import 'font-awesome/css/font-awesome.min.css';
import Parceiro from './landingpage/Parceiros';
import Rodape from './components/Rodapé';
import Principal from './registro/Principal';


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <SobreNos />
              <Planos />
              <Parceiro />
            </>
          }
        />
         <Route
          path="/registro"
          element={
            <>
              <Principal />
            </>
          }
        />
      </Routes>
      <Rodape />
    </Router>
  );
}
 