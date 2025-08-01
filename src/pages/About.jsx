import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="abt-page">
      <div className="abt-container">
        <h1 className="abt-title">About Campus Exchange</h1>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            voluptates vero adipisci, earum labore quod doloremque dignissimos
            accusantium voluptatem obcaecati maxime harum est at reiciendis iure
            numquam animi alias vel libero. Debitis error qui fugit modi fuga
            voluptates? Eaque odio perferendis tempore, dignissimos ratione
            consequuntur architecto magni provident hic odit!
          </p>
        </section>

        <section className="features-section">
          <h2>Why Choose Campus Exchange?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Student-Focused</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quisquam laborum.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Budget-Friendly</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptatibus illum cumque laudantium porro, dolor dicta eius
                exercitationem.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                harum excepturi hic explicabo ratione?
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community-Driven</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eveniet provident sit maiores harum saepe temporibus
                earum perspiciatis laudantium voluptate.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse & Discover</h3>
              <p>
                Lorem, ipsum dolor.lorem Lorem, ipsum.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Connect & Negotiate</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Meet & Exchange</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-item">📱 Electronics</div>
            <div className="category-item">📖 Textbooks</div>
            <div className="category-item">👕 Clothing</div>
            <div className="category-item">🎮 Gaming</div>
            <div className="category-item">⚽ Sports Equipment</div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Our Community Today!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            autem quae accusantium ea inventore, cum possimus non, repellat et
            tempore aspernatur blanditiis, corrupti eius error mollitia odit!
            Aut, quod. Sed provident eligendi reiciendis?
          </p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
    </div>
  );
};

export default About;
