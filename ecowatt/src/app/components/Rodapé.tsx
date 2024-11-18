import React from 'react';
import './global.css'; // Arquivo CSS para o estilo

const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>EcoWatt</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">Página dos integrantes</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EcoWatt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
