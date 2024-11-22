import React, { useState } from 'react';
import './dashboard.css';

const AlterarPerfil: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    cep: '',
    cartao: {
      numero: '',
      nomeTitular: '',
      validade: '',
      cvv: '',
    },
  });

  const [showConfirm, setShowConfirm] = useState(false); // Estado para mostrar o pop-up de confirmação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('cartao')) {
      const key = name.split('.')[1];
      setFormData((prevState) => ({
        ...prevState,
        cartao: {
          ...prevState.cartao,
          [key]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleDeleteClick = () => {
    setShowConfirm(true); // Exibe o pop-up de confirmação
  };

  const handleCancelDelete = () => {
    setShowConfirm(false); // Fecha o pop-up sem apagar a conta
  };

  const handleConfirmDelete = () => {
    // Aqui você pode adicionar a lógica para excluir a conta
    console.log('Conta excluída');
    setShowConfirm(false); // Fecha o pop-up após confirmação
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-secao">
          <div className="informacoes-usuario">
            <h3>Dados do Usuário</h3>
            <div className="form-group-perfil">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="Digite seu CPF"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder="Digite seu CEP"
                required
              />
            </div>
          </div>

          <div className="informacoes-cartao">
            <h3>Dados do Cartão</h3>
            <div className="form-group-perfil">
              <label htmlFor="cartao.numero">Número do Cartão:</label>
              <input
                type="text"
                id="cartao.numero"
                name="cartao.numero"
                value={formData.cartao.numero}
                onChange={handleChange}
                placeholder="Número do Cartão"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="cartao.nomeTitular">Nome do Titular:</label>
              <input
                type="text"
                id="cartao.nomeTitular"
                name="cartao.nomeTitular"
                value={formData.cartao.nomeTitular}
                onChange={handleChange}
                placeholder="Nome do Titular"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="cartao.validade">Validade:</label>
              <input
                type="text"
                id="cartao.validade"
                name="cartao.validade"
                value={formData.cartao.validade}
                onChange={handleChange}
                placeholder="MM/AA"
                required
              />
            </div>

            <div className="form-group-perfil">
              <label htmlFor="cartao.cvv">CVV:</label>
              <input
                type="text"
                id="cartao.cvv"
                name="cartao.cvv"
                value={formData.cartao.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
              />
            </div>
          </div>
        </div>

        <div className="botoes">
          <button type="submit" className="btn-submit">Salvar Alterações</button>
          <button type="reset" className="btn-reset">Descartar Alterações</button>
          <button type="button" className="btn-delete" onClick={handleDeleteClick}>Excluir conta</button>
        </div>
      </form>

      {/* Pop-up de confirmação */}
      {showConfirm && (
        <div className="confirmacao-popup">
          <div className="popup-container">
            <p>Você tem certeza de que deseja excluir sua conta?</p>
            <button className="btn-confirm" onClick={handleConfirmDelete}>Sim</button>
            <button className="btn-cancel" onClick={handleCancelDelete}>Não</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlterarPerfil;
