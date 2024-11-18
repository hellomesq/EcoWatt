'use client'; // Adicione isso no topo do arquivo

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './landingpage/Banner';
import SobreNos from './landingpage/Sobre';
import Planos from './landingpage/Planos';
import 'font-awesome/css/font-awesome.min.css';
import Parceiro from './landingpage/Parceiros';
import Rodape from './components/Rodapé';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Não renderiza nada no servidor
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
              <Rodape />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
 