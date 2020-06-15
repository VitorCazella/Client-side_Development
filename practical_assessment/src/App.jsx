import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './debug.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.name} Page</h1>
      </header>
      
      <nav className="navbar">
        <ul>
          <li><a href="#" id="btn1">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>

      <div className="main">
      </div>

      <footer className="App-footer">
        <div class="content">
          &copy; Vitor A. Cazella
          <a title="Privacy Policy" href="#">Privacy Policy</a>
          <a title="Terms of sevice" href="#">Terms of sevice</a>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
