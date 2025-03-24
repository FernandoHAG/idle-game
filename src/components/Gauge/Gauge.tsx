import "./Gauge.css";
import { Card } from "primereact/card";
import { Knob } from "primereact/knob";
import { useTranslation } from "react-i18next";

type propsType = {
  name: string;
  variable: number;
};

const Gauge = ({ name, variable }: propsType) => {
  const { t } = useTranslation();

  return (
    <Card
      title={t(name)}
      style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
    >
      <Knob
        style={{ transition: "0.5s" }}
        value={variable.toFixed(1) as unknown as number}
        valueTemplate={"{value}%"}
        color={variable < 30 ? "red" : "green"}
      />
    </Card>
  );
};

export default Gauge;
