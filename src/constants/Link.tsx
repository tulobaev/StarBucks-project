import AdminPage from "../admin/AdminPage";
import Login from "../admin/authantication/login/Login";
import Register from "../admin/authantication/register/Register";
import AckToStarBucksPage from "../components/pages/AckToStarBucksPage";
import DetailsPage from "../components/pages/DetailsPage";
import HomePage from "../components/pages/HomePage";
import MenuPage from "../components/pages/MenuPage";
import NotFoundPage from "../components/pages/NotFountPage";

export const links = [
  {
    link: "/",
    element: <HomePage />,
    title: "Home",
  },
  {
    link: "/menu",
    element: <MenuPage />,
    title: "Menu",
  },
  {
    link: "/admin",
    element: <AdminPage />,
    title: "Admin",
  },
  {
    link: "/details/:product",
    element: <DetailsPage />,
  },
  {
    link: "*",
    element: <NotFoundPage />,
  },
  {
    link: "/acktostarbucks",
    element: <AckToStarBucksPage />,
  },
  {
    link: "/register",
    element: <Register />,
  },
  {
    link: "/login",
    element: <Login />,
  },
];
