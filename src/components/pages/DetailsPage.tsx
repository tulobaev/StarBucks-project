import { FC, useState } from "react";
import scss from "./DetailsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/Store";
import Loader from "../../loaders/Loader";

const DetailsPage: FC = () => {
  const navigate = useNavigate();
  const { categoryMenu, details } = useAppSelector(
    (store) => store.dataProduct
  );
  const [size, setSize] = useState("Grande");

  if (!details) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const isDrink =
    details.category.toLowerCase().includes("coffee") ||
    details.category.toLowerCase().includes("tea") ||
    details.category.toLowerCase().includes("refresher") ||
    details.category.toLowerCase().includes("frappuccino");

  return (
    <section className={scss.DetailsPage}>
      <div className="container">
        <div className={scss.content}>
          <p className={scss.breadcrumbs}>
            <span onClick={() => navigate("/menu")}>Menu / </span>
            <span onClick={() => navigate("/menu")}>{categoryMenu}</span> /{" "}
            <span>{details.name}</span>
          </p>

          <div className={scss.productDetails}>
            <h1>{details.name}</h1>
            <img src={details.photoURL} alt={details.name} />
            <div className={scss.info}>
              <p className={scss.description}>{details.description}</p>

              {isDrink && (
                <div className={scss.sizeSelector}>
                  <h3>Size Options</h3>
                  <div className={scss.sizeOptions}>
                    <button
                      className={`${scss.sizeBtn} ${
                        size === "Tall" ? scss.active : ""
                      }`}
                      onClick={() => setSize("Tall")}
                    >
                      Tall
                    </button>
                    <button
                      className={`${scss.sizeBtn} ${
                        size === "Grande" ? scss.active : ""
                      }`}
                      onClick={() => setSize("Grande")}
                    >
                      Grande
                    </button>
                    <button
                      className={`${scss.sizeBtn} ${
                        size === "Venti" ? scss.active : ""
                      }`}
                      onClick={() => setSize("Venti")}
                    >
                      Venti
                    </button>
                  </div>
                </div>
              )}

              <div className={scss.productMeta}>
                <p className={scss.price}>Price: ${details.price}</p>
                <p className={scss.category}>Category: {details.category}</p>
                {details.calories && (
                  <p className={scss.calories}>Calories: {details.calories}</p>
                )}
              </div>

              <button className={scss.actionButton}>Add to Order</button>

              <div className={scss.nutritionInfo}>
                <h3>Nutrition Information</h3>
                <p className={scss.disclaimer}>
                  Nutrition information is calculated based on our standard
                  recipes. Actual nutrition may vary based on customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
