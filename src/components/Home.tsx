import "./Home.css"
import { useState, useEffect } from 'react'

export default function Home(){
  let today = new Date().toLocaleDateString('en-CA')
  console.log(today)
  const [data, setData] = useState<any>();
  const [date, setDate] = useState<string>(today);

  const fetchData = () => {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}&count`).then(response => response.json()).then(data => setData(data))
  }

  useEffect(()=> {
    fetchData()
  }, [date])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  console.log(data)

  return data ? <div className="container">
      {data.media_type === "image" ?
      <img className="universe-img" src={data.url} alt="..."/> : data.media_type === "video" ? <iframe className="youtube-video" src={data.url} title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
     <p>Sorry, the media you are searching for is not found. Please pick another date</p>}
      <div className="description">
        <h2 className="img-title">{data.title}</h2>
        <div className="date-container">
          <p>Date: </p>
          <input 
            className="date-picker"
            type="date" 
            onChange={handleChange}
            value={date}
            max={today}
            min="1995-06-16"
          />
        </div>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2>Loading...</h2>
}