import { FC } from "react";
import scss from "./NotFountPage.module.scss";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={scss.NotFoundPage}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Oops! Page Not Found</h1>
          <p className={scss.message}>
            Looks like we spilled the coffee! The page you’re looking for
            doesn’t exist.
          </p>
          <div className={scss.imageBox}>
            <img
              src="https://png.pngtree.com/png-clipart/20240321/original/pngtree-illustration-of-spilled-coffe-or-chocho-png-image_14642212.png"
              alt="Spilled coffee cup for 404 error"
            />
          </div>

          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
