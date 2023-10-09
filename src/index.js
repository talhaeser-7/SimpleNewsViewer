import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux'tan Provider ekleyin
import { BrowserRouter } from 'react-router-dom';
import store from './store'; // Redux store dosyanızın yolu
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
); 
