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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //set the date to the date from the input field 
    if(event.target.name === "date"){
      setDate({
          date: event.target.value,
          startDate: "",
          endDate: "",
          count: ""
        }
      )
    }else if (event.target.name === "startDate"){
      setDate((prev: any) => {
          return {
          ...prev,
          date: "",
          startDate: event.target.value,
          count: ""
      }});
    }else if (event.target.name === "endDate"){
      setDate((prev: any) => {
        return {
          ...prev,
          date: "",
          endDate: event.target.value,
          count: ""
        }});
      setData(null);
    } else {
      setData(null);
      setDate(() => {
        return {
          date: "",
          startDate: "",
          endDate: "",
          count: event.target.value
        }});
    }
  }

  return (
    <Router>
      <Header />
      <div className="input-fields">
          <div className="flex-inputs">
          <div className="flex">
              <p>Date:</p>
              <input 
                className="date-picker"
                type="date" 
                name="date"
                onChange={handleChange}
                value={date.date}
                min="1995-06-16"
                max={today}
              />
            </div>
          <div className="flex">
              <p>Start date:</p>
              <input 
                  className="date-picker"
                  type="date" 
                  name="startDate"
                  onChange={handleChange}
                  value={date.startDate}
                  min="1995-06-16"
                  max={today}
              />
            </div>
            <div className="flex">
              <p>End date:</p>
              <input 
                  className="date-picker"
                  type="date" 
                  name="endDate"
                  onChange={handleChange}
                  value={date.endDate}
                  min="1995-06-16"
                  max={today}
              />
            </div>
            <div className="flex">
              <p>Count:</p>
              <input 
                  className="count"
                  type="number" 
                  name="count"
                  onChange={handleChange}
                  value={date.count}
                  min="1995-06-16"
                  max={today}
              />
            </div>
          </div>
      </div>
      <Routes>
      <Route path="/" element={<Home date={date} data={data} setData={setData} error={error} setError={setError}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
