// components/Planos.tsx
import React, { useState } from 'react';
import './home.css';

const Planos: React.FC = () => {
  // Estado para controlar se o preço é mensal ou anual
  const [isAnnual, setIsAnnual] = useState(false);

  // Função para alterar entre mensal e anual
  const togglePlan = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="container-planos">
      <div className="pricing-layout">
        {/* Seção Esquerda */}
        <div className="pricing-info">
          <div className="pricing-header">
            <button 
              className={`toggle-button ${!isAnnual ? 'active' : ''}`} 
              onClick={togglePlan}
            >
              Mensal
            </button>
            <button 
              className={`toggle-button ${isAnnual ? 'active' : ''}`} 
              onClick={togglePlan}
            >
              Anual <span className="discount">-10%</span>
            </button>
          </div>
          <h1 className="pricing-title">Preços e Planos</h1>
          <p className="pricing-description">
            Na EcoWatt, economizar energia vai além de reduzir custos — é um compromisso com a sustentabilidade. <br />
            Nossos planos unem tecnologia de ponta e inteligência prática para transformar seu consumo de energia. Você economiza no dia a dia enquanto faz a diferença para um planeta mais verde e um futuro mais sustentável. <br />
            Escolha o plano ideal para você e faça parte dessa mudança!
          </p>
        </div>

        {/* Seção Direita */}
        <div className="pricing-cards">
          <div className="card">
            <h2 className="card-title">Básico</h2>
            <ul className="card-features">
              <li><i className="fa fa-check" aria-hidden="true"></i> Dicas de economia</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Comparações regionais</li>
              <li><i className="fa fa-times" aria-hidden="true"></i> Planejamento de consumo</li>
              <li><i className="fa fa-times" aria-hidden="true"></i> Simulação de novas fontes</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Monitoramento de consumo</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Sistema de gamificação</li>
            </ul>
            <div className="card-price-plus">
              {isAnnual ? 'R$0,00' : 'R$0,00'} <span>/{isAnnual ? 'ano' : 'mês'}</span>
            </div>
            <button className="purchase-button">Começar</button>
          </div>

          <div className="card agency"><br />
            <h2 className="card-title">Premium</h2>
            <ul className="card-features-plus">
              <li><i className="fa fa-check" aria-hidden="true"></i> Dicas de economia</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Comparações regionais</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Planejamento de consumo</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Simulação de novas fontes</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Monitoramento de consumo</li>
              <li><i className="fa fa-check" aria-hidden="true"></i> Sistema de gamificação</li>
            </ul>
            {/* Alterar o valor conforme o estado */}
            <div className="card-price-plus">
              {isAnnual ? 'R$171,72' : 'R$15,90'} <span>/{isAnnual ? 'ano' : 'mês'}</span>
            </div>
            <button className="purchase-button-plus">Começar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
