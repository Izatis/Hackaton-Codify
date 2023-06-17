import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const [t] = useTranslation();

  return (
    <section className={s.hero}>
      <div className={s.hero__title}>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {t("hero.subTitle")}
        </motion.p>
      </div>

      <div className={s.sky}>
        <div className={s.sun}>
          <img
            className={s.sunAnimated}
            src="https://assets.website-files.com/5de973c9519095863a2344df/5e3448b93087e0c52585ec62_sun.svg"
            alt="sun image"
          />
        </div>

        <div className={s.x1}>
          <div className={s.cloud}></div>
        </div>

        <div className={s.x2}>
          <div className={s.cloud}></div>
        </div>

        <div className={s.x3}>
          <div className={s.cloud}></div>
        </div>

        <div className={s.x4}>
          <div className={s.cloud}></div>
        </div>

        <div className={s.x5}>
          <div className={s.cloud}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
