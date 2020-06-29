import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
