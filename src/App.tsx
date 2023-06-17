import { BrowserRouter } from "react-router-dom";
import "./app/global.scss";

import Navbar from "widgets/app-bar/app-bar";
import Footer from "widgets/footer/footer";
import Hero from "pages/hero/hero";
import MainLoad from "shared/ui/MainLoad/MainLoad";

const App = () => {
  return (
    <BrowserRouter>
      <MainLoad />
      <Navbar />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
