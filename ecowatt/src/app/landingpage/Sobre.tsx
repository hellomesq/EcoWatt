import React from "react";
import "./home.css";

const SobreNos: React.FC = () => {
  return (
    <div className="container">
      <div className="sobre-nos">
        <div className="text-content sobre-nos-left">
          <h1>Sobre Nós</h1>
          <p>
            Na EcoWatt, oferecemos uma plataforma de monitoramento de consumo energético.
            Nosso objetivo é tornar o uso de energia mais inteligente e sustentável,
            reduzindo custos e promovendo o uso de fontes renováveis.
          </p>
        </div>
        <div className="text-content sobre-nos-right">
          <h1>Nossos serviços</h1>
          <p>
            <span className="titulo-servico">Monitoramento de Consumo:</span>
            Monitore seu consumo de energia em tempo real e receba alertas sobre possíveis desperdícios, ajudando você a ajustar o uso e economizar.
          </p>
          <br />
          <p>
            <span className="titulo-servico">Relatórios e Insights Personalizados:</span>
            Acesse relatórios detalhados com análises personalizadas, dicas de economia e comparações com padrões regionais, para que você entenda e otimize seu consumo.
          </p>
          <br />
          <p>
            <span className="titulo-servico">Previsão e Planejamento Energético:</span>
            Planeje seu consumo com base em dados históricos e simule o impacto da adoção de energias renováveis.
            Antecipe o melhor momento para utilizar mais energia sem comprometer o orçamento.
          </p>
          <br />
          <p>
            <span className="titulo-servico">Sistema de Gamificação:</span>
            Alcance metas de consumo sustentável e receba recompensas. Transforme a economia de energia em uma experiência divertida e recompensadora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
