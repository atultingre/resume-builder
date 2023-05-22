import React from "react";
import "./Footer.css";
import { Briefcase, GitHub, Instagram, Linkedin } from "react-feather";
const Footer = () => {
  return (
    <div className="footer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Atul<span>Tingre</span>
          </h3>
          <p class="footer-company-name">
            Copyright © 2023 <strong>Atul Tingre</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Nanded</span>
              Maharashtra
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 8806234568</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="atultingre.work@gmail.com">atultingre.work@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-icons">
            <a href="https://www.linkedin.com/in/atultingre/" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/atultingre" target="_blank" rel="noreferrer">
              <GitHub />
            </a>
            <a href="https://www.instagram.com/atult_4568/" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://atultingre.netlify.app/" target="_blank" rel="noreferrer">
                <Briefcase/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
