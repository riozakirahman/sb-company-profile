import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "../css/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__social-icon">
          <FaInstagram></FaInstagram>
        </div>
        <div className="footer__social-icon">
          <AiOutlineWhatsApp></AiOutlineWhatsApp>
        </div>
      </div>
      <div className="footer__sitemap">
        <ul className="sitemap">
          <li className="sitemap__list">
            <a href="" className="sitemap__link">
              About
            </a>
          </li>
          <li className="sitemap__list">
            <a href="" className="sitemap__link">
              Collection
            </a>
          </li>
          <li className="sitemap__list">
            <a href="" className="sitemap__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <span className="copyright">
          <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
          <span className="copyright-text">Stara Busana</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
