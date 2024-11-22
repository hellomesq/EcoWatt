import React from 'react';
import './registro.css';

const Pagamento: React.FC = () => {
  return (
    <main className="main-container">
      <div className="payment-page">
        {/* Seção esquerda - Informações do cartão */}
        <div className="payment-form">
          <h2>Selecione o método de pagamento</h2>
          <div className="payment-options">
            <button className="active">Cartão de crédito</button>
            <button disabled>Cartão de débito</button>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="cardName">Nome impresso</label>
              <input type="text" id="cardName" placeholder="Ana S Moreira" />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Número</label>
              <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="month">Mês</label>
                <select id="month">
                  <option value="">Janeiro</option>
                  <option value="">Fevereiro</option>
                  <option value="">Março</option>
                  <option value="">Abril</option>
                  <option value="">Maio</option>
                  <option value="">Junho</option>
                  <option value="">Julho</option>
                  <option value="">Agosto</option>
                  <option value="">Setembro</option>
                  <option value="">Outubro</option>
                  <option value="">Novembro</option>
                  <option value="">Dezembro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="year">Ano</label>
                <select id="year">
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                  <option value="">2027</option>
                  <option value="">2028</option>
                  <option value="">2029</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" />
              </div>
            </div>
          </form>
        </div>

        {/* Seção direita - Resumo da compra */}
        <div className="order-summary">
          <h2>Assinatura</h2>
          <p>Plano premium</p>
          <ul>
            <li>Dicas de economia</li>
            <li>Comparações regionais</li>
            <li>Planejamento de consumo</li>
            <li>Simulação de novas fontes</li>
            <li>Monitoramento de consumo</li>
            <li>Sistema de gamificação</li>
          </ul>
          <div className="price">
            <h3>$15.90</h3>
            <p>por mês</p>
          </div>
          <button className="subscribe-button">Assinar</button>
        </div>
      </div>
    </main>
  );
};

export default Pagamento;
