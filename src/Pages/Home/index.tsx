import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import MainBody from "../../components/MainBody/MainBody";
import { Fieldset } from "primereact/fieldset";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <MainBody>
      <Fieldset legend={t("story")}>
        <Button
          label={t("startGame")}
          onClick={() => navigate("/baby-survior")}
        />
      </Fieldset>
    </MainBody>
  );
}
