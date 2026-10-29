import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import Logo from "../../logo/logonova2.png";

import IconeDireitoCivil from "../../icons/civil2.svg";
import IconeDireitoTrabalhista from "../../icons/business.svg";
import IconeDireitoFamilia from "../../icons/family2.svg";
import IconeDireitoPrevidenciario from "../../icons/shield2.svg";
import IconeDireitoConsumidor from "../../icons/cart2.svg";
import IconeDireitoTransito from "../../icons/transit2.svg";
import IconeLocalization from "../../icons/localization.svg";
import IconePhone from "../../icons/phone2.svg";
import IconeEmail from "../../icons/mail2.svg";

import IconeInsta from "../../icons/insta.svg";
import IconeLinkedin from "../../icons/linkedin.svg";
import IconeFacebook from "../../icons/facebook.svg";

const FooterSobre = ({ customStyle }) => {
  return (
    <footer>
      <div className="infos_cima">
        <div className="Coluna_esq">
          <img src={Logo} alt="Logo Anna Clara, Advogada Trabalhista" />
          <li>
            <a
              href="https://www.instagram.com/advannacbarreto/"
              target="_blank"
            >
              <img src={IconeInsta} alt="Instagram" />
            </a>
            <a
              href="https://www.instagram.com/barretoesantanaadv/"
              target="_blank"
            >
              <img src={IconeLinkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/barretoesantanaadv/"
              target="_blank"
            >
              <img src={IconeFacebook} alt="Facebook" className="icon-face" />
            </a>
          </li>
        </div>
        <div className="Coluna_meio">
          <div className="Fale_conosco_footer">
            <h1>Fale conosco</h1>
            <li>
              <ul>
                <img src={IconePhone} alt="Telefone" />
                <p>(31) 99183-8165</p>
              </ul>
              <ul>
                <img src={IconeEmail} alt="Email" />
                <p>annaclarabarretoadv@gmail.com</p>
              </ul>
            </li>

            <button className="ButtonTopo">
              <a
                href="https://api.whatsapp.com/send?phone=5531991838165&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
              >
                Trabalhe conosco
              </a>
            </button>
          </div>
          <div className="Areas_atuacao_footer">
            <h1>Áreas de atuação</h1>
            <li>
              <ul>
                <img src={IconeDireitoCivil} alt="Direito Civil" />
                <p>Direito Civil</p>
              </ul>
              <ul>
                <img src={IconeDireitoTrabalhista} alt="Direito Trabalhista" />
                <p>Direito Trabalhista</p>
              </ul>
              <ul>
                <img src={IconeDireitoFamilia} alt="Direito Família" />
                <p>Direito Família</p>
              </ul>
              <ul>
                <img
                  src={IconeDireitoPrevidenciario}
                  alt="Direito Previdenciário"
                />
                <p>Direito Previdenciário</p>
              </ul>
              <ul>
                <img src={IconeDireitoConsumidor} alt="Direito do Consumidor" />
                <p>Direito do Consumidor</p>
              </ul>
              <ul>
                <img src={IconeDireitoTransito} alt="Direito de Trânsito" />
                <p>Direito de Trânsito</p>
              </ul>
            </li>
          </div>
        </div>
        <div className="Coluna_dir">
          <div className="Localizacao_footer">
            <h1>Localização</h1>
            <li>
              <img src={IconeLocalization} alt="Localização" />
              <p>R. 741, 155 - Jardim Vitoria, Belo Horizonte - MG, 31970-643</p>
            </li>
          </div>
          <div className="Links_rapidos_footer">
            <nav>
              <h1>Links Rápidos</h1>
              <ul>
                <li>
                  <Link to="/home">Início</Link>
                </li>
                <li>
                  <a href="#associados">Associados</a>
                </li>
                <li>
                  <a href="#motivos">Motivos para nos escolher</a>
                </li>
                <li>
                  <a href="#como-trabalhamos">Como trabalhamos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="infos_baixo">
        <li>
          <p className="Politic">
            <Link to="/politprivac">Política de Privacidade</Link>
          </p>
          <p className="direitos_reservados_texto">
            {" "}
            © 2026 Anna Clara, Advogada Trabalhista | todos os direitos reservados
          </p>
          <p className="desenvolvido_andy">
            {" "}
            Desenvolvido por{" "}
            <a href="https://www.instagram.com/andyxdev_/">Andyxdev</a>
          </p>
        </li>
      </div>
    </footer>
  );
};

export default FooterSobre;
