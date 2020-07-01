import React, { useState } from 'react';
import Main from './pages/Main.jsx';
import Albuns from './pages/Albuns.jsx';
import NewPhotos from './pages/NewPhotos.jsx';
import '../css/App.css';
import { Component } from 'react';
// import './debug.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: <Main />,
    }
  }

  setSelected(e) {
    this.setState({ page: e });
  }

  render() {
    return (
      <div className="App">
        <section className="sidebarLeft">
          <ul>
            <li><a href="#" onClick={() => this.setSelected(<Main />)}>Home</a></li>
            <li><a href="#" onClick={() => this.setSelected(<Albuns />)}>Albums</a></li>
            <li><a href="#" onClick={() => this.setSelected(<NewPhotos />)}>New Photos</a></li>
            <li><a href="#" onClick={() => this.setSelected(<Main />)}>Photography</a></li>
            <li><a href="#" onClick={() => this.setSelected(<Main />)}>About</a></li>
          </ul>
        </section>
        <div className="main">{this.state.page}</div>
      </div>
    );
  }
}


export default App;
