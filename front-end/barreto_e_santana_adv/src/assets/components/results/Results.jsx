import { useEffect, useRef, useState } from "react";
import "./Results.scss";

function Counter({ end, suffix = "", duration = 3000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <span ref={ref} className="result-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section className="results">
      <h1>Resultados que refletem nossa dedicação</h1>

      <p data-aos-delay="100">Com uma atuação estratégica e personalizada</p>

      <div className="results-grid">
        <div className="result-item" data-aos-delay="200">
          <Counter end={5} suffix="+" />
          <span>Anos de experiência</span>
        </div>

        <div className="divider" />

        <div className="result-item" data-aos-delay="300">
          <Counter end={150} suffix="+" />
          <span>Clientes atendidos</span>
        </div>
      </div>
    </section>
  );
}
