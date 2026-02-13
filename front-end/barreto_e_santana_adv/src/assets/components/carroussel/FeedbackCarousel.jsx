import { useEffect, useRef, useState } from "react";
import "./FeedbackCarousel.scss";

const feedbacks = [
  {
    name: "Ana Carolina",
    role: "Profissão | Lorem ipsum",
    text: "Atendimento impecável, sempre muito atenciosas e claras em todas as etapas do processo.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Ana Carolina",
    role: "Profissão | Lorem ipsum",
    text: "Equipe extremamente profissional, entrega acima do esperado.",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Ana Carolina",
    role: "Profissão | Lorem ipsum",
    text: "Comunicação clara, processo ágil e resultado impecável.",
    avatar: "https://i.pravatar.cc/100?img=56",
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
