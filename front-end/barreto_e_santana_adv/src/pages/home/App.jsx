import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import IconPhone from "../../assets/icons/phone.svg";
import IconMail from "../../assets/icons/mail.svg";
import IconeDirCivil from "../../assets/icons/civil.svg";
import LogoPequena from "../../assets/icons/logo.png";
import IconWorld from "../../assets/icons/world.svg";
import IconBusiness2 from "../../assets/icons/business2.svg";
import IconBusiness from "../../assets/icons/business.svg";
import IconLocalizationYellow from "../../assets/icons/localization2.svg";
import IconPerson from "../../assets/icons/person.svg";
import Arrow from "../../assets/icons/arrow.svg";

import ImgAtendimento from "../../assets/arts/art3.png";
import ImgAreas from "../../assets/arts/art_areas_atuacao.png";
import BannerBaixo from "../../assets/banners/art3.png";

import Header from "../../assets/components/header/Header.jsx";
import "../../assets/components/header/Header.css";
import Results from "../../assets/components/results/Results.jsx";
import "../../assets/components/results/Results.css";
import FeedbackCarousel from "../../assets/components/carroussel/FeedbackCarousel.jsx";
import "../../assets/components/carroussel/FeedbackCarousel.css";
import Forms from "../../assets/components/forms/Forms.jsx";
import "../../assets/components/forms/Forms.css";
import Footer from "../../assets/components/footer/Footer.jsx";
import "../../assets/components/footer/Footer.css";

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
        {/* <section className="Hero">
          <div className="infos">
            <h1>
              Defendendo seus direitos com ética,<br></br>estratégia e
              compromisso.
            </h1>
            <h3>
              Atuamos com seriedade e proximidade em todo o Brasil, oferecendo
              soluções jurídicas claras, humanas e eficazes para cada cliente.
            </h3>
            <button className="Button_hero">Conheça a Barreto & Santana</button>
          </div>
        </section> */}

        <section className="Topo">
          <div className="infos">
            <h1>
              Defendendo seus direitos com ética,<br></br>estratégia e
              compromisso.
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

        <section className="Atendimento">
          <div className="Titulo">
            <h1>
              Atendimento em Belo Horizonte<br></br>e em todo o Brasil
            </h1>
          </div>

          <div className="infos">
            <div className="texto_e_imagem">
              <div className="texto">
                <h1>
                  Atendimento Jurídico Especializado em Belo Horizonte e em Todo
                  o Brasil
                </h1>

                <h2>
                  Atuação estratégica em Direito do Trabalho com atendimento
                  presencial em BH e 100% online para todo o território
                  nacional.
                </h2>
                <div className="icon_e_infos">
                  <img src={IconLocalizationYellow} alt="" />
                  <li>
                    <h3>Belo Horizonte – MG</h3>
                    <p>
                      Atendimento presencial com estrutura completa e suporte
                      jurídico personalizado
                    </p>
                  </li>
                </div>
                <div className="icon_e_infos">
                  <img src={IconWorld} alt="" />
                  <li>
                    <h3>Atendimento Online Nacional</h3>
                    <p>
                      Consultoria e acompanhamento processual para clientes em
                      qualquer estado do Brasil.
                    </p>
                  </li>
                </div>
                <div className="icon_e_infos">
                  <img src={IconBusiness2} alt="" />
                  <li>
                    <h3>Especialização em Direito do Trabalho</h3>
                    <p>
                      Atuação focada na defesa técnica e estratégica dos seus
                      direitos trabalhistas
                    </p>
                  </li>
                </div>
                <div className="icon_e_infos">
                  <img src={IconPerson} alt="" />
                  <li>
                    <h3>Canal Direto com o Advogado</h3>
                    <p>
                      Comunicação clara, acompanhamento contínuo e suporte
                      rápido.
                    </p>
                  </li>
                </div>
              </div>
              <img src={ImgAtendimento} alt="" className="Img_dra1" />
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

        <section className="Formulario">
          <div className="infos">
            <div className="textos">
              <h1>Como podemos te ajudar?</h1>
              <li>
                <h2 className="">
                  Estamos prontas para te orientar e defender seus direitos.
                </h2>
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
            </div>

            <Forms />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
