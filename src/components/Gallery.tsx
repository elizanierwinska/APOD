import "./Gallery.css";
import { FetchedData } from "../types";


export default function Gallery({data}: FetchedData[] | any) {
  
  return data ? <div className="gallery">{data?.map((img: FetchedData) => img.media_type === "image" ? <img key={img.date} src={img.url} alt={img.title}/> : 
  img.media_type === "video" ? <iframe key={img.date} src={img.url} id="youtube-video"title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p key={img.date} className="no-img"> Not found.</p>)}</div> : <h2 className="loader">Loading...</h2>
}