import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Button from './Button.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <>
    <App name="Main" />
    </>,
  document.getElementById('root')
);

document.getElementById("btn1").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("root").innerHTML = App();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
