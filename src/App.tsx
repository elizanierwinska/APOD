import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Footer from './components/Footer';
import { FetchedData } from "./types";

function App() {
  //Converts date to "yyyy-mm-dd" format
  let today: string = new Date().toISOString().split('T')[0];
  const [data, setData] = useState<FetchedData | FetchedData[] | any>();
  const [error, setError] = useState(null);
  const [date, setDate] = useState({
    date: today,
    startDate: "",
    endDate: "",
    count: ""
  });

  return (
    <Router>
      <Header today={today} date={date} setDate={setDate} setData={setData}/>
      <Routes>
      <Route path="/" element={<Home date={date} data={data} setData={setData} error={error} setError={setError}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
