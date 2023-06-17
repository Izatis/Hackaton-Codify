import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import avatarFirst from "shared/image/avatarFirst.jpg";
import avatarSecond from "shared/image/avatarSecond.jpg";
import avatarThird from "shared/image/avatarThird.png";

const About = () => {
  const [t] = useTranslation();

  return (
    <section className={s.about}>
      <p>{t("about.above-heading")}</p>
      <h2>{t("about.title")}</h2>

      <div className={s.about__wrap}>
        <div className={s.about__item}>
          <img src={avatarThird} alt="avatar" />
          <h3>{t("about.developer-third.0")}</h3>
          <p>{t("about.developer-third.1")}</p>
        </div>
        <div className={s.about__item}>
          <img src={avatarSecond} alt="avatar"/>
          <h3>{t("about.developer-first.0")}</h3>
          <p>{t("about.developer-first.1")}</p>
        </div>
        <div className={s.about__item}>
          <img src={avatarFirst} alt="avatar" />
          <h3>{t("about.developer-second.0")}</h3>
          <p>{t("about.developer-second.1")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
