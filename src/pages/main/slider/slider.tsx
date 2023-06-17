import { FC } from "react";
import './slider.css'
import s from "./slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";

import slideFirst from "../../../../public/slideFirst.jpg";
import { courses } from "./slider-array";
import { Button } from "@mui/material";

const Slide: FC = () => {
  return (
    <section className={s.slider}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
      >
        Lorem
      </motion.h2>

      <Swiper
        speed={1200}
        autoplay={{
          delay: 4500,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        className="course-slides"
        id="courses"
      >
        {courses.map((course) => {
          return (
            <SwiperSlide key={course.id}>
              <div className={s.mySwiper__content}>
                <div className={s.mySwiper__info}>
                  <b>
                    <span>Курс</span> Java
                  </b>
                  <p>{course.description}</p>
                  <Button className={s.mySwiper__button}>Перейти</Button>
                </div>

                <img src={slideFirst} alt="slide image" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slide;
