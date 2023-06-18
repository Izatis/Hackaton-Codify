import { FC, useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";

import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import MyButton from "shared/ui/animate-button";
import { Link } from "react-router-dom";
interface ILine {
  width: number;
  left: number;
}

const Header: FC = () => {
  const { pathname } = useLocation();
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false);
  const [sideBarActive, setSideBarActive] = useState<boolean>(false);
  const [navBarPosition, setNavBarPosition] = useState<ILine>({
    width: 0,
    left: 0,
  });
  const [navColor, setNavColor] = useState<number>(0);

  // С помощью useRef получаем размер и позицию элемента
  const blockRefFirst = useRef<HTMLLIElement>(null);
  const blockRefSecond = useRef<HTMLLIElement>(null);
  const blockRefThree = useRef<HTMLLIElement>(null);
  const blockRefFour = useRef<HTMLLIElement>(null);

  // Жизненный цикл изменяет цвет и позицию линии
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsHeaderActive(true);
      }

      if (window.scrollY > 1 && blockRefFirst.current) {
        setIsHeaderActive(false);
        setNavColor(1);
        setNavBarPosition({
          width: blockRefFirst.current.offsetWidth,
          left: blockRefFirst.current.offsetLeft,
        });
      }

      if (window.scrollY >= 500 && blockRefSecond.current) {
        setNavColor(2);
        setNavBarPosition({
          width: blockRefSecond.current.offsetWidth,
          left: blockRefSecond.current.offsetLeft,
        });
      }

      if (window.scrollY >= 1500 && blockRefThree.current) {
        setNavColor(3);
        setNavBarPosition({
          width: blockRefThree.current.offsetWidth,
          left: blockRefThree.current.offsetLeft,
        });
      }

      if (window.scrollY >= 2300 && blockRefFour.current) {
        setNavColor(4);
        setNavBarPosition({
          width: blockRefFour.current.offsetWidth,
          left: blockRefFour.current.offsetLeft,
        });
      }
    };

    if (pathname === "/") {
      if (!sideBarActive) {
        setIsHeaderActive(true);
        window.addEventListener("scroll", handleScroll);
      }
    } else {
      setIsHeaderActive(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sideBarActive, pathname]);

  const handleClick = () => {
    setIsHeaderActive(!isHeaderActive);
    setSideBarActive(!sideBarActive);
  };
  const [t, i18next] = useTranslation();

  return (
    <header className={cn(s.header, { [s.active]: isHeaderActive })}>
      {pathname === '/' || pathname === '/login' || pathname === '/register'
        ?
        <nav className={s.header__nav}>
          <>
            <a href="#">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className={s.header__logo}
              />
            </a>

            <ul className={s.header__list}>
              <li ref={blockRefFirst}>
                <a
                  href="#"
                  style={
                    navColor === 1 ? { color: "#03d665" } : { color: "#322f55" }
                  }
                >
                  {t("header.0")}
                </a>
              </li>
              <li ref={blockRefSecond}>
                <a
                  href="#categories"
                  style={
                    navColor === 2 ? { color: "#03d665" } : { color: "#322f55" }
                  }
                >
                  {t("header.1")}
                </a>
              </li>
              <li ref={blockRefThree}>
                <a
                  href="#courses"
                  style={
                    navColor === 3 ? { color: "#03d665" } : { color: "#322f55" }
                  }
                >
                  {t("header.2")}
                </a>
              </li>
              <li ref={blockRefFour}>
                <a
                  href="#contacts"
                  style={
                    navColor === 4 ? { color: "#03d665" } : { color: "#322f55" }
                  }
                >
                  {t("header.3")}
                </a>
              </li>
              <span
                className={s.animateLine}
                style={{
                  left: navBarPosition.left,
                  width: navBarPosition.width,
                }}
              ></span>
            </ul>
          </>

          <div className={s.header__buttons}>
            <Link to="/login">
              <MyButton
                background="#7329c2"
                hoverBackground="#03d665"
                type="primary"
              >
                Войти
              </MyButton>
            </Link>

            <Link to="/register">
              <MyButton
                background="#7329c2"
                hoverBackground="#03d665"
                type="primary"
              >
                Регистрация
              </MyButton>
            </Link>
            {/* <TranslateButton />

          <BurgerMenu
            isHeaderActive={isHeaderActive}
            setIsHeaderActive={setIsHeaderActive}
            sideBarActive={sideBarActive}
            setSideBarActive={setSideBarActive}
          /> */}
          </div>
        </nav>

        :

        <nav className={s.header__nav}>
          <>
            <a href="#">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className={s.header__logo}
              />
            </a>
            <ul style={{ display: 'flex', columnGap: '20px' }}>

              <li>
                <Link to='profile'>
                  Мой профиль
                </Link>
              </li>
              
              <li>
                <Link to='#'>
                  Общая лента
                </Link>
              </li>

              <li>
                <Link to='#'>
                  Мой район
                </Link>
              </li>

              <li>
                <Link to='#'>
                  Мои подписки
                </Link>
              </li>
            </ul>
            <div style={{ display: 'flex', columnGap: '20px' }}>
              <Link to='add-post'>
                <MyButton
                  background="#7329c2"
                  hoverBackground="#03d665"
                  type="primary"
                >
                  Cоздать пост
                </MyButton>
              </Link>
              <MyButton
                background="#7329c2"
                hoverBackground="#03d665"
                type="primary"
              >
                Выйти
              </MyButton>
            </div>
          </>
        </nav>


      }
    </header>
  );
};

export default Header;
