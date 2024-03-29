import { BrowserRouter } from "react-router-dom";

import Navbar from "widgets/app-bar/app-bar";
import Footer from "widgets/footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
