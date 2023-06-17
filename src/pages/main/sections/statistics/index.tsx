import { FC, useEffect, useRef, useState } from "react";
import s from "./style.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Statistics: FC = () => {
  const ref = useRef<HTMLTableSectionElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, pageYOffset } = window;
      if (
        ref.current &&
        ref.current.offsetTop <= innerHeight + pageYOffset - -40
      ) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  const animateNumbers = () => {
    const numElements = document.querySelectorAll(`.${s.__num}`);
    numElements.forEach((numElement: any) => {
      const targetValue = parseInt(numElement.dataset.target || "0", 10);
      const duration = 1000;
      const startTime = Date.now();

      const animateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(targetValue * progress);

        numElement.textContent = String(value);

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };

      requestAnimationFrame(animateValue);
    });
  };

  useEffect(() => {
    if (inView) {
      animateNumbers();
    }
  }, [inView]);

  const [t] = useTranslation();
  return (
    <section className={s.statistics} ref={ref}>
      {inView && (
        <Swiper
          speed={1200}
          autoplay={{
            delay: 4500,
          }}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className={s.statisticsSlider}
        >
          <SwiperSlide>
            <motion.div
              className={s.statistics__item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              <span className={s.__num} data-target={100}></span>
              <p>{t("statistics.0")}</p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className={s.statistics__item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              <span className={s.__num} data-target={155}></span>
              <p>{t("statistics.1")}</p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className={s.statistics__item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
            >
              <span className={s.__num} data-target={123}></span>
              <p>{t("statistics.2")}</p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className={s.statistics__item}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
              id="categories"
            >
              <span className={s.__num} data-target={50}></span>
              <p>{t("statistics.3")}</p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      )}
    </section>
  );
};

export default Statistics;
