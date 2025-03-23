import { Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import Home from "./Home";
import BabySurvivor from "./BabySurvivor";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Router = () => {
  const { theme } = useSelector(
    (state: { config: { theme: string } }) => state.config
  );

  useEffect(() => {
    import(`../../node_modules/primereact/resources/themes/${theme}/theme.css`);
  }, [theme]);

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/baby-survior" element={<BabySurvivor />} />
      </Routes>
    </PrimeReactProvider>
  );
};

export default Router;
