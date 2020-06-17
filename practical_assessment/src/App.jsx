import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './style/App.css';
import logo from './logo.svg';
import Footer from './pages/Footer.jsx';
import Shapes from './pages/Shapes.jsx';
import Clock from './pages/Clock.jsx';
import Calculator from './pages/Calculator.jsx';
// import './style/debug.css';

var page = ['Main', 'Calculator', 'Shapes'];

function App() {
  const [page, setPage] = useState(<Calculator />);
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Page</h1>
        <div className="time"><Clock /></div>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Clock />)}>Home</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>Calculator</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Shapes />)}>Shapes</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>About</a></li>
        </ul>
      </nav>

      <div className="main">{page}</div>

      <Footer />
    </div>
  );
}

export default App;
