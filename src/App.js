import React from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Location from './components/Location';
import Catering from './components/Catering';
import Contact from './components/Contact';

function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      <Navbar />
      {
        path === '/menu' ? <Menu /> :
        path === '/find' ? <Location /> :
        path === '/book' ? <Catering /> :
        path === '/contact' ? <Contact /> :
        <Home />
      }
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
