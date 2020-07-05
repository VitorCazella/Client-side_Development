import React, { Component } from 'react';
import Main from './pages/Home.jsx';
import Albums from './pages/Albums.jsx';
import NewPhotos from './pages/NewPhotos.jsx';
import Photography from './pages/Photography.jsx';
import About from './pages/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
// import '../css/debug.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Main />
    }
  }

  setSelected(e) {
    this.setState({ page: e });

    var btnContainer = document.getElementById("nav");

    // Get all anchor tags inside the unsorted list
    var btns = btnContainer.querySelectorAll('li a');

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = btnContainer.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
      });
    }
  }

  render() {
    return (
      <>
        <div className="App overflow-auto">
          <section className="sidebarLeft">
            <ul id="nav">
              <li><a className="active" href="#" onClick={() => this.setSelected(<Main />)}>Home</a></li>
              <li><a href="#" onClick={() => this.setSelected(<Albums />)}>Albums</a></li>
              <li><a href="#" onClick={() => this.setSelected(<NewPhotos />)}>New Photos</a></li>
              <li><a href="#" onClick={() => this.setSelected(<Photography />)}>Photography</a></li>
              <li><a href="#" onClick={() => this.setSelected(<About />)}>About</a></li>
            </ul>
          </section>
          <div className="main">{this.state.page}</div>
        </div>
      </>
    );
  }
}


export default App;
