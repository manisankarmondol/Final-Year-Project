import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Get to Know Us</h2>
            <Link to="/aboutus">About Us</Link>
            <Link to="/carrers">Careers</Link>
            <Link to="/help">Help</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Shop Centers</h2>
            <p>Kolkata</p>
            <p>Chennai</p>
            <p>Bangalore</p>
            <p>Delhi</p>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/manisankar000/">Instagram</a>
            <a href="https://www.facebook.com/manisankar.mondol">Facebook</a>
            <a href="https://www.youtube.com/channel/UC_7LEmQIzwYw3Ztx2NCD5DA">
              Youtube
            </a>
            <a href="https://twitter.com/Manisankar0007">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Kaveri
            </Link>
          </div>
          <small className="website-rights">Kaveri © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/manisankar.mondol"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/manisankar000/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/channel/UC_7LEmQIzwYw3Ztx2NCD5DA"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/Manisankar0007"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/manisankar-mondol-88a7311ba/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
