import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Astronomy Picture of the Day</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
