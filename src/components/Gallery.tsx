import "./Gallery.css"
import { useState, useEffect } from 'react'
import axios from "axios";
import { FetchedData } from "../types";
import Error from "./Error"

export default function Gallery(endDate: any) {
  const [error, setError] = useState(null)
  const [data, setData] = useState<FetchedData[] | any>();

  useEffect(()=> {
    let randomDate = new Date()
    randomDate.setDate(randomDate.getDate() - (Math.random() * (30 - 7) + 7))
    let startDate = randomDate.toISOString().split('T')[0]
    console.log(startDate, endDate)
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate.endDate}`).then(data => setData(data)).catch(error => setError(error.toJSON()))
  }, [endDate])

  if(error) {
    return <Error error={error} />
  }
console.log(data)
  return data ? <div className="gallery">{data?.data.map((img: FetchedData) => img.media_type === "image" ? <img src={img.url} alt={img.title}/> : img.media_type === "video" ? <iframe src={img.url} id="youtube-video"title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>)}</div> :<h2 className="loader">Loading...</h2>
}