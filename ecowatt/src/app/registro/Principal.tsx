import React, { useState } from 'react';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroFinal from './CadastroFinal'; // Componente para a segunda etapa do cadastro
import './registro.css';

const Principal: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false); // Alterna entre login e cadastro
  const [isFinalStep, setIsFinalStep] = useState(false); // Controle para a segunda etapa do cadastro
  const [userData, setUserData] = useState({}); // Armazena os dados coletados

  // Alterna entre as telas de login e cadastro
  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setIsFinalStep(false); // Reinicia para a primeira etapa do cadastro
  };

  // Avança para a segunda etapa do cadastro, armazenando os dados da primeira etapa
  const handleNextStep = (data: any) => {
    setUserData(data); // Armazena os dados da primeira etapa
    setIsFinalStep(true);
  };

  // Envia os dados completos ao backend
  const handleFinalSubmit = (finalData: any) => {
    const fullData = { ...userData, ...finalData }; // Combina os dados das duas etapas
    console.log('Dados completos do cadastro:', fullData);

    // Envia os dados para o backend
    fetch('/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Cadastro realizado com sucesso:', data);
        // Redireciona ou atualiza a interface após o sucesso
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error);
        // Adiciona feedback para o usuário em caso de erro
      });
  };

  return (
    <div className={`container-reg ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Tela de Login */}
          {!isSignUpMode && <Login />}

          {/* Tela de Cadastro (primeira etapa) */}
          {isSignUpMode && !isFinalStep && <Cadastro onNext={handleNextStep} />}

          {/* Tela de Cadastro Final (segunda etapa) */}
          {isSignUpMode && isFinalStep && (
            <CadastroFinal
              onBack={() => setIsFinalStep(false)} // Volta para a primeira etapa
              onSubmit={handleFinalSubmit} // Envia os dados completos
            />
          )}
        </div>
      </div>

      <div className="panels-container">
        {/* Painel do lado esquerdo */}
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo(a) aqui?</h3>
            <p>Junte-se à EcoWatt e seja parte da mudança para um futuro mais sustentável!</p>
            <button className="btn transparent" onClick={toggleMode}>
              Cadastrar-se
            </button>
          </div>
        </div>

        {/* Painel do lado direito */}
        <div className="panel right-panel">
          <div className="content">
            <h3>Bem-vindo(a) de volta!</h3>
            <p>Entre na sua conta e continue transformando o futuro com a EcoWatt!</p>
            <button className="btn transparent" onClick={toggleMode}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;