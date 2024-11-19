import React from 'react';

interface CadastroProps {
  onNext: () => void; // Função para ir para a próxima etapa
}

const Cadastro: React.FC<CadastroProps> = ({ onNext }) => {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">Cadastro</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Usuário" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Senha" />
      </div>
      <button type="button" className="btn" onClick={onNext}>
        Próximo
      </button>
    </form>
  );
};

export default Cadastro;
