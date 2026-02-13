import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.scss";

import IconSearch from "../../assets/icons/search.svg";
import IconPapper from "../../assets/icons/papper.svg";
import IconDirCivil from "../../assets/icons/civil.svg";
import IconHands from "../../assets/icons/hands.svg";
import IconPhone from "../../assets/icons/phone.svg";
import IconMail from "../../assets/icons/mail.svg";

import ImgDra1 from "../../assets/arts/art1.png";
import ImgDra2 from "../../assets/arts/art2.png";
import ImgMotivos from "../../assets/arts/art_motivos.png";

import Header from "../../assets/components/header/Header.jsx";
import "../../assets/components/header/Header.scss";
import Footer from "../../assets/components/footer/Footer.jsx";
import "../../assets/components/footer/Footer.scss";

function Sobre() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 120,
      easing: "ease-in-cubic",
    });
  }, []);

  return (
    <>
      <main>
        <div className="Contatos-topo">
          <div className="infos">
            <div className="contato1">
              <img src={IconPhone} alt="" />
              <p>(99) 99999-9999</p>
            </div>
            <div className="contato2">
              <img src={IconMail} alt="" />
              <p>contato@barretoesantana.com.br</p>
            </div>
          </div>
        </div>
        <Header />
        <section className="Topo-sobre">
          <div className="infos-topo">
            <h1>Excelência e Estratégia em Direito do Trabalho</h1>
            <h3>
              Defesa técnica, atendimento personalizado e atuação estratégica
              para proteger seus direitos com segurança e responsabilidade.
            </h3>
            <h3>
              Com sede em Belo Horizonte e atendimento em todo o Brasil, atuamos
              com compromisso, ética e profundidade jurídica para transformar
              desafios trabalhistas em soluções eficazes.
            </h3>
            <button className="Button_hero">Agendar Atendimento</button>
          </div>
        </section>

        <section className="Sobre">
          <div className="Titulo">
            <h1>
              Quem está por trás<br></br>da Barreto & Santana
            </h1>
          </div>

          <div className="infos">
            <div className="adv1">
              <div className="texto">
                <h1>Dra. Anna Clara Barreto</h1>
                <li>
                  <h3>
                    Advogada com atuação sólida nas áreas de Direito Civil,
                    Família e Consumidor.
                  </h3>
                </li>
                <li>
                  <h3>
                    Reconhecida pela postura estratégica, atendimento humanizado
                    e dedicação em buscar as melhores soluções jurídicas para
                    seus clientes.
                  </h3>
                </li>
              </div>
              <img src={ImgDra1} alt="" className="Img_dra1" />
            </div>
            <div className="adv2">
              <img src={ImgDra2} alt="" className="Img_dra2" />
              <div className="texto">
                <h1>Dra. Anna Clara Barreto</h1>
                <li>
                  <h3>
                    Advogada com atuação sólida nas áreas de Direito Civil,
                    Família e Consumidor.
                  </h3>
                </li>
                <li>
                  <h3>
                    Reconhecida pela postura estratégica, atendimento humanizado
                    e dedicação em buscar as melhores soluções jurídicas para
                    seus clientes.
                  </h3>
                </li>
              </div>
            </div>
          </div>
        </section>

        <section className="Areas">
          <div className="infos">
            <img src={ImgMotivos} alt="" />
            <div className="textos">
              <div className="titulo">
                <h1>
                  6 motivos do porque escolher a Barreto & Santana Advogados
                </h1>
              </div>

              <div className="textos_areas">
                <div className="coluna">
                  <div className="area1">
                    <h1 className="motivo-numero">1</h1>
                    <h1>Experiência Comprovada</h1>
                    <li>
                      <p>
                        Atuação sólida em demandas trabalhistas, com histórico
                        consistente de resultados.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">2</h1>
                    <h1>Atendimento Personalizado</h1>
                    <li>
                      <p>
                        Cada caso é tratado de forma individualizada, com
                        estratégia específica para cada cliente.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">3</h1>
                    <h1>Comprometimento com a Ética</h1>
                    <li>
                      <p>
                        Transparência, responsabilidade e respeito em todas as
                        etapas do atendimento.
                      </p>
                    </li>
                    <li></li>
                  </div>
                </div>
                <div className="coluna">
                  <div className="area1">
                    <h1 className="motivo-numero">4</h1>
                    <h1>Estratégia Jurídica Inteligente</h1>
                    <li>
                      <p>
                        Análise técnica detalhada para maximizar suas chances de
                        êxito.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">5</h1>
                    <h1>Comunicação Clara e Direta</h1>
                    <li>
                      <p>
                        Você entende exatamente o que está acontecendo no seu
                        processo.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">6</h1>
                    <h1>Atuação Nacional</h1>
                    <li>
                      <p>
                        Atendimento presencial em Belo Horizonte e online em
                        todo o Brasil.
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Como-trabalhamos">
          <div className="infos">
            <h1>Como trabalhamos</h1>
            <div className="quadrados-espaco">
              <div className="quadrado">
                <img src={IconSearch} alt="" />
                <h3>Análise detalhada do caso</h3>
                <p>
                  Estudo técnico da documentação e identificação das melhores
                  estratégias jurídicas.
                </p>
              </div>
              <div className="quadrado">
                <img src={IconPapper} alt="" />
                <h3>Planejamento estratégico</h3>
                <p>Definição de abordagem personalizada para cada situação.</p>
              </div>
              <div className="quadrado">
                <img src={IconDirCivil} alt="" />
                <h3>Defesa técnica consistente</h3>
                <p>Atuação firme, fundamentada e focada em resultados.</p>
              </div>
              <div className="quadrado">
                <img src={IconHands} alt="" />
                <h3>Acompanhamento contínuo</h3>
                <p>Suporte durante todo o andamento processual.</p>
              </div>
            </div>
            <button
              className="botao-contato"
              onClick={() => {
                toggleMenu();
                window.open("https://wa.me/5524993215864", "_blank");
              }}
            >
              Agendar Atendimento
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Sobre;
