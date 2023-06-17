import s from "./footer.module.scss";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Достаем текущий адрес
  const location = useLocation();

  return (
    <footer className={s.footer}>
      {/* Сравниваем если пользовотель находится /login здесь  */}
      {location.pathname === "/" || location.pathname === "/login" ? (
        // то показываем вот это
        <motion.span
          className={s.footer__content}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <p>Еще нет аккаунта?</p>
          <Link to={"/register"}>Регистрация</Link>
        </motion.span>
      ) : (
        // в противном случае вот это
        <motion.span
          className={s.footer__content}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <p>footer</p>
          <Link to={"/login"}>footer</Link>
        </motion.span>
      )}
    </footer>
  );
};

export default Footer;
