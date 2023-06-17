import s from "./style.module.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import avatar from "shared/image/avatar.png";

const Quote = () => {
  const [t] = useTranslation();

  return (
    <section className={s.quote}>
      <div className={s.quote__avatar}>
        <img src={avatar} alt="quote avatar" />
      </div>

      <motion.div
        className={s.quote__text}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
      >
        <svg
          width="92"
          height="72"
          viewBox="0 0 92 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.229 66.4693C27.8644 74.2465 13.6193 72.1902 6.94962 63.9553C-0.944215 54.2295 -2.52038 35.7963 11.2317 19.3072C18.053 11.1285 26.2736 4.92735 35.8854 0.703888L40.3183 7.84356C26.6453 14.4692 16.4258 23.4526 14.9775 38.5139C21.1466 38.5139 26.265 38.2905 30.8239 39.9218C36.0142 41.779 39.1669 45.2234 40.4608 49.1732C42.5133 55.3574 41.5183 61.5513 36.229 66.4693ZM85.8044 66.4693C77.4398 74.2465 63.1947 72.1902 56.525 63.9553C48.6312 54.2295 47.055 35.7963 60.8072 19.3072C67.6284 11.1285 75.8491 4.92735 85.4608 0.703888L89.8938 7.84356C76.2208 14.4692 66.0012 23.4526 64.553 38.5139C70.7221 38.5139 75.8404 38.2905 80.3993 39.9218C85.5897 41.779 88.7423 45.2234 90.0362 49.1732C92.0887 55.3574 91.0937 61.5513 85.8044 66.4693Z"
            fill="#121127"
            fill-opacity="0.04"
          />
        </svg>
        <p>{t("quote.0")}</p>

        <div className={s.quote__author}>
          <b> {t("quote.1")}</b>
          <p> {t("quote.2")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;
