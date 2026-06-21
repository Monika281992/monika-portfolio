import { toolGroups } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">How I think about quality</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I started as a manual tester — it taught me to think like a user, question requirements, and catch what automation can't. I stay hands-on with exploratory testing at every release, because quality and user experience are non-negotiable for the business.
            </p>
            <p>
              I've worked across AI, Real Estate, Healthcare, and Media Delivery — three of which were SaaS products. That breadth shaped how I think about risk and failure modes.
            </p>
            <p>
              I believe quality starts before testing begins. I collaborate with developers, PMs, and designers from the requirement stage — so quality is built in, not bolted on.
            </p>
            <div className="philosophy-block">
              <p>
                I bring both — strong manual instincts and scalable automation. That's what makes me effective.
              </p>
            </div>
          </div>

          <div className="tools-grid">
            {toolGroups.map((group, i) => (
              <div key={i}>
                <p className="tool-group__label">{group.label}</p>
                <div className="tags">
                  {group.tools.map((t, j) => (
                    <span key={j} className={`tag${t.accent ? ' tag--accent' : ''}`}>
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
