import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './dashboard.css';
import Premium from './Premium';
import Monitoring from './Monitoramento';
import AlterarPerfil from './AlterarPerfil';

const Dashboard: React.FC = () => {
  const location = useLocation();

  // Verifica se está na rota Premium
  const isPremiumPage = location.pathname === '/dashboard/premium';
  const isPerfilPage = location.pathname === '/dashboard/perfil';

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
            <Link to="/dashboard/perfil" className="menu-item">Alterar perfil</Link>
            <Link to="/" className="menu-item">Sair</Link>
          </nav>
        </aside>
        <main className="main-section">
          {/* Renderiza a seção de boas-vindas apenas quando não estiver na página de alterar perfil */}
          {!isPerfilPage && (
            <div className="welcome">
              <h2>Bem-vindo ao seu perfil de monitoramento, helo!</h2>
              <ul className="welcome-list">
                <li><Link to="/dashboard" className="welcome-item">Análises</Link></li>
                <li><Link to="/dashboard" className="welcome-item">Dicas</Link></li>
                <li><Link to="/dashboard" className="welcome-item">Metas</Link></li>
                <li><Link to="/dashboard/premium" className="welcome-item">Premium</Link></li>
              </ul>
            </div>
          )}
          
          {/* Renderiza o conteúdo apenas se não estiver na página de "Alterar Perfil" */}
          {!isPerfilPage && (
            <section className="content-dashboard">
              <Routes>
                <Route path="/" element={<Monitoring />} />
              </Routes>
            </section>
          )}
          
          {/* Página Premium */}
          {isPremiumPage && (
            <Routes>
              <Route path="premium" element={<Premium />} />
            </Routes>
          )}
          
          {/* Página Alterar Perfil - Renderiza diretamente a página sem o container */}
          {isPerfilPage && (
            <Routes>
              <Route path="perfil" element={<AlterarPerfil />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
