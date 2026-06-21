import { useState } from 'react';
import { experiences } from '../data';

function AccordionItem({ exp, isOpen, onToggle }) {
  return (
    <div className={`acc-item${isOpen ? ' acc-item--open' : ''}`}>
      <button
        className="acc-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="acc-company">{exp.company}</span>
        <div className="acc-right">
          <span className="acc-preview">{exp.role}</span>
          <span className="acc-year">{exp.year}</span>
          <span className="acc-arrow">
            <svg viewBox="0 0 12 12">
              <polyline points="2,4 6,8 10,4" />
            </svg>
          </span>
        </div>
      </button>

      <div className="acc-panel">
        <div className="acc-panel__inner">
          <div>
            <span className="acc-badge">{exp.badge}</span>
            <p className="acc-role">{exp.role}</p>
            <p className="acc-date">{exp.date}</p>
          </div>
          <div>
            <p className="acc-desc">{exp.desc}</p>
            <div className="acc-tags">
              {exp.tags.map((t, i) => (
                <span key={i} className={`acc-tag${t.green ? ' acc-tag--green' : ''}`}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Experience</span>
        </div>

        <div className="acc-list">
          {experiences.map((exp, i) => (
            <AccordionItem
              key={i}
              exp={exp}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
