import React, { useState } from 'react';

interface CadastroFinalProps {
  onBack: () => void;
  onSubmit: (data: { cpf: string; cep: string; imagem: File[] }) => void;
}

const CadastroFinal: React.FC<CadastroFinalProps> = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    cpf: '',
    cep: '',
    imagem: [] as File[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData((prev) => ({ ...prev, imagem: Array.from(files) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Monta o objeto com os dados do formulário
      const payload = {
        cpf: formData.cpf,
        cep: formData.cep,
        imagem: formData.imagem, // Envia os arquivos para o handler principal
      };

      onSubmit(payload); // Passa os dados completos para o `Principal`
    } catch (err: any) {
      setError(err.message || 'Erro ao submeter os dados.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Informações adicionais</h2>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={formData.cep}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <i className="fas fa-image"></i>
        <input
          type="file"
          accept="application/pdf"
          id="imagem"
          name="imagem"
          multiple
          onChange={handleFileChange}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="button-group">
        <button type="button" className="btn" onClick={onBack} disabled={isSubmitting}>
          Voltar
        </button>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Cadastrar'}
        </button>
      </div>
    </form>
  );
};

export default CadastroFinal;
