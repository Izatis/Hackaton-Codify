import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import image from "shared/image/imageFirst.png";

const Information = () => {
  const [t] = useTranslation();

  return (
    <section className={s.information}>
      <div className={s.information__image}>
        <img src={image} alt="information image" />
      </div>
      <motion.div
        className={s.information__text}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
      >
        <h2>{t("information.0")}</h2>
        <p>{t("information.1")}</p>
      </motion.div>
    </section>
  );
};

export default Information;