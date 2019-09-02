import React from 'react';
import Navbar from '../../component/Navbar/navbar';
import Directory from '../../component/Directory/directory';
import Footer from '../../component/Footer/footer';

import './homepage.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <Directory />
      <Footer />
    </div>
  );
}
