import React, { useState } from 'react';

interface CadastroFinalProps {
  onBack: () => void;
}

const CadastroFinal: React.FC<CadastroFinalProps> = ({ onBack }) => {
  const [showInfo, setShowInfo] = useState<{ [key: string]: boolean }>({
    cpf: false,
    cep: false,
    imagem: false,
  });

  const handleMouseEnter = (field: string) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleMouseLeave = (field: string) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">Informações adicionais</h2>

      {/* Input de CPF */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="text" placeholder="CPF" />
      </div>

      {/* Input de CEP */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="text" placeholder="CEP" />
      </div>

      {/* Input de Imagem */}
      <div className="input-field">
        <i className="fas fa-image"></i>
        <input
          type="file"
          accept="image/*"
          id="imagem"
          name="imagem"
          multiple
        />
        <i
          className="fas fa-info-circle info-icon"
          onMouseEnter={() => handleMouseEnter('imagem')}
          onMouseLeave={() => handleMouseLeave('imagem')}
        ></i>
        {showInfo.imagem && (
          <div className="info-popup">
            <p>Para fazermos sua análise, é necessário pelo menos 3 contas de energia. Envie em formato PDF.</p>
          </div>
        )}
      </div>

      <div className="button-group">
        <button type="button" className="btn" onClick={onBack}>
          Voltar
        </button>
        <input type="submit" className="btn" value="Cadastrar" />
      </div>
    </form>
  );
};

export default CadastroFinal;
