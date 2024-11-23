import React, { useState } from 'react';
import axios from 'axios';

const UploadPDF: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Por favor, selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/extrair_pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message || 'Arquivo processado com sucesso!');
    } catch (error: any) {
      setMessage(error.response?.data?.error || 'Erro ao processar o arquivo.');
    }
  };

  return (
    <div>
      <h2>Upload de PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadPDF;
