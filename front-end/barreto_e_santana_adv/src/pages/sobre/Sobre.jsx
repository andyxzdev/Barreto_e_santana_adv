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

import HeaderSobre from "../../assets/components/header/HeaderSobre.jsx";
import "../../assets/components/header/Header.scss";
import FooterSobre from "../../assets/components/footer/FooterSobre.jsx";
import "../../assets/components/footer/Footer.scss";
import ButtonContact from "../../assets/components/button/ButtonContact.jsx";
import "../../assets/components/button/ButtonContact.scss";

function Sobre() {
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
              <p>
                <p>(31) 7205-7198</p>
              </p>
            </div>
            <div className="contato2">
              <img src={IconMail} alt="" />
              <p>contato@barretoesantana.adv.br</p>
            </div>
          </div>
        </div>
        <HeaderSobre />
        <section className="Topo-sobre" id="topo">
          <div className="infos-topo">
            <h1 data-aos="fade-up">
              Excelência e Estratégia em Direito do Trabalho
            </h1>
            <h3 data-aos="fade-down">
              Defesa técnica, atendimento personalizado e atuação estratégica
              para proteger seus direitos com segurança e responsabilidade.
            </h3>
            <h3 data-aos="fade-down">
              Com sede em Belo Horizonte e atendimento em todo o Brasil, atuamos
              com compromisso, ética e profundidade jurídica para transformar
              desafios trabalhistas em soluções eficazes.
            </h3>
            <ButtonContact Text="Agendar atendimento" />
          </div>
        </section>

        <section className="Sobre" id="associados">
          <div className="Titulo">
            <h1 data-aos="fade-up">
              Quem está por trás<br></br>da Barreto & Santana
            </h1>
          </div>

          <div className="infos">
            <div className="adv1">
              <div className="texto" data-aos="fade-left">
                <h1>Dra. Anna Clara Barreto</h1>
                <li>
                  <h3>
                    Pós-graduada em Direito Civil e Processo Civil, com atuação
                    estratégica em Direito Empresarial, Civil e Contratual.
                    Experiência na elaboração, revisão e gestão de contratos,
                    análise de riscos e prevenção de demandas judiciais.
                  </h3>
                </li>
                <li>
                  <h3>
                    Atuo na estruturação jurídica de operações empresariais,
                    resolução de conflitos e orientação técnica para negócios
                    que precisam de segurança, conformidade e tomada de decisão
                    precisa. Trabalho com enfoque em eficiência, fundamentação
                    sólida e soluções objetivas, garantindo suporte jurídico
                    alinhado às necessidades práticas de cada caso.
                  </h3>
                </li>
              </div>
              <img
                src={ImgDra1}
                alt=""
                className="Img_dra1"
                data-aos="fade-right"
              />
            </div>
            <div className="adv2">
              <img
                src={ImgDra2}
                alt=""
                className="Img_dra2"
                data-aos="fade-right"
              />
              <div className="texto" data-aos="fade-left">
                <h1>Dra. Ludineia Santana</h1>
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

        <section className="Areas" id="motivos">
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

        <section className="Como-trabalhamos" id="como-trabalhamos">
          <div className="infos">
            <h1 data-aos="fade-left">Como trabalhamos</h1>
            <div className="quadrados-espaco">
              <div className="quadrado" data-aos="fade-up">
                <img src={IconSearch} alt="" />
                <h3>Análise detalhada do caso</h3>
                <p>
                  Avaliação minuciosa de documentos, contexto fático e riscos
                  jurídicos para definição das melhores estratégias iniciais.
                  Foco em precisão técnica e diagnóstico completo.
                </p>
              </div>
              <div className="quadrado" data-aos="fade-down">
                <img src={IconPapper} alt="" />
                <h3>Consultoria Civil e Contratual</h3>
                <p>
                  Atuação voltada à prevenção de conflitos, estruturação de
                  contratos, blindagem jurídica e orientação contínua para
                  empresas que buscam segurança, conformidade e redução de
                  riscos.
                </p>
              </div>
              <div className="quadrado" data-aos="fade-up">
                <img src={IconDirCivil} alt="" />
                <h3>Contencioso e prevenção trabalhista</h3>
                <p>
                  Análise de rotinas internas, revisão de procedimentos,
                  orientação sobre riscos trabalhistas e condução de defesas
                  técnicas para mitigar passivo atual e futuro.
                </p>
              </div>
              <div className="quadrado" data-aos="fade-down">
                <img src={IconHands} alt="" />
                <h3>Acompanhamento e suporte contínuo</h3>
                <p>
                  Estudo criterioso da documentação, do contexto e dos riscos
                  jurídicos para definir a melhor estratégia desde o início, com
                  precisão técnica e visão completa da situação.
                </p>
              </div>
            </div>
            <ButtonContact Text="Agendar atendimento" />
          </div>
        </section>
        <FooterSobre />
      </main>
    </>
  );
}

export default Sobre;
