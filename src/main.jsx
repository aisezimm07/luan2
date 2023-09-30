import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируйте Provider
import store from './store'; // Импортируйте ваш Redux Store
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Оберните ваше приложение в Provider */}
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>, // Передайте store как prop в Provider
);
