import { caseStudies } from '../data';

export default function CaseStudies() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Selected work</h2>
        </div>

        <div className="case-grid">
          {caseStudies.map((c, i) => (
            <div key={i} className="case-card">
              <div className="case-card__header">
                <h3 className="case-card__title">{c.title}</h3>
                <span className="case-card__company">{c.company}</span>
              </div>
              <p className="case-card__desc">{c.desc}</p>
              <div className="case-card__pills">
                {c.pills.map((p, j) => (
                  <span key={j} className="pill">
                    {p.bold && <strong>{p.bold}</strong>}
                    {p.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
