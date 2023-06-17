import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import image from "shared/image/imageSecond.png";

const FamiliarizationFirst = () => {
  const [t] = useTranslation();

  return (
    <section className={s.familiarization}>
      <motion.div
        className={s.familiarization__text}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
      >
        <h2>{t("familiarization-first.0")}</h2>
        <p>{t("familiarization-first.1")}</p>
      </motion.div>
      <div className={s.familiarization__image}>
        <img src={image} alt="familiarization image" />
      </div>
    </section>
  );
};

export default FamiliarizationFirst;
