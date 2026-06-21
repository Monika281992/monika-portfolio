export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Contact</h2>
        </div>
        <div className="contact__box">
          <h2 className="contact__h2">Let's talk.</h2>
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
              href="https://www.linkedin.com/in/chmonika28/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--outline"
            >
              LinkedIn
            </a>
            <a
              href="tel:+917291046761"
              className="contact__btn contact__btn--outline"
            >
              +91-7291046761
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
