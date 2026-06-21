import { toolGroups } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">About</span>
          <h2 className="section__title">How I think about quality</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Hi! I'm Monika, a Senior Quality Analyst with 9 years of experience across four domains — AI, Real Estate, Healthcare, and Media Delivery — three of which were SaaS products.
            </p>
            <p>
              I started as a manual tester, and that remains my biggest strength. It taught me to think like a user, question requirements, and catch what automation can't. Even today, I stay hands-on with manual and exploratory testing at every release — because bug-free products and great user experience are non-negotiable for me.
            </p>
            <p>
              I believe quality starts long before testing begins — so I actively collaborate with developers, product managers, and designers from the requirement stage itself, identifying gaps early and ensuring quality is built in, not bolted on.
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
