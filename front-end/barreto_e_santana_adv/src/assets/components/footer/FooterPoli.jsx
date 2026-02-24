import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import Logo from "../../logo/Logo1.png";

import IconeDireitoCivil from "../../icons/civil2.svg";
import IconeDireitoTrabalhista from "../../icons/business.svg";
import IconeDireitoFamilia from "../../icons/family2.svg";
import IconeDireitoPrevidenciario from "../../icons/shield2.svg";
import IconeDireitoConsumidor from "../../icons/cart2.svg";
import IconeDireitoBancario from "../../icons/cash2.svg";
import IconeLocalization from "../../icons/localization.svg";
import IconePhone from "../../icons/phone2.svg";
import IconeEmail from "../../icons/mail2.svg";

import IconeInsta from "../../icons/insta.svg";
import IconeLinkedin from "../../icons/linkedin.svg";
import IconeFacebook from "../../icons/facebook.svg";

const FooterPoli = ({ customStyle }) => {
  return (
    <footer>
      <div className="infos_cima">
        <div className="Coluna_esq">
          <img src={Logo} alt="Logo Barreto & Santana" />
          <li>
            <ul href="https://www.instagram.com/andyxdev_/">
              <img src={IconeInsta} alt="Instagram" />
            </ul>
            <ul>
              <img src={IconeLinkedin} alt="LinkedIn" />
            </ul>
            <ul>
              <img src={IconeFacebook} alt="Facebook" className="icon-face" />
            </ul>
          </li>
        </div>
        <div className="Coluna_meio">
          <div className="Fale_conosco_footer">
            <h1>Fale conosco</h1>
            <li>
              <ul>
                <img src={IconePhone} alt="Telefone" />
                <p>(31) 7205-7198</p>
              </ul>
              <ul>
                <img src={IconeEmail} alt="Email" />
                <p>contato@barretoesantana.adv.br</p>
              </ul>
            </li>

            <button className="ButtonTopo">
              <a
                href="https://api.whatsapp.com/send?phone=553172057198&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
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
                <img src={IconeDireitoBancario} alt="Direito Bancário" />
                <p>Direito Bancário</p>
              </ul>
            </li>
          </div>
        </div>
        <div className="Coluna_dir">
          <div className="Localizacao_footer">
            <h1>Localização</h1>
            <li>
              <img src={IconeLocalization} alt="Localização" />
              <p>Rua Sergipe, 46- Centro (Belo Horizonte)</p>
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
                  <Link to="/sobre">Sobre nós</Link>
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
            © 2026 Barreto & Santana Advocacia | todos os direitos reservados
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

export default FooterPoli;
