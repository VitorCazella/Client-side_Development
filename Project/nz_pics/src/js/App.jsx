import React, { Component } from 'react';
import Main from './pages/Main.jsx';
import Albuns from './pages/Albuns.jsx';
import NewPhotos from './pages/NewPhotos.jsx';
import '../css/App.css';
// import '../css/debug.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Albuns />
    }
  }

  setSelected(e) {
    this.setState({ page: e });


    var btnContainer = document.getElementById("nav");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.querySelectorAll('li a');

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = btnContainer.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  render() {
    return (
      <div className="App">
        <section className="sidebarLeft">
          <ul id="nav">
            <li><a className="btn active" href="#" onClick={() => this.setSelected(<Main />)}>Home</a></li>
            <li><a className="btn" href="#" onClick={() => this.setSelected(<Albuns />)}>Albums</a></li>
            <li><a className="btn" href="#" onClick={() => this.setSelected(<NewPhotos />)}>New Photos</a></li>
            <li><a className="btn" href="#" onClick={() => this.setSelected(<Main />)}>Photography</a></li>
            <li><a className="btn" href="#" onClick={() => this.setSelected(<Main />)}>About</a></li>
          </ul>
        </section>
        <div className="main">{this.state.page}</div>
      </div>
    );
  }
}


export default App;
