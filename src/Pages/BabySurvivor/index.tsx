import { useEffect, useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeIdiom } from "../../redux/configSlice";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Card } from "primereact/card";
import { Knob } from "primereact/knob";
import { useInterval } from "primereact/hooks";

export default function BabySurvivor() {
  const { t } = useTranslation();
  const [idiom, setIdiom] = useState("us");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIdiom(idiom));
  }, [dispatch, idiom]);

  const [hunger, setHunger] = useState(100);
  const [hungerVelocity, setHungerVelocity] = useState(0.1);

  useInterval(
    () => {
      setHunger((prevHunger) => {
        if (prevHunger - hungerVelocity <= 0) return 0;
        else return prevHunger - hungerVelocity;
      });
    },
    100,
    true
  );

  useInterval(
    () => {
      setHungerVelocity((prevHungerVelocity) => prevHungerVelocity + 0.1);
    },
    5000,
    true
  );

  const doCry = () => {
    setHunger((prevHunger) => {
      if (prevHunger + 10 > 100) return 100;
      return prevHunger + 10;
    });
  };

  return (
    <div className="babySurvivor">
      <Toolbar
        end={
          <Button
            label={t("idiom")}
            onClick={() => setIdiom(idiom === "us" ? "br" : "us")}
          />
        }
      />
      <div className="body">
        <Card title={t("hunger")}>
          <Knob
            style={{ transition: "0.5s" }}
            value={hunger}
            valueTemplate={"{value}%"}
          />
        </Card>
        <Button label={t("cry")} onClick={doCry} />
      </div>
    </div>
  );
}
