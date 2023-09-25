import React, { useState } from "react";
import main1 from "../../Images/main1.avif";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [isCountryMenuVisible, setCountryMenuVisible] = useState(false);
  return (
    <footer className="footer">
      <div className="container">
        <div className="img-ord">
          <img className="img-1" src={main1} alt="" />
        </div>

        <div className="row1">
          <div className="footer-col">
            <h4>ABOUT ZOMATO</h4>
            <ul id="list3">
              <li>
                <a href="https://www.zomato.com/who-we-are">Who we are</a>
              </li>
              <li>
                <a href="https://blog.zomato.com/">Blog</a>
              </li>
              <li>
                <a href="https://www.zomato.com/careers">Work With Us</a>
              </li>
              <li>
                <a href="https://www.zomato.com/investor-relations">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/report-fraud">Report Fraud</a>
              </li>
              <li>
                <a href="https://blog.zomato.com/press-kit">Press Kit</a>
              </li>
              <li>
                <a href="https://www.zomato.com/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ZOMAVERSE</h4>
            <ul id="list3">
              <li>
                <Link to="/"> Zomato</Link>
              </li>
              <li>
                <a href="https://blinkit.com/">Blinkit</a>
              </li>
              <li>
                <a href="https://www.feedingindia.org/">Feeding India</a>
              </li>
              <li>
                <a href="https://www.hyperpure.com/">Hyperpure</a>
              </li>
              <li>
                <a href="https://www.zomato.com/zomaland">Zomaland</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOR RESTAURANTS</h4>
            <ul id="list3">
              <li>
                <a href="https://www.zomato.com/partner_with_us">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US">
                  Apps For You
                </a>
              </li>

              <h4>FOR ENTERPRISES</h4>
              <li>
                <a href="https://www.zomato.com/enterprise-solutions">
                  Zomato For Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>LEARN MORE</h4>
            <ul id="list3">
              <li>
                <a href="https://www.zomato.com/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://www.zomato.com/security">Security</a>
              </li>

              <li>
                <a href="https://www.zomato.com/conditions">Terms</a>
              </li>
              <li>
                <a href="https://www.zomato.com/directory">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
