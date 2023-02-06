import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './pages/store';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './pages/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
        <App />
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
