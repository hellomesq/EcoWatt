import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './dashboard.css';
import Premium from './Premium';
import Monitoring from './Monitoramento';

const Dashboard: React.FC = () => {
  const location = useLocation();

  // Verifica se está na rota Premium
  const isPremiumPage = location.pathname === '/dashboard/premium';

  return (
    <div className="dashboard-container">
      <header className="header-dashboard">
        <h1 className="logo">ECOWATT</h1>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar-dashboard">
          <nav className="menu-dashboard">
            <Link to="/" className="menu-item">Início</Link>
            <Link to="/dashboard" className="menu-item">Monitoramento</Link>
            <Link to="/" className="menu-item">Alterar perfil</Link>
            <Link to="/" className="menu-item">Sair</Link>
          </nav>
        </aside>
        <main className="main-section">
          <div className="welcome">
            <h2>Bem-vindo ao seu perfil de monitoramento, helo!</h2>
            <ul className="welcome-list">
              <li><Link to="/dashboard" className="welcome-item">Análises</Link></li>
              <li><Link to="/dashboard" className="welcome-item">Dicas</Link></li>
              <li><Link to="/dashboard/premium" className="welcome-item">Premium</Link></li>
            </ul>
          </div>
          {!isPremiumPage && ( // Só exibe o container para outras páginas
            <section className="content-dashboard">
              <Routes>
                <Route path="/" element={<Monitoring />} />
                <Route path="premium" element={<Premium />} />
              </Routes>
            </section>
          )}
          {isPremiumPage && ( // Página Premium, sem o container
            <Routes>
              <Route path="premium" element={<Premium />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
