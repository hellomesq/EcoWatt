import React, { useState } from 'react';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroFinal from './CadastroFinal'; // Novo componente para CPF e CEP
import './registro.css';

const Principal: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isFinalStep, setIsFinalStep] = useState(false); // Controle para a segunda etapa do cadastro

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setIsFinalStep(false); // Reinicia para o cadastro inicial
  };

  const goToNextStep = () => {
    setIsFinalStep(true); // Avança para a próxima etapa (CPF e CEP)
  };

  const goBackToPreviousStep = () => {
    setIsFinalStep(false); // Volta para a primeira etapa
  };

  return (
    <div className={`container-reg ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {!isSignUpMode && <Login />}
          {isSignUpMode && !isFinalStep && <Cadastro onNext={goToNextStep} />}
          {isSignUpMode && isFinalStep && <CadastroFinal onBack={goBackToPreviousStep} />}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo(a) aqui?</h3>
            <p>Junte-se à EcoWatt e seja parte da mudança para um futuro mais sustentável!</p>
            <button className="btn transparent" onClick={toggleMode}>
              Cadastrar-se
            </button>
          </div>
        </div>

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
