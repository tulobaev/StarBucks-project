import { FC } from "react";
import scss from "./HomePage.module.scss";
import image from "../../image/Group 2.png";
import image1 from "../../image/Coffee_01.png";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.homeContainer}>
          <div className={scss.home}>
            <div className={scss.content}>
              <div className={scss.description}>
                <h1>
                  It’s not just Coffee It’s
                  <span> Starbucks</span>
                </h1>
                <p>
                  Since 1971, it always has been and will always be about
                  quality. We’re passionate about ethically sourcing only the
                  finest Arabica coffee beans and roasting them with great care.
                  Our passion for coffee is rivaled only by our love of sharing
                  it.
                </p>
                <div className={scss.btnBox}>
                  <button onClick={() => navigate("/menu")}>
                    Select a Coffee
                  </button>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={scss.imageBox}>
                <img src={image} alt="image" />
              </div>
            </div>

            <div className={scss.replace}>
              <img src={image1} alt="image" />
              <img src={image1} alt="image" />
              <img src={image1} alt="image" />
            </div>
          </div>

          <div className={scss.information}>
            <div className={scss.info1}>
              <div className={scss.title}>
                <h4>Your first taste of Rewards is free</h4>
                <p>
                  Unlock Rewards with your first order. Enjoy a free handcrafted
                  drink when you make a qualifying purchase during your first
                  week as a Starbucks® Rewards member.*
                </p>

                <button>Join now</button>
              </div>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97180.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className={scss.info2}>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97604.jpg"
                  alt="image"
                />
              </div>
              <div className={scss.title}>
                <h4>Your free refill is ready</h4>
                <p>
                  Drink orders now include refills of hot and iced brewed coffee
                  or tea while you enjoy the café.**
                </p>

                <button>Learn more</button>
              </div>
            </div>

            <div className={scss.info3}>
              <div className={scss.title}>
                <h4>Nondairy milk, no extra charge</h4>
                <p>
                  Customize your drink with your favorite nondairy milk—like
                  soy, coconut, almond or oat—for no additional charge.
                </p>

                <button>Order now</button>
              </div>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97469.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
