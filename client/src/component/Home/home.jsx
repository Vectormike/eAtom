import React from 'react';
import { } from 'react-router-dom';

import Navbar from '../Navbar/navbar';
import Shows from '../Shows/shows';
import Footer from '../Footer/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Shows />
      <Footer />
    </div>
  );
}

export default Home;
