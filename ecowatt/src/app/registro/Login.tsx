import React from 'react';

const Login: React.FC = () => {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Entrar</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="CPF" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Senha" />
      </div>
      <input type="submit" value="Entrar" className="btn solid" />
    </form>
  );
};

export default Login;
