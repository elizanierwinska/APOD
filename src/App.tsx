import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Footer from './components/Footer';

function App() {
  //Converts date to "yyyy-mm-dd" format
  let today: string = new Date().toISOString().split('T')[0];

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home today={today}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
