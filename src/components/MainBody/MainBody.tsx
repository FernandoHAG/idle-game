import { ReactNode, useEffect, useState } from "react";
import "./MainBody.css";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeIdiom } from "../../redux/configSlice";

type propsType = {
  children: ReactNode;
};

const MainBody = ({ children }: propsType) => {
  const { t } = useTranslation();
  const [idiom, setIdiom] = useState("us");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIdiom(idiom));
  }, [dispatch, idiom]);

  return (
    <div className="mainBody">
      <Toolbar
        end={
          <Button
            label={t("idiom")}
            onClick={() => setIdiom(idiom === "us" ? "br" : "us")}
          />
        }
      />
      <div className="body">{children}</div>
    </div>
  );
};

export default MainBody;
