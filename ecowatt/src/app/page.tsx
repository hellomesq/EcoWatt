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
import Dashboard from './dashboard/Dashboard';
import Pagamento from './registro/Pagamento';
import SurveyForm from './registro/Formulario';
import AlterarPerfil from './dashboard/AlterarPerfil';
import Integrantes from './components/Integrantes';

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
              <Navbar />
              <Principal />
            </>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/pagamento"
          element={
            <>
            <Navbar />
              <Pagamento />
            </>
          }
        />
        <Route
          path="/formulario"
          element={
            <>
            <Navbar />
              <SurveyForm />
            </>
          }
        />
         <Route
          path="/perfil"
          element={
            <>
            <Navbar />
              <AlterarPerfil />
            </>
          }
        />
        <Route
          path="/integrantes"
          element={
            <>
            <Navbar />
            <Integrantes />
            </>
          }
        />
      </Routes>
      <Rodape />
    </Router>
  );
}
