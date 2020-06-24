import React, { useState } from "react";
import './style/App.css';
import logo from './images/logo.svg';
import ShapesList from './pages/Shapes.jsx';
import Clock from './pages/Clock.jsx';
import Footer from './pages/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Calculator from './pages/Calculator.jsx';
// import './style/debug.css';

function App() {
  const [page, setPage] = useState(<Home name="Home" />);
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Clock />
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Home />) }>Home</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<Calculator />)}>Calculator</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<ShapesList />)}>Shapes</a></li>
          <li><a href="#" className="menu-item" onClick={() => setPage(<About />)}>About</a></li>
        </ul>
      </nav>

      <div id="main" className="main">{page}</div>

      <Footer />
    </div>
  );
}
export default App;
