import React, { useState } from 'react';

interface CadastroProps {
  onNext: (data: { usuario: string; email: string; senha: string }) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData); // Envia os dados para a próxima etapa
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Cadastro</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="usuario"
          placeholder="Usuário"
          value={formData.usuario}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        Próximo
      </button>
    </form>
  );
};

export default Cadastro;
