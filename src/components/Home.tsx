import "./Home.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { FetchedData, Props } from "../types";
import Error from "./Error";

export default function Home({today}: Props){
  const [data, setData] = useState<FetchedData>();
  const [date, setDate] = useState<string>(today);
  const [error, setError] = useState(null);


  useEffect(()=> {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`).then(data => setData(data.data)).catch(error => setError(error.toJSON()));
  }, [date])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //set the date to the date from the input field 
    setDate(event.target.value);
  }
  
  if(error){
    return <div>
        <Error error={error} />
      </div>
  }

  return data ? <div className="container">
      {data.media_type === "image" ?
      <img className="universe-img" src={data.url} alt="..."/> : data.media_type === "video" ? <iframe className="youtube-video" src={data.url} title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
     <p className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>}
      <div className="description">
        <h2 className="img-title">{data.title}</h2>
        <div className="date-container">
          <p>Date: </p>
          <input 
            className="date-picker"
            type="date" 
            onChange={handleChange}
            value={date}
            min="1995-06-16"
            max={today}
          />
        </div>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2 className="loader">Loading...</h2>
}