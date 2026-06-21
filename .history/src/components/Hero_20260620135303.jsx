import { metrics } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <p className="hero__eyebrow">Senior Quality Analyst · 9 years</p>
            <h1 className="hero__h1">
              Quality built in,<br /><em>not bolted on.</em>
            </h1>
            <p className="hero__sub">
              I own end-to-end quality for SaaS products — from writing the first test case
              to shipping with confidence. I build automation frameworks, integrate quality
              gates into CI/CD, and lead releases across multiple teams.
            </p>
          </div>
          
          <div className="hero__image">
            <img src="/588404c0-56ae-4ec7-8ac5-10a48e3fe707.JPG" alt="Monika Chaudhary" />
          </div>
        </div>

        <div className="hero__metrics">
          {metrics.map((m, i) => (
            <div key={i} className="metric-card">
              <div className="metric-card__value">{m.value}</div>
              <div className="metric-card__label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__cta">
          <a href="#work" className="btn-primary">View selected work →</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
