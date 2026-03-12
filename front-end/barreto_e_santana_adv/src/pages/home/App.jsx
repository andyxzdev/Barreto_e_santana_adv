import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import IconPhone from "../../assets/icons/phone.svg";
import IconMail from "../../assets/icons/mail.svg";
import IconeDirCivil from "../../assets/icons/civil.svg";
import IconeFamily from "../../assets/icons/family.svg";
import IconeShield from "../../assets/icons/shield.svg";
import IconeCart from "../../assets/icons/cart.svg";
import IconeCash from "../../assets/icons/cash.svg";
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
import "../../assets/components/header/Header.scss";
import Results from "../../assets/components/results/Results.jsx";
import "../../assets/components/results/Results.scss";
import FeedbackCarousel from "../../assets/components/carroussel/FeedbackCarousel.jsx";
import "../../assets/components/carroussel/FeedbackCarousel.scss";
import Forms from "../../assets/components/forms/Forms.jsx";
import "../../assets/components/forms/Forms.scss";
import Footer from "../../assets/components/footer/Footer.jsx";
import "../../assets/components/footer/Footer.scss";
import ButtonContact from "../../assets/components/button/ButtonContact.jsx";
import "../../assets/components/button/ButtonContact.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
              <p>(31) 7205-7198</p>
            </div>
            <div className="contato2">
              <img src={IconMail} alt="" />
              <p>contato@barretoesantana.adv.br</p>
            </div>
          </div>
        </div>
        <Header />
        <section className="Topo-inicio">
          <div className="infos-topo" id="topo">
            <h1>
              Defendendo seus direitos com ética, estratégia e compromisso.
            </h1>
            <h3>
              Atuamos com seriedade e proximidade em Belo Horizonte e em todo o
              Brasil, oferecendo soluções jurídicas claras, humanas e eficazes
              para cada cliente.
            </h3>
            {/* <button
              className="Button_hero"
              onClick={() => {
                toggleMenu();
                window.open("https://wa.me/553172057198", "_blank");
              }}
            >
              Fale conosco
            </button> */}

            <ButtonContact Text="Fale conosco" />
          </div>
        </section>

        <section className="Muito_alem" id="valores">
          <div className="infoss">
            <img
              src={LogoPequena}
              alt=""
              className="Logo_pequena"
              data-aos="fade-up"
            />
            <h1 data-aos="fade-down">
              Muito além do Direito. Um compromisso com pessoas.
            </h1>
            <h3 data-aos="fade-up">
              Nossa atuação é guiada por ética, transparência e
              responsabilidade. Acreditamos em um atendimento próximo,
              estratégico e personalizado, onde cada caso é tratado com atenção
              real e respeito à história de cada cliente.
            </h3>
            <img src={Arrow} alt="" className="Arrow" data-aos="fade-up" />
          </div>
        </section>

        <section className="Atendimento" id="atendimento">
          <div className="Titulo" data-aos="fade-up">
            {/* <h1>
              Atendimento em Belo Horizonte<br></br>e em todo o Brasil
            </h1> */}
          </div>

          <div className="infos">
            <div className="texto_e_imagem">
              <div className="texto" data-aos="fade-right">
                <h1>
                  Atendimento Jurídico Especializado em Belo Horizonte e em Todo
                  o Brasil
                </h1>

                <h2>
                  Advocacia estratégica para pessoas e empresas, com atendimento
                  presencial em Belo Horizonte e atuação em todo o Brasil.
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
              <img
                src={ImgAtendimento}
                alt=""
                className="Img_dra1"
                data-aos="fade-left"
              />
            </div>
          </div>
        </section>
        <section id="resultados">
          <Results />
        </section>

        <section className="Areass" id="areas">
          <div className="infos">
            <img src={ImgAreas} alt="" className="Img-art" />
            <div className="textoss">
              <div className="titulo" data-aos="fade-up">
                <h1>Áreas de Atuação</h1>
                <h3>
                  Atuamos de forma estratégica nas principais áreas do Direito,
                  <br></br>sempre com foco em soluções claras e eficientes.
                </h3>
              </div>

              <div className="textos-areas">
                <div className="coluna" data-aos="fade-left">
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
                    <img src={IconeFamily} alt="" />
                    <h1>Direito de Família</h1>
                    <li>
                      <p>
                        Cuida das relações familiares, como divórcio, pensão
                        alimentícia, guarda de filhos e inventários.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo proteger vínculos, direitos e
                        interesses das partes envolvidas, com sensibilidade e
                        responsabilidade.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconBusiness2} alt="" />
                    <h1>Direito Trabalhista</h1>
                    <li>
                      <p>
                        Defende os direitos de empregados e empregadores nas
                        relações de trabalho.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo resolver questões como verbas
                        rescisórias, horas extras, assédio e acordos
                        trabalhistas.
                      </p>
                    </li>
                  </div>
                </div>
                <div className="coluna" data-aos="fade-right">
                  <div className="area1">
                    <img src={IconeShield} alt="" />
                    <h1>Direito Previdenciário</h1>
                    <li>
                      <p>
                        Atua na garantia de benefícios do INSS, como
                        aposentadorias, pensões e auxílios.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo assegurar proteção e estabilidade
                        financeira em momentos importantes da vida.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeCart} alt="" />
                    <h1>Direito do Consumidor</h1>
                    <li>
                      <p>
                        Protege o consumidor em relações de compra e prestação
                        de serviços.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo resolver problemas como cobranças
                        indevidas, produtos com defeito e falhas na prestação de
                        serviços.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <img src={IconeCash} alt="" />
                    <h1>Direito Bancário</h1>
                    <li>
                      <p>
                        Atua na defesa dos direitos do consumidor e de empresas
                        em relações com instituições financeiras.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tem como objetivo resolver questões como juros abusivos,
                        renegociação de dívidas, contratos bancários e cobranças
                        indevidas.
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feedbacks">
          <FeedbackCarousel />
        </section>

        <section className="Banner-baixo">
          <img
            src={BannerBaixo}
            alt=""
            style={{
              width: "100%",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
            className="banner-img"
          />
        </section>

        <section className="Formulario" id="contato">
          <div className="infoss">
            <div className="textos">
              <h1 data-aos="fade-left">Como podemos te ajudar?</h1>
              <li data-aos="fade-right">
                <h2 className="">
                  Estamos prontas para te orientar e defender seus direitos.
                </h2>
              </li>
              <li data-aos="fade-up">
                <h3>
                  Cada situação jurídica demanda atenção individualizada e
                  estratégia bem definida. Por isso, atuamos com análise técnica
                  detalhada, planejamento jurídico estruturado e acompanhamento
                  constante para assegurar a melhor condução do seu caso.
                </h3>
              </li>
              <li data-aos="fade-down">
                <h3>
                  Nosso compromisso é oferecer orientação clara, defesa
                  consistente e suporte próximo durante todas as fases do
                  processo, sempre com transparência e responsabilidade.
                </h3>
              </li>
              <li data-aos="fade-down">
                <h3>
                  Preencha o formulário ao lado e nossa equipe retornará o
                  contato com agilidade para avaliar sua demanda e indicar a
                  melhor estratégia jurídica.
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
