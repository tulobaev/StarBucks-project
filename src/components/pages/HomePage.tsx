import { FC, useState } from "react";
import scss from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

// Добавим id в fakeData для примера
const fakeData = [
  {
    id: 1,
    name: "Classic Vanilla Latte",
    image:
      "https://media.xenial.com/company_63ddbd701aaf62eaecef230d/product-images/53630-IcedMatchaLatte_300px_(1).png",
    description:
      "Smooth espresso blended with steamed milk and sweet vanilla syrup, topped with a light foam.",
  },
  {
    id: 2,
    name: "Oat Milk Honey Latte",
    image:
      "https://media.xenial.com/company_63ddbd701aaf62eaecef230d/product-images/54905-IcedOatHoney_300px.png",
    description:
      "Blonde espresso with creamy oat milk and a touch of honey, served with a velvety foam.",
  },
  {
    id: 3,
    name: "Pumpkin Spice Latte",
    image:
      "https://myvancity.ca/wp-content/uploads/2018/08/PumpkinSpiceLatte.jpg-3.png",
    altText: "Pumpkin spice latte with whipped cream",
    description:
      "A fall favorite with espresso, pumpkin spice syrup, and steamed milk, finished with whipped cream and a dash of cinnamon.",
  },
];

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [mainCard, setMainCard] = useState(fakeData[0]);

  const newCardSlice = fakeData.slice(fakeData.length - 3);

  const handleImageClick = (id: number) => {
    const selectedCard = fakeData.find((item) => item.id === id);
    if (selectedCard) {
      setMainCard(selectedCard);
    }
  };

  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.homeContainer}>
          <div className={scss.home}>
            <div className={scss.content}>
              <div className={scss.description}>
                <h1>
                  {mainCard.name}
                  <span> Starbucks</span>
                </h1>
                <p>{mainCard.description}</p>
                <div className={scss.btnBox}>
                  <button onClick={() => navigate("/menu")}>
                    Select a Coffee
                  </button>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={scss.imageBox}>
                <img src={mainCard.image} alt={mainCard.name} />
              </div>
            </div>

            <div className={scss.replace}>
              {newCardSlice.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleImageClick(item.id)}
                  className={scss.card}
                >
                  <img
                    src={item.image}
                    alt={item.altText || item.name}
                    className={scss.thumbnail}
                  />
                </div>
              ))}
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
                <button onClick={() => navigate("/signIn")}>Join now</button>
              </div>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97180.jpg"
                  alt="reward"
                />
              </div>
            </div>
            <div className={scss.info2}>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97604.jpg"
                  alt="refill"
                />
              </div>
              <div className={scss.title}>
                <h4>Your free refill is ready</h4>
                <p>
                  Drink orders now include refills of hot and iced brewed coffee
                  or tea while you enjoy the café.**
                </p>
                <button onClick={() => navigate("/acktostarbucks")}>
                  Learn more
                </button>
              </div>
            </div>
            <div className={scss.info3}>
              <div className={scss.title}>
                <h4>Nondairy milk, no extra charge</h4>
                <p>
                  Customize your drink with your favorite nondairy milk—like
                  soy, coconut, almond or oat—for no additional charge.
                </p>
                <button onClick={() => navigate("/menu")}>Order now</button>
              </div>
              <div className={scss.imageBox}>
                <img
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97469.jpg"
                  alt="nondairy"
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
