import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import './App.css';
import Navbar from './component/Navbar/navbar';
import Shows from './component/Shows/shows';
import Footer from './component/Footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Shows />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
