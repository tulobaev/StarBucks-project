import { FC, useEffect, useState } from "react";
import scss from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import axios from "axios";
import { oneProduct, setData } from "../../store/slice/DataSlice";

interface IInitialStateType {
  _id: number;
  name: string;
  price: number | string;
  photoURL: string;
  description: string;
  category: string;
  calories?: string;
}

const API = import.meta.env.VITE_API;

const HomePage: FC = () => {
  const { data } = useAppSelector((store) => store.dataProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [mainCard, setMainCard] = useState<IInitialStateType | null>(null);
  const newCardSlice = data.slice(data.length - 3);

  const handleImageClick = (id: number) => {
    const selectedCard = data.find((item) => item._id === id);
    if (selectedCard) {
      setMainCard(selectedCard);
    }
  };

  async function readProduct() {
    try {
      const { data } = await axios.get(API);
      dispatch(setData(data.data));
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id: number) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch(oneProduct(data));
      navigate(`/details/${data.name}`);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    readProduct();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setMainCard(data[0]);
    }
  }, [data]);

  if (!mainCard) return <div>Loading...</div>;
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.homeContainer}>
          <div data-aos="zoom-in-down" className={scss.home}>
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
                  <button onClick={() => getOneProduct(mainCard._id)}>
                    Learn More
                  </button>
                </div>
              </div>
              <div className={scss.imageBox}>
                <img src={mainCard.photoURL} alt={mainCard.name} />
              </div>
            </div>

            <div className={scss.replace}>
              {newCardSlice.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleImageClick(item._id)}
                  className={scss.card}
                >
                  <img
                    src={item.photoURL}
                    alt={item.name}
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
