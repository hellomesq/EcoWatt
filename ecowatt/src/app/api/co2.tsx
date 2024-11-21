import axios from 'axios';

const getCarbonIntensity = async (zone: string) => {
  const token = 'JZ3yUxIauM8G2'; // Substitua com seu token real

  try {
    // Requisição para obter a intensidade de carbono
    const carbonResponse = await axios.get(`https://api.electricitymap.org/v3/carbon-intensity/latest?zone=${zone}`, {
      headers: {
        'auth-token': token,
      },
    });

    // Requisição para obter o detalhamento da energia (renovável, fósseis, etc.)
    const powerBreakdownResponse = await axios.get(`https://api.electricitymap.org/v3/power-breakdown/latest?zone=${zone}`, {
      headers: {
        'auth-token': token,
      },
    });

    // Lógica para determinar se a intensidade de carbono é alta ou baixa
    const carbonIntensity = carbonResponse.data.carbonIntensity;
    let intensityStatus = '';
    if (carbonIntensity > 200) {
      intensityStatus = 'Alta'; // Exemplo de limiar para "alta"
    } else {
      intensityStatus = 'Baixa'; // Exemplo de limiar para "baixa"
    }

    // Retorna todos os dados necessários
    return {
      zone: carbonResponse.data.zone,
      carbonIntensity: carbonIntensity,
      datetime: carbonResponse.data.datetime,
      intensityStatus: intensityStatus,
      renewablePercentage: powerBreakdownResponse.data.renewablePercentage,
      fossilFreePercentage: powerBreakdownResponse.data.fossilFreePercentage,
      powerConsumptionTotal: powerBreakdownResponse.data.powerConsumptionTotal,
      powerProductionTotal: powerBreakdownResponse.data.powerProductionTotal,
    };
  } catch (error) {
    console.error('Erro ao buscar dados de intensidade de carbono e energia:', error);
    throw error;
  }
};

export default getCarbonIntensity;
