import React, { useEffect, useState } from 'react';
import getCarbonIntensity from '../api/co2';

const Monitoring: React.FC = () => {
  const [carbonData, setCarbonData] = useState<any>(null);

  useEffect(() => {
    const fetchCarbonData = async () => {
      try {
        const data = await getCarbonIntensity('BR-NE');
        setCarbonData(data);
      } catch (error) {
        console.error('Erro ao carregar dados de intensidade de carbono', error);
      }
    };
    fetchCarbonData();
  }, []);

  return (
    <div>
      {carbonData ? (
        <div>
          <h3>Intensidade de Carbono Atual</h3>
          <p><strong>Zona:</strong> {carbonData.zone}</p>
          <p><strong>Intensidade de Carbono:</strong> {carbonData.carbonIntensity} gCO2eq/kWh</p>
          <p><strong>Data:</strong> {new Date(carbonData.datetime).toLocaleString()}</p>
          <p><strong>Status da Intensidade:</strong> {carbonData.intensityStatus}</p>
          <p><strong>Porcentagem de Energia Renovável:</strong> {carbonData.renewablePercentage}%</p>
          <p><strong>Porcentagem de Energia Sem Fósseis:</strong> {carbonData.fossilFreePercentage}%</p>
          <p><strong>Consumo Total de Energia:</strong> {carbonData.powerConsumptionTotal} MW</p>
          <p><strong>Produção Total de Energia:</strong> {carbonData.powerProductionTotal} MW</p>
        </div>
      ) : (
        <p>Carregando dados de intensidade de carbono...</p>
      )}
    </div>
  );
};

export default Monitoring;
