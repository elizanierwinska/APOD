import "./Home.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { FetchedData, Props } from "../types";
import Error from "./Error";

export default function Home({today}: Props){
  const [data, setData] = useState<FetchedData | FetchedData[] | any>();
  const [date, setDate] = useState({
    date: today,
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState(null);
 console.log(data)

  useEffect(()=> {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    let url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    let photoRequest = `&date=${date.date}`
    let galleryStartDateRequest = `&start_date=${date.startDate}`
    let galleryEndDateRequest = `&end_date=${date.endDate}`
    let request: string = "";
    console.log("end date is: " + date.endDate)
    if(date.date) {
      request = url + photoRequest
    } 
    if(date.startDate && date.endDate) {
        request = url + galleryStartDateRequest + galleryEndDateRequest
    }

    console.log("request url is: " + request)
    
    if (request !== "") {
      axios.get(request).then(data => setData(data.data)).catch(error => setError(error.toJSON()));
    }
  }, [date])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //set the date to the date from the input field 
    if(event.target.name === "date"){
      setDate({
          date: event.target.value,
          startDate: "",
          endDate: ""
        }
      )
    }else if (event.target.name === "startDate"){
      setDate((prev: any) => {
          return {
          ...prev,
          date: "",
          startDate: event.target.value,
      }});
    }else {
      setDate((prev: any) => {
        return {
          ...prev,
          date: "",
          endDate: event.target.value,
        }});
        setData(null);
    }
  }

  
  if(error){
    return <div>
        <Error error={error} />
      </div>
  }

  return <div>
      <div className="input-fields">
        <p>To see gallery choose:</p>
          <div className="flex-inputs">
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
          </div>
      </div>
    { data ? date.date ? <div className="container">
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
              name="date"
              onChange={handleChange}
              value={date.date}
              min="1995-06-16"
              max={today}
          />
          </div>
          <p>{data.explanation}</p>
        </div> 
      </div> : date.startDate && date.endDate ? <div className="gallery">{data?.map((img: FetchedData) => img.media_type === "image" ? <img key={img.date} src={img.url} alt={img.title}/> : img.media_type === "video" ? <iframe key={img.date} src={img.url} id="youtube-video"title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p key={img.date} className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>)}</div> : <h2 className="loader">Loading...</h2>: <h2 className="loader">Loading...</h2>}
  </div>
}