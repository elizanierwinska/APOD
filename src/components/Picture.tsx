import "./Picture.css"
import { FetchedData } from "../types"

export default function Picture({data}: FetchedData | any) {
  
  return data ? <div className="container">
  {data.media_type === "image" ?
  <img className="universe-img" src={data.url} alt="..."/> : 
  data.media_type === "video" ? <iframe className="youtube-video" src={data.url} title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>}
    <div className="description">
      <h2 className="img-title">{data.title}</h2>
      <div className="date-container">
        <p>Date: </p>
        <p>{data.date}</p>
      </div>
      <p>{data.explanation}</p>
    </div> 
  </div> : 
  <h2 className="loader">Loading...</h2>
}