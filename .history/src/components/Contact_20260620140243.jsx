import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917291046761');
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Contact</h2>
        </div>
        <div className="contact__box">
          <h2 className="contact__h2">Let's talk <em>quality.</em></h2>
          <p className="contact__sub">
            I'm open to Senior QA / SDET roles, consulting, and conversations about
            automation, testing strategy, or release engineering. Reach out — I reply
            to everyone.
          </p>
          <div className="contact__links">
            <a href="mailto:ch.monika28@gmail.com" className="contact__btn contact__btn--primary">
              Email me →
            </a>
            <a
              href="https://linkedin.com/in/chmonika28"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--outline"
            >
              LinkedIn
            </a>
            <button 
              onClick={handleCopyPhone}
              className="contact__btn contact__btn--outline"
            >
              {copied ? 'Copied!' : '+91-7291046761'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
