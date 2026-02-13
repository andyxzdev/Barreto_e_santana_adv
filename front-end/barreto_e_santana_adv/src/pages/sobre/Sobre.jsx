import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.css";

import IconPhone from "../../assets/icons/phone.svg";
import IconMail from "../../assets/icons/mail.svg";
import IconeDirCivil from "../../assets/icons/civil.svg";

import ImgDra1 from "../../assets/arts/art1.png";
import ImgDra2 from "../../assets/arts/art2.png";
import ImgAreas from "../../assets/arts/art_areas_atuacao.png";

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
            <img src={ImgAreas} alt="" />
            <div className="textos">
              <div className="titulo">
                <h1>Áreas de Atuação</h1>
                <h3>
                  Atuamos de forma estratégica nas principais áreas do Direito,
                  <br></br>sempre com foco em soluções claras e eficientes.
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
        <Footer />
      </main>
    </>
  );
}

export default Sobre;
