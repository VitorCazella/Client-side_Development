import React, { useState } from "react";
import logo from './logo.svg';
import Shapes from './pages/Shapes.jsx';
import './style/App.css';
import Clock from './pages/Clock.jsx';
import Footer from './pages/Footer.jsx';
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
        <Clock />
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>Home</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>Calculator</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Shapes />)}>Shapes</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>About</a></li>
        </ul>
      </nav>

      <div id="main" className="main">{page}</div>

      <Footer />
    </div>
  );
}

export default App;
