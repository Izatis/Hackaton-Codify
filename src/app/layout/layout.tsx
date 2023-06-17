import { FC, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "widgets/header/header";
import Footer from "widgets/footer/footer";

const Layout: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || pathname === "/client") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
