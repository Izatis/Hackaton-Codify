import { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import "./app/global.scss";
// import i18next from 'i18next';
import '../i18next'
import { Routing } from "app/route/routing";
import { Provider } from 'react-redux';
import { store } from 'app/store/store';

const App = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback='loadingg...'>
          <Routing />
        </Suspense>
      </BrowserRouter>
    // </Provider>
  );
};

export default App;
