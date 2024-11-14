import React, { useState } from 'react';
import './global.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto e fechado
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">EcoWatt</div>
      
      {/* Camada de sobreposição */}
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Lista de links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Início</a></li>
        <li><a href="#services">Sobre</a></li>
        <li><a href="#about">Monitoramento</a></li>
        <li><a href="#contact">Entrar</a></li>
      </ul>

      {/* Botão de toggle para o menu */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {/* Mostra o ícone de hambúrguer ou o "X" dependendo do estado */}
        {isMenuOpen ? (
          <span className="close-icon">X</span> // Exibe "X" quando o menu está aberto
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span> 
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
