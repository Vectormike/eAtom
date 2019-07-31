import React from 'react';
import './App.css';
import Navbar from './component/Navbar/navbar';
import Shows from './component/Shows/shows';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shows />
      <Footer />
    </div>
  );
}

export default App;
