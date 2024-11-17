'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './landingpage/Banner';
import SobreNos from './landingpage/Sobre';
import Planos from './landingpage/Planos';
import 'font-awesome/css/font-awesome.min.css';


export default function Home() {
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
            </>
          }
        />
      </Routes>
    </Router>
  );
}
