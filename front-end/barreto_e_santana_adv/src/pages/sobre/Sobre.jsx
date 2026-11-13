import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.scss";

import IconSearch from "../../assets/icons/search.svg";
import IconPapper from "../../assets/icons/papper.svg";
import IconDirCivil from "../../assets/icons/civil.svg";
import IconHands from "../../assets/icons/hands.svg";

import ImgDra1 from "../../assets/arts/anna-clara-sobre-sem-dourado.png";
import ImgMotivos from "../../assets/arts/nova2.jpg";
import ImgEquipe from "../../assets/arts/nova3.jpg";

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
        <div className="home-contact-bar">
          <p>Atendimento em Belo Horizonte e em todo o Brasil</p>
          <a href="mailto:annaclarabarretoadv@gmail.com">annaclarabarretoadv@gmail.com</a>
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
          <div className="infos">
            <div className="adv1">
              <div className="texto" data-aos="fade-left">
                <h1>Conheça Anna Clara, Advogada Trabalhista</h1>
                <li>
                  <h3>
                    Advogada com atuação especializada em Direito do Trabalho,
                    com pós-graduação em Direito e Processo do Trabalho.
                  </h3>
                </li>
                <li>
                  <h3>
                    Atuo na defesa dos direitos dos trabalhadores, oferecendo
                    uma advocacia estratégica, ética e comprometida com soluções
                    jurídicas eficazes.
                  </h3>
                </li>
                <li>
                  <h3>
                    Minha atuação abrange reclamações trabalhistas,
                    reconhecimento de vínculo empregatício, verbas rescisórias,
                    horas extras, rescisão indireta, estabilidade gestacional e
                    demais questões relacionadas às relações de trabalho.
                  </h3>
                </li>
                <li>
                  <h3>
                    Meu trabalho é pautado na responsabilidade, precisão técnica
                    e atendimento individualizado, buscando a proteção dos
                    direitos e interesses de cada cliente.
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
          </div>
        </section>

        <section className="Equipe" id="equipe">
          <div className="infos">
            <div className="texto" data-aos="fade-left">
              <h1>Conheça nossa equipe</h1>
              <p>
                A equipe Anna Clara Barreto - Advogados atua em diversas áreas
                do Direito, com destaque para o Direito do Trabalho. Oferecemos
                um atendimento próximo, com orientações claras e soluções
                jurídicas pensadas para a realidade de cada cliente.
              </p>
              <p>
                Se você enfrenta um problema no trabalho, na família, em uma
                relação de consumo ou em outra área da sua vida, nossa equipe
                está pronta para ouvir o que aconteceu, esclarecer suas dúvidas
                e avaliar com você os caminhos possíveis. Cada caso tem uma
                história que merece atenção e respeito. Por isso, conduzimos
                cada demanda com responsabilidade, transparência e firmeza na
                defesa dos seus interesses.
              </p>
              <p>
                Do primeiro atendimento ao acompanhamento de cada etapa,
                ajudamos você a entender seus direitos e suas opções para tomar
                decisões com segurança.
              </p>
            </div>
            <img src={ImgEquipe} alt="Equipe de advogados" data-aos="fade-right" />
          </div>
        </section>

        <section className="Areas" id="motivos">
          <div className="infos">
            <img src={ImgMotivos} alt="" />
            <div className="textos">
              <div className="titulo">
                <h1>
                  6 motivos para nos escolher
                </h1>
              </div>

              <div className="textos_areas">
                <div className="coluna">
                  <div className="area1">
                    <h1 className="motivo-numero">01</h1>
                    <h1>Atendimento individual</h1>
                    <li>
                      <p>
                        Cada demanda recebe atenção conforme a situação e as
                        necessidades apresentadas.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">02</h1>
                    <h1>Escuta atenta</h1>
                    <li>
                      <p>
                        Busco compreender o contexto, as dúvidas e o que é
                        importante para você.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">03</h1>
                    <h1>Análise cuidadosa</h1>
                    <li>
                      <p>
                        Fatos e documentos são avaliados com atenção e
                        responsabilidade.
                      </p>
                    </li>
                    <li></li>
                  </div>
                </div>
                <div className="coluna">
                  <div className="area1">
                    <h1 className="motivo-numero">04</h1>
                    <h1>Estratégia adequada</h1>
                    <li>
                      <p>
                        Os caminhos jurídicos são avaliados conforme cada caso.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">05</h1>
                    <h1>Comunicação clara</h1>
                    <li>
                      <p>
                        Explico possibilidades e próximos passos em linguagem
                        acessível.
                      </p>
                    </li>
                  </div>
                  <div className="area1">
                    <h1 className="motivo-numero">06</h1>
                    <h1>Acompanhamento próximo</h1>
                    <li>
                      <p>
                        Você recebe informações sobre as etapas e movimentações
                        da demanda.
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
