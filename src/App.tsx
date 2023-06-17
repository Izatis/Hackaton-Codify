import { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import "./app/global.scss";

import { Routing } from "app/route/routing";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback='loadingg...'>
        <Routing />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
