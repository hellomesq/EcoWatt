import React from 'react';
import './global.css';

const Integrantes: React.FC = () => {
  return (
    <>
      <main>
        <div className="title__int">
          <h2>
            CONHEÇA NOSSA EQUIPE <br />
            <a href="https://github.com/hellomesq/EcoWatt">
              <i className="fa-brands fa-github"></i>
              github.com/hellomesq/EcoWatt
            </a>
          </h2>
        </div>
        <div className="alinhar">
          <section className="container-profile">
            <div className="profile">
              <div className="profile-column">
                <img loading="lazy" src="../imagens/gustavo.png" alt="Profile image of Gustavo Lopes Santos da Silva" className="profile-image" />
                <div className="details">
                  <p className="name">Hellen Marinho Cordeiro</p>
                  <p className="rm">RM: 558841</p>
                  <p><a href="https://github.com/hmarinhoo" className="github-link">github.com/hmarinhoo</a></p>
                  <p><a href="https://www.linkedin.com/in/hellen-marinho-9158b5301/" className="github-link">hellenmarinho</a></p>
                </div>
              </div>
              <div className="profile-column">
                <img loading="lazy" src="../imagens/heloisa.png" alt="Profile image of Heloisa Alves de Mesquita" className="profile-image" />
                <div className="details">
                  <p className="name">Heloisa Alves de Mesquita</p>
                  <p className="rm">RM: 559145</p>
                  <p><a href="https://github.com/hellomesq" className="github-link">github.com/hellomesq</a></p>
                  <p><a href="https://www.linkedin.com/in/heloalvess" className="github-link">heloalvess</a></p>
                </div>
              </div>
              <div className="profile-column">
                <img loading="lazy" src="../imagens/joao.png" alt="Profile image of João Gabriel Silva Oliveira" className="profile-image" />
                <div className="details">
                  <p className="name">Júlia Soares Farias dos Santos</p>
                  <p className="rm">RM: 555308</p>
                  <p><a href="https://github.com/jyx97" className="github-link">github.com/jyx97</a></p>
                  <p><a href="https://www.linkedin.com/in/júlia-farias-701867325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="github-link">juliafarias</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Integrantes;
