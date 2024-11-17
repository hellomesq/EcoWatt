// components/Planos.tsx
import React from 'react';
import './home.css';

const Planos: React.FC = () => {
  return (
    <div className="container-planos">
      <div className="pricing-layout">
        {/* Seção Esquerda */}
        <div className="pricing-info">
          <div className="pricing-header">
            <button className="toggle-button active">Mensal</button>
            <button className="toggle-button">Anual <span className="discount">-45%</span></button>
          </div>
          <h1 className="pricing-title">Preços e Planos</h1>
          <p className="pricing-description">
            Escolha o plano que melhor se adapta às suas necessidades e comece a aproveitar agora mesmo.
          </p>
        </div>

        {/* Seção Direita */}
        <div className="pricing-cards">
          <div className="card">
            <h2 className="card-title">Básico</h2>
            <ul className="card-features">
              <li>Dicas de economia</li>
              <li><i className="fa fa-check" aria-hidden="true"></i>Comparações regionais</li>
              <li>Planejamento de consumo</li>
              <li>Simulação de novas fontes</li>
              <li>Monitoramento de consumo</li>
              <li>Sistema de gamificação</li>
            </ul>
            <div className="card-price">R$00,00 <span>/mês</span></div>
            <button className="purchase-button">Assinar</button>
          </div>

          <div className="card agency">
            <h2 className="card-title">Premium</h2>
            <ul className="card-features">
              <li>Dicas de economia</li>
              <li>Comparações regionais</li>
              <li>Planejamento de consumo</li>
              <li>Simulação de novas fontes</li>
              <li>Monitoramento de consumo</li>
              <li>Sistema de gamificação</li>
            </ul>
            <div className="card-price">R$15,90 <span>/mês</span></div>
            <button className="purchase-button">Assinar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
