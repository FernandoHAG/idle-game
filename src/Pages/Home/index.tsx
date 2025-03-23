import { useEffect, useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { changeIdiom } from "../../redux/configSlice";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toolbar } from "primereact/toolbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const [idiom, setIdiom] = useState("us");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeIdiom(idiom));
  }, [dispatch, idiom]);

  return (
    <div className="home">
      <Toolbar
        end={
          <Button
            label={t("idiom")}
            onClick={() => setIdiom(idiom === "us" ? "br" : "us")}
          />
        }
      />
      <div className="body">
        <Button
          label={t("startGame")}
          onClick={() => navigate("/baby-survior")}
        />
      </div>
    </div>
  );
}
