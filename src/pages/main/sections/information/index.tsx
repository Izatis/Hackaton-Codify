import { FC } from "react";
import s from "./style.module.scss";

import { motion } from "framer-motion";

interface IInformationProps {
  image: any;
  title: string;
  descrition: string;
}

const Information: FC<IInformationProps> = ({ image, title, descrition }) => {
  return (
    <section className={s.information}>
      <div className={s.information__text}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          {descrition}
        </motion.p>
      </div>
      <div className={s.information__image}>
        <img src={image} alt="information image" />
      </div>
    </section>
  );
};

export default Information;
