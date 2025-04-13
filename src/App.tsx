import { links } from "./constants/Link";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {links.map((item, index) => (
          <Route path={item.link} element={item.element} key={index} />
        ))}
      </Routes>
    </>
  );
};

export default App;
