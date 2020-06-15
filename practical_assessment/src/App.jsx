import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import './debug.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="header">
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

      <div className="main"></div>

      <footer className="footer">
        <div class="content">
          &copy; Vitor A. Cazella
          <a title="Privacy Policy" href="#">Privacy Policy</a>
          <a title="Terms of sevice" href="#">Terms of sevice</a>
        </div>
        <div>


          <a href="https://www.facebook.com/"><img
            className="social"
            src="https://www.androidcentral.com/sites/androidcentral.com/files/article_images/2019/10/facebook-logo-f.png?fbclid=IwAR0reKvacunXzHMJVmFkVzqtjEkrZ7TZufs3ZplPItsO_cO9pc34owH_vCk"
            roundedCircle
          />
        </a>

          <a href="https://twitter.com/" ><img
            className="social"
            src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_400x400.png"
            roundedCircle
          />
          </a>

          <a href="https://www.instagram.com/?hl=en"><img
            className="social"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
            roundedCircle
          />
          </a>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
