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
          <form className={scss.form}>
            <button>
              <svg width="10" height="16" fill="none" role="img">
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className={scss.input}
              placeholder="Type your text"
              type="text"
            />
            <button className={scss.reset} type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
