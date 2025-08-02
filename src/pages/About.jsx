import React from "react";
import "./About.css"; 
import OurTeam from "../components/OurTeam/OurTeam";

const About = () => {
  return (
    <div className="abtPage">
      <div className="abtContainer">
        <h1 className="abtTitle">About Campus Exchange</h1>

        <section className="missionSection">
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

        <section className="featuresSection">
          <h2>Why Choose Campus Exchange?</h2>
          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Student-Focused</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quisquam laborum.
              </p>
            </div>
            <div className="featureCard">
              <div className="featureIcon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Budget-Friendly</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptatibus illum cumque laudantium porro, dolor dicta eius
                exercitationem.
              </p>
            </div>
            <div className="featureCard">
              <div className="featureIcon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                harum excepturi hic explicabo ratione?
              </p>
            </div>
            
          </div>
        </section>

        <section className="howItWorks">
          <h2>How It Works</h2>
          <div className="stepsContainer">
            <div className="step">
              <div className="stepNumber">
                <i className="fas fa-search"></i>
              </div>
              <h3>Browse & Discover</h3>
              <p>
                Explore thousands of items listed by fellow students in your
                campus community.
              </p>
            </div>
            <div className="step">
              <div className="stepNumber">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Connect & Negotiate</h3>
              <p>
                Message sellers directly and negotiate fair prices for items you
                want.
              </p>
            </div>
            <div className="step">
              <div className="stepNumber">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>Meet & Exchange</h3>
              <p>
                Arrange safe meetups on campus to complete your transactions
                securely.
              </p>
            </div>
          </div>
        </section>

        <section className="categoriesSection">
          <h2>Popular Categories</h2>
          <div className="categoriesGrid">
            <div className="categoryItem">
              <i className="fas fa-mobile-alt"></i> Electronics
            </div>
            <div className="categoryItem">
              <i className="fas fa-book"></i> Textbooks
            </div>
            <div className="categoryItem">
              <i className="fas fa-tshirt"></i> Clothing
            </div>
            <div className="categoryItem">
              <i className="fas fa-gamepad"></i> Gaming
            </div>
            <div className="categoryItem">
              <i className="fas fa-football-ball"></i> Sports Equipment
            </div>
          </div>
        </section>

        <OurTeam />
      </div>
    </div>
  );
};

export default About;
