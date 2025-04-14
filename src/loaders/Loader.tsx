import { FC } from "react";
import scss from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <section className={scss.Loader}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.coffeeContainer}>
            <div className={scss.coffeeHeader}>
              <div
                className={`${scss.coffeeHeader__buttons} ${scss.coffeeHeader__buttonOne}`}
              ></div>
              <div
                className={`${scss.coffeeHeader__buttons} ${scss.coffeeHeader__buttonTwo}`}
              ></div>
              <div className={scss.coffeeHeader__display}></div>
              <div className={scss.coffeeHeader__details}></div>
            </div>
            <div className={scss.coffeeMedium}>
              <div className={scss.coffeeMedium__exit}></div>
              <div className={scss.coffeeMedium__arm}></div>
              <div className={scss.coffeeMedium__liquid}></div>
              <div
                className={`${scss.coffeeMedium__smoke} ${scss.coffeeMedium__smokeOne}`}
              ></div>
              <div
                className={`${scss.coffeeMedium__smoke} ${scss.coffeeMedium__smokeTwo}`}
              ></div>
              <div
                className={`${scss.coffeeMedium__smoke} ${scss.coffeeMedium__smokeThree}`}
              ></div>
              <div
                className={`${scss.coffeeMedium__smoke} ${scss.coffeeMedium__smokeFor}`}
              ></div>
              <div className={scss.coffeeMedium__cup}></div>
            </div>
            <div className={scss.coffeeFooter}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
