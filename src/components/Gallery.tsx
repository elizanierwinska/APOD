import "./Gallery.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { FetchedData, Props } from "../types";
import Error from "./Error";

export default function Gallery({today}: Props) {
  const [data, setData] = useState<FetchedData[]>();
  const [error, setError] = useState(null);

  useEffect(()=> {
    let randomDate: Date  = new Date()
    randomDate.setDate(randomDate.getDate() - (Math.random() * (30 - 7) + 7))
    let startDate: string = randomDate.toISOString().split('T')[0]
    const apiKey: string = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${today}`).then(data => setData(data.data)).catch(error => setError(error.toJSON()));
  }, [today])

  if(error) {
    return <Error error={error} />
  }

  return data ? <div className="gallery">{data?.map((img: FetchedData) => img.media_type === "image" ? <img key={img.date} src={img.url} alt={img.title}/> : img.media_type === "video" ? <iframe key={img.date} src={img.url} id="youtube-video"title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p key={img.date} className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>)}</div> :<h2 className="loader">Loading...</h2>
}