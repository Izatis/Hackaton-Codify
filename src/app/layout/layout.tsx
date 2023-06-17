import { FC, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "widgets/header/header";
import Footer from "widgets/footer/footer";

const Layout: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || pathname.slice(0, 7) === "/client") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [pathname]);

  return (
    <>
      {isShow && <Header />}
      <Outlet />
      {isShow && <Footer />}
    </>
  );
};

export default Layout;
