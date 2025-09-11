import React from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
codex/redesign-website-structure-for-bomale
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Location from './components/Location';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import About from './components/About';
main
import Catering from './components/Catering';
import Contact from './components/Contact';

function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      <Navbar />
codex/redesign-website-structure-for-bomale
      {
        path === '/menu' ? <Menu /> :
        path === '/find' ? <Location /> :
        path === '/book' ? <Catering /> :
        path === '/contact' ? <Contact /> :
        <Home />
      }
      <Hero />
      <Menu />
      <Location />
      <About />
      <Catering />
      <Contact />
 main
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
