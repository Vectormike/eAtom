import React from 'react';
import Navbar from '../../component/Navbar/navbar';
import { Directory } from '../../component/Directory/directory';
import Footer from '../../component/Footer/footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Directory />
      <Footer />
    </div>
  );
}
