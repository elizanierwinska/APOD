import "./Home.css"
import { useState, useEffect } from 'react'
import { FetchedData } from "../types";
import axios from "axios";

export default function Home(){
  let today = new Date().toLocaleDateString('en-CA')
  const [data, setData] = useState<FetchedData | any>();
  const [date, setDate] = useState<string>(today);
  const [error, setError] = useState(null)

  useEffect(()=> {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFX";
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`).then(data => setData(data)).catch(error => setError(error))
  }, [date])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }
// console.log(error, data)
if(error){
  console.log(error)
}

  // if(data?.error || data?.code) {
  //   return <div className="error">
  //       <h1>An Error occured</h1>
  //       <p>
  //         <b>Error message:</b> {data?.error?.message || data.msg}
  //       </p>
  //       <p className="instructions">Try to visit the page later or try to pick the date from the date picker below.</p>
  //       <input 
  //           className="date-picker"
  //           type="date" 
  //           onChange={handleChange}
  //           value={date}
  //           max={today}
  //           min="1995-06-16"
  //         />
  //     </div>
  // }

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
          />
        </div>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2 className="loader">Loading...</h2>
}