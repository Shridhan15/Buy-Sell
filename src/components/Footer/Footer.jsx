import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSec">
          <h3 className="footerTitle">Campus Connect</h3>
          <p className="footerDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa
            alias quaerat dolore omnis, quibusdam voluptas adipisci repudiandae
            quas ipsam mollitia molestiae!
          </p>
          <div className="socialLinks">
            <a href="#" className="socialLink">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="socialLink">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="socialLink">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footerSec">
          <h4 className="secTitle">Quick Links</h4>
          <ul className="footerLinks">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/explore">Explore Items</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="footerSec">
          <h4 className="secTitle">Categories</h4>
          <ul className="footerLinks">
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Textbooks</a>
            </li>

            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div>

        <div className="footerSec">
          <h4 className="secTitle">Support</h4>
          <ul className="footerLinks">
            <li>
              <a href="#">Help Center</a>
            </li>

            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Report Issue</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footerSec">
          <h4 className="secTitle">Contact Info</h4>
          <div className="contactInfo">
            <p>email: support@college.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>
              ABC Building
              <br />
              Chennai
            </p>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomItems">
          <p>&copy; 2025. All rights reserved.</p>
          <div className="footerBottomLinks">
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
