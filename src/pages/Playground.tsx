import React from "react";
import { useTranslation } from "react-i18next";

const Playground: React.FC = () => {
  const { t } = useTranslation();
  const [eggCatcher, setEggCatcher] = React.useState<number>(0);
  return (
    <div>
      <h1>{t("pages.playground.title")}</h1>
      <h2>{t("pages.playground.subTitle")}</h2>
      <p>
        {t("pages.playground.eggCount",  {eggCounter: eggCatcher} )}
      </p>
      <button onClick = {()=>{setEggCatcher(eggCatcher+1)}} className = "button">
        {t("pages.playground.eggButton")}
      </button>
    </div>

  );
};

export default Playground;
