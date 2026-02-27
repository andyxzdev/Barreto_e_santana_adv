import { useEffect, useRef, useState } from "react";
import "./FeedbackCarousel.scss";

const feedbacks = [
  {
    name: "Juliana Ferreira Lima",
    role: "Ação contra concessionária",
    text: "Recebi cobranças superiores a dez vezes a média mensal e corria risco de corte no fornecimento de água, mesmo com uma recém-nascida em casa. A equipe atuou com rapidez e conseguimos decisão favorável suspendendo a cobrança e garantindo meus direitos.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Mariana Souza Ribeiro",
    role: "Defesa em Execução",
    text: "Estava prestes a perder meu imóvel em leilão. Com a atuação estratégica do escritório, obtivemos tutela de urgência suspendendo o leilão e a execução principal. Profissionalismo e segurança do início ao fim.",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Rafael Martins Costa",
    role: "Execução Fiscal",
    text: "Fui surpreendido com cobrança indevida de FGTS na Justiça do Trabalho. O escritório demonstrou a incompetência absoluta do juízo e conseguimos decisão favorável, garantindo o processamento correto na Justiça Federal.",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
  {
    name: "Carlos Henrique Almeida",
    role: "Medida Urgente",
    text: "Precisávamos de uma resposta rápida e técnica. A dedicação da equipe foi essencial para que o juiz reconhecesse nosso direito em sede de tutela de urgência.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const total = feedbacks.length;

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    const card = track.querySelector(".card");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 30; // mesmo gap do CSS
    const moveX = index * (cardWidth + gap);

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${moveX}px)`;

    if (index === total) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = `translateX(0)`;
      }, 600);
    }

    if (index < 0) {
      const lastIndex = total - 1;
      const lastMove = lastIndex * (cardWidth + gap);

      setTimeout(() => {
        track.style.transition = "none";
        setIndex(lastIndex);
        track.style.transform = `translateX(-${lastMove}px)`;
      }, 600);
    }
  }, [index, total]);

  return (
    <section className="feedback-section">
      <h1>O que nossos clientes dizem</h1>

      <div className="carousel">
        <button className="nav prev" onClick={prev}>
          ‹
        </button>

        <div className="viewport">
          <div className="track" ref={trackRef}>
            {[...feedbacks, feedbacks[0]].map((item, i) => (
              <div className="card" key={i}>
                <div className="header">
                  {/* <div className="avatar-number">
                    {String(i + 1).padStart(2, "0")}
                  </div> */}
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>

                <p>“{item.text}”</p>

                <div className="stars">★★★★★</div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav next" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}
