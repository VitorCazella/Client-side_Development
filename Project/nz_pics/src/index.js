import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App.jsx';
import Header from './js/Header.jsx';
import Footer from './js/Footer.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
