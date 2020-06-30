import React, { useState } from 'react';
import Header from './Header.jsx';
import Main from './pages/Main.jsx';
import Albuns from './pages/Albuns.jsx';
import Footer from './Footer.jsx';
import './css/App.css';
// import './debug.css'

var page = ['Main', 'Calculator', 'Shapes'];

function App() {
  const [page, setPage] = useState(<Main />);
  return (
    <div className="App">
      <Header />
      <hr />
      <section className="sidebarLeft">
        <ul>
          <li><a class="active" href="#" onClick={() => setPage(<Main />)}>Home</a></li>
          <li><a href="#" onClick={() => setPage(<Albuns />)}>Albums</a></li>
          <li><a href="#" onClick={() => setPage(<Albuns />)}>New Photos</a></li>
          <li><a href="#" onClick={() => setPage(<Main />)}>Photography</a></li>
          <li><a href="#" onClick={() => setPage(<Albuns />)}>About</a></li>
        </ul>
      </section>
      <div className="main">{page}</div>
      <Footer />
    </div>
  );
}

export default App;
