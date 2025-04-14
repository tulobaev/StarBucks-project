import AdminPage from "../admin/AdminPage";
import AckToStarBucksPage from "../components/pages/AckToStarBucksPage";
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
    link: "*",
    element: <NotFoundPage />,
  },
  {
    link: "/acktostarbucks",
    element: <AckToStarBucksPage />,
  },
];
