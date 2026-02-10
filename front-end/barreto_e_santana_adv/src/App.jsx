import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import IconPhone from "./assets/icons/phone.svg";
import IconMail from "./assets/icons/mail.svg";
import IconeDirCivil from "./assets/icons/civil.svg";
import LogoPequena from "./assets/icons/logo.png";
import Arrow from "./assets/icons/arrow.svg";

import ImgDra1 from "./assets/arts/art1.png";
import ImgDra2 from "./assets/arts/art2.png";
import ImgAreas from "./assets/arts/art_areas_atuacao.png";
import BannerBaixo from "./assets/banners/art3.png";

import Header from "../src/assets/components/header/Header.jsx";
import "../src/assets/components/header/Header.css";
import Results from "../src/assets/components/results/Results.jsx";
import "../src/assets/components/results/Results.css";
import FeedbackCarousel from "../src/assets/components/carroussel/FeedbackCarousel.jsx";
import "../src/assets/components/carroussel/FeedbackCarousel.css";

function App() {
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
        <div className="Contatos_topo">
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
        <section className="Hero">
          <div className="infos">
            <h1>
              Defendendo seus direitos com ética, estratégia e compromisso.
            </h1>
            <h3>
              Atuamos com seriedade e proximidade em todo o Brasil, oferecendo
              soluções jurídicas claras, humanas e eficazes para cada cliente.
            </h3>
            <button className="Button_hero">Conheça a Barreto & Santana</button>
          </div>
        </section>

        <section className="Muito_alem">
          <div className="infos">
            <img src={LogoPequena} alt="" className="Logo_pequena" />
            <h1>
              Muito além do Direito.<br></br>Um compromisso com pessoas.
            </h1>
            <h3>
              Nossa atuação é guiada por ética, transparência e
              responsabilidade. Acreditamos em um atendimento próximo,
              estratégico e personalizado, onde cada caso é tratado com atenção
              real e respeito à história de cada cliente.
            </h3>
            <img src={Arrow} alt="" className="Arrow" />
          </div>
        </section>

        {/* SECTION SOBRE */}

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

        <Results />

        <section className="Areas">
          <div className="infos">
            <img src={ImgAreas} alt="" />
            <div className="textos">
              <div className="titulo">
                <h1>Áreas de Atuação</h1>
                <h3>
                  Atuamos de forma estratégica nas principais áreas do Direito,
                  <br></br>
                  sempre com foco em soluções claras e eficientes.
                </h3>
              </div>

              <div className="textos_areas">
                <div className="coluna">
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                </div>
                <div className="coluna">
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeDirCivil} alt="" />
                    <h1>Direito Civil</h1>
                    <li>
                      <p>
                        Atua na resolução de conflitos do dia a dia entre
                        pessoas e empresas, como contratos, cobranças,
                        indenizações e responsabilidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo garantir direitos e deveres nas
                        relações civis.
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeedbackCarousel />

        <section className="Banner_baixo">
          <img
            src={BannerBaixo}
            alt=""
            style={{
              width: "100%",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
            className="banner_baixo"
          />
        </section>

        <section className="formulario">
          <div className="infos">
            <h1>Como podemos te ajudar?</h1>
            <h3>
              <li>
                <h3>
                  Estamos prontas para te orientar e defender seus direitos.
                </h3>
              </li>
              <li>
                <h3>
                  Cada caso é único. Por isso, oferecemos um atendimento
                  próximo, personalizado e focado na melhor estratégia jurídica
                  para você.
                </h3>
              </li>
              <li>
                <h3>
                  Preencha o formulário ao lado e nossa equipe entrará em
                  contato o mais breve possível.
                </h3>
              </li>
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
