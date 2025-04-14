import { FC } from "react";
import scss from "./Header.module.scss";
import { links } from "../../../constants/Link";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.menu}>
            <div className={scss.logo}>
              <img
                onClick={() => navigate("/")}
                src="https://castlewestcork.ie/wp-content/uploads/2022/12/starbucks-logo.png"
                alt="logo"
              />
            </div>
            <nav>
              {links.map((item, index) => (
                <Link key={index} className={scss.link} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
