'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './landingpage/Banner';
import Header from './components/Navbar';

export default function Home() {
  return (
    <Router>  
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Banner />} 
      />
    </Routes>
  </Router>
  );
}
