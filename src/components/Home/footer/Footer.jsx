import "../Home.css";
import "../HomeResponsive.css";
// photos
import logo from "../homeImg/logo.svg";
import instagramIcon from "../homeImg/icon-instagram.svg";
import twittericon from "../homeImg/icon-twitter.svg";
import facebookIcon from "../homeImg/icon-facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer-line"></div>
        <section className="footer-section">
          <img src={logo} alt="" />
          <ul className="footer-nav-list">
            <li className="footer-list-item">HOME</li>
            <li className="footer-list-item">HEADPHONES</li>
            <li className="footer-list-item">SPEAKERS</li>
            <li className="footer-list-item">EARPHONES</li>
          </ul>
        </section>
        <p className="footer-paragraph">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="footer-icons-container">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="footer-icons">
            <a href="#">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#">
              <img src={twittericon} alt="" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
