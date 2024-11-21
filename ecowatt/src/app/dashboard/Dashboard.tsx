import React, { useState, useEffect } from 'react';
import getCarbonIntensity from '../api/co2';
import './dashboard.css';

const Dashboard: React.FC = () => {
  const [carbonData, setCarbonData] = useState<any>(null);

  useEffect(() => {
    const fetchCarbonData = async () => {
      try {
        const data = await getCarbonIntensity('BR-NE'); // Usando 'DE' para a Alemanha como exemplo
        setCarbonData(data);
      } catch (error) {
        console.error('Erro ao carregar dados de intensidade de carbono', error);
      }
    };
    fetchCarbonData();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="header-dashboard">
        <h1 className="logo">ECOWATT</h1>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar-dashboard">
          <nav className="menu-dashboard">
            <a href="/" className="menu-item">Início</a>
            <a href="/dashboard" className="menu-item">Monitoramento</a>
            <a href="/" className="menu-item">Alterar perfil</a>
            <a href="/" className="menu-item">Sair</a>
          </nav>
        </aside>
        <main className="main-section">
          <div className="welcome">
            <h2>Bem-vindo ao seu perfil de monitoramento, helo!</h2>
          </div>
          <section className="content-dashboard">
            {carbonData ? (
              <div>
                <h3>Intensidade de Carbono Atual</h3>
                <p><strong>Zona:</strong> {carbonData.zone}</p>
                <p><strong>Intensidade de Carbono:</strong> {carbonData.carbonIntensity} gCO2eq/kWh</p>
                <p><strong>Data:</strong> {new Date(carbonData.datetime).toLocaleString()}</p>
                <p><strong>Status da Intensidade:</strong> {carbonData.intensityStatus}</p>
                <p><strong>Porcentagem de Energia Renovável:</strong> {carbonData.renewablePercentage}%</p>
                <p><strong>Porcentagem de Energia Sem Fósseis:</strong> {carbonData.fossilFreePercentage}%</p>
                <p><strong>Consumo Total de Energia:</strong> {carbonData.powerConsumptionTotal} MW</p>
                <p><strong>Produção Total de Energia:</strong> {carbonData.powerProductionTotal} MW</p>
              </div>
            ) : (
              <p>Carregando dados de intensidade de carbono...</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
