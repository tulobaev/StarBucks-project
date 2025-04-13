import { FC } from "react";
import scss from "./AdminPage.module.scss";

const AdminPage: FC = () => {
  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>AdminPage</div>
      </div>
    </section>
  );
};

export default AdminPage;
