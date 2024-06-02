import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home today={today}/>} />
      <Route path="/gallery" element={<Gallery endDate={today}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
