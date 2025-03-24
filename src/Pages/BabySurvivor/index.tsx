import { useEffect, useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeIdiom } from "../../redux/configSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Card } from "primereact/card";
import { Knob } from "primereact/knob";
import { useInterval } from "primereact/hooks";
import { increaseStatusXp, PlayerStatusType } from "../../redux/dataSlice";
import Gauge from "../../components/Gauge/Gauge";
import MainBody from "../../components/MainBody/MainBody";

export default function BabySurvivor() {
  const { t } = useTranslation();
  const [idiom, setIdiom] = useState("us");
  const dispatch = useDispatch();

  const playerStatus = useSelector(
    (state: { data: { playerStatus: PlayerStatusType } }) =>
      state.data.playerStatus
  );

  useEffect(() => {
    console.log("----------------playerStatus----------------");
    console.log("xp:        " + playerStatus.social.xp);
    console.log("level:     " + playerStatus.social.level);
    console.log("nextLevel: " + playerStatus.social.nextLevel);
  }, [playerStatus]);

  useEffect(() => {
    dispatch(changeIdiom(idiom));
  }, [dispatch, idiom]);

  const [hunger, setHunger] = useState(10);
  const [hungerVelocity, setHungerVelocity] = useState(0.1);

  useInterval(
    () => {
      setHunger((prevHunger) => {
        if (prevHunger - hungerVelocity >= 100) return 100;
        return Math.round((prevHunger - hungerVelocity) * 100) / 100;
      });
    },
    100,
    true
  );

  useInterval(
    () => {
      setHungerVelocity(
        (prevHungerVelocity) =>
          Math.round((prevHungerVelocity - 0.1) * 100) / 100
      );
    },
    500,
    true
  );

  const doCry = () => {
    setHunger((prevHunger) => {
      if (prevHunger - 10 <= 0) return 0;
      dispatch(increaseStatusXp({ status: "social", value: 1 }));
      return prevHunger - 10;
    });
  };

  return (
    <MainBody>
      <Gauge name="hunger" variable={hunger} />
      <Button label={t("cry")} onClick={doCry} />
    </MainBody>
  );
}
