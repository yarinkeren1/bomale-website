import React from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import About from './components/About';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <Location />
      <About />
      <Catering />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
