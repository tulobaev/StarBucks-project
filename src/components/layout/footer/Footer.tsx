import { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.column}>
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">Our Company</a>
              </li>
              <li>
                <a href="#">Our Coffee</a>
              </li>
              <li>
                <a href="#">Stories and News</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
          <div className={scss.column}>
            <h3>Careers</h3>
            <ul>
              <li>
                <a href="#">Culture and Values</a>
              </li>
              <li>
                <a href="#">Inclusion & Diversity</a>
              </li>
              <li>
                <a href="#">College Achievement Plan</a>
              </li>
              <li>
                <a href="#">Alumni Community</a>
              </li>
            </ul>
          </div>
          <div className={scss.column}>
            <h3>Social Impact</h3>
            <ul>
              <li>
                <a href="#">Ethical Sourcing</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Global Social Impact</a>
              </li>
            </ul>
          </div>
          <div className={scss.column}>
            <h3>For Business Partners</h3>
            <ul>
              <li>
                <a href="#">Corporate Gift Card Sales</a>
              </li>
              <li>
                <a href="#">Office and Foodservice Coffee</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={scss.bottom}>
          <div className={scss.logo}>
            <img
              src="https://castlewestcork.ie/wp-content/uploads/2022/12/starbucks-logo.png"
              alt="Starbucks Logo"
            />
          </div>
          <div className={scss.copyright}>
            <p>&copy; 2025 Starbucks Coffee Company. All rights reserved.</p>
            <div className={scss.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">CA Supply Chain Act</a>
              <a href="#">Cookie Preferences</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
