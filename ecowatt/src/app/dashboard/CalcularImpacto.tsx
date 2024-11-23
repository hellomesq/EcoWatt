import React, { useState } from 'react';
import axios from 'axios';

const CalcularImpacto: React.FC = () => {
  const [cpf, setCpf] = useState<string>('');
  const [result, setResult] = useState<any | null>(null);

  const handleCalculate = async () => {
    try {
      const response = await axios.get('http://localhost:5000/calcular', { params: { cpf } });
      setResult(response.data);
    } catch (error: any) {
      alert(error.response?.data?.error || 'Erro ao calcular impacto.');
    }
  };

  return (
    <div>
      <h2>Calcular Impacto</h2>
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <button onClick={handleCalculate}>Calcular</button>
      {result && (
        <div>
          <h3>Resultados</h3>
          <p>Consumo total: {result.soma_kwh} kWh</p>
          <p>Média de consumo: {result.media_consumo} kWh</p>
          <p>Impacto CO2: {result.impacto_co2} kg</p>
          <p>Impacto financeiro: R$ {result.impacto_real}</p>
          <p>Economia potencial: R$ {result.economia_eco}</p>
        </div>
      )}
    </div>
  );
};

export default CalcularImpacto;
