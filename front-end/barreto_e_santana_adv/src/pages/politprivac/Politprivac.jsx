import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Politprivac.scss";

import HeaderPoli from "../../assets/components/header/HeaderPoli.jsx";
import "../../assets/components/header/Header.scss";
import FooterPoli from "../../assets/components/footer/FooterPoli.jsx";
import "../../assets/components/footer/Footer.scss";

import IconPhone from "../../assets/icons/phone.svg";
import IconMail from "../../assets/icons/mail.svg";

function Politprivac() {
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
        <HeaderPoli />

        <section className="Topo-politic" id="topo">
          <div className="infos-topo">
            <h1 data-aos="fade-up">Política de Privacidade</h1>
            <h3 data-aos="fade-down">
              A presente Política de Privacidade tem como finalidade esclarecer,
              de forma transparente e objetiva, como ocorre a coleta,
              utilização, armazenamento e proteção dos dados pessoais fornecidos
              pelos usuários por meio deste site. A proteção das informações é
              tratada com seriedade, responsabilidade e em conformidade com a
              legislação vigente, especialmente a Lei Geral de Proteção de Dados
              Pessoais (Lei nº 13.709/2018 – LGPD).<br></br>
              <br></br>Ao acessar este site e fornecer quaisquer dados pessoais
              por meio de formulários, campos de contato ou outros meios
              disponibilizados, o usuário declara estar ciente e de acordo com
              os termos desta Política de Privacidade.<br></br>
              <br></br>Os dados coletados são fornecidos voluntariamente pelo
              próprio usuário e podem incluir informações como nome, endereço de
              e-mail, telefone e demais dados necessários para viabilizar o
              atendimento da solicitação realizada. A coleta dessas informações
              ocorre exclusivamente para fins legítimos e específicos, tais como
              retorno de contato, envio de informações solicitadas,
              esclarecimento de dúvidas, elaboração de propostas e eventual
              prestação de serviços jurídicos.<br></br>
              <br></br>Os dados pessoais não são comercializados, cedidos ou
              compartilhados com terceiros para fins publicitários ou
              comerciais. O compartilhamento somente poderá ocorrer quando
              necessário para o cumprimento de obrigação legal, determinação
              judicial, requisição de autoridade competente ou quando
              indispensável à adequada prestação dos serviços solicitados,
              sempre respeitando os princípios da necessidade e da finalidade.
              <br></br>
              <br></br>
              Adotamos medidas técnicas e administrativas adequadas para
              proteger os dados pessoais contra acessos não autorizados,
              vazamentos, perdas, alterações ou qualquer forma de tratamento
              inadequado ou ilícito. Embora sejam aplicadas boas práticas de
              segurança da informação, é importante destacar que nenhum sistema
              é completamente isento de riscos, razão pela qual também
              recomendamos que o usuário adote medidas de segurança em seus
              próprios dispositivos e redes.<br></br>
              <br></br>Os dados pessoais serão armazenados pelo tempo necessário
              para cumprir as finalidades para as quais foram coletados,
              respeitando os prazos legais aplicáveis e os princípios da
              proporcionalidade e da minimização de dados. Encerrada a
              finalidade do tratamento, as informações poderão ser excluídas ou
              anonimizadas, salvo quando houver fundamento legal para sua
              manutenção.<br></br>
              <br></br>Nos termos da legislação aplicável, o titular dos dados
              possui o direito de solicitar, a qualquer momento, a confirmação
              da existência de tratamento de seus dados, o acesso às informações
              armazenadas, a correção de dados incompletos ou desatualizados, a
              anonimização, bloqueio ou eliminação de dados desnecessários, bem
              como a revogação do consentimento, quando aplicável. Tais
              solicitações poderão ser realizadas por meio dos canais oficiais
              de contato disponibilizados neste site.<br></br>
              <br></br>Este site pode conter links para páginas externas de
              terceiros. Não nos responsabilizamos pelas práticas de privacidade
              ou pelo conteúdo de sites externos, sendo recomendável que o
              usuário consulte as respectivas políticas de privacidade ao
              acessá-los.<br></br>
              <br></br>Reservamo-nos o direito de atualizar esta Política de
              Privacidade a qualquer momento, a fim de refletir alterações
              legislativas, regulatórias ou operacionais. Eventuais modificações
              entrarão em vigor a partir de sua publicação nesta página, razão
              pela qual recomendamos sua consulta periódica.<br></br>
              <br></br>Em caso de dúvidas, solicitações ou esclarecimentos
              adicionais relacionados à proteção de dados e à privacidade, o
              usuário poderá entrar em contato por meio dos canais oficiais
              indicados neste site.
            </h3>
          </div>
        </section>

        <FooterPoli />
      </main>
    </>
  );
}

export default Politprivac;
