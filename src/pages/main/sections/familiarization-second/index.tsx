import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import image from "shared/image/imageThird.png";

const FamiliarizationSecond = () => {
  const [t] = useTranslation();

  return (
    <section className={s.familiarization}>
      <div className={s.familiarization__image}>
        <img src={image} alt="familiarization image" />
      </div>
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
        <h2>{t("familiarization-second.0")}</h2>
        <p>{t("familiarization-second.1")}</p>
      </motion.div>
    </section>
  );
};

export default FamiliarizationSecond;
