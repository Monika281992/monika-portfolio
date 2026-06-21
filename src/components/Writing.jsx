import { writings } from '../data';

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Writing</span>
          <h2 className="section__title">Thoughts on quality</h2>
        </div>

        <div className="writing-list">
          {writings.map((w, i) => (
            <a key={i} href="#" className="writing-item">
              <span className="writing-item__title">{w}</span>
              <span className="writing-item__badge">Coming soon</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
