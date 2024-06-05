import "./Home.css";
import { useEffect } from 'react';
import { FetchedData, Props} from "../types";
import Error from "./Error";
import fetchData from "../fetchData";
import Picture from "./Picture";

export default function Home({date, data, setData, error, setError}: Props) {

  useEffect(()=> {
    fetchData(date,setData,setError)
  }, [date])

  
  if(error){
    return <div>
        <Error error={error} />
      </div>
  }

  return <div>
    { data ? date.date ? <Picture data={data}/> : (date.startDate && date.endDate) || date.count ? <div className="gallery">{data?.map((img: FetchedData) => img.media_type === "image" ? <img key={img.date} src={img.url} alt={img.title}/> : img.media_type === "video" ? <iframe key={img.date} src={img.url} id="youtube-video"title="Apod" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
  <p key={img.date} className="no-img">Sorry, the media you are searching for is not found. Please pick another date to see the photo.</p>)}</div> : <h2 className="loader">Loading...</h2>: <h2 className="loader">Loading...</h2>}
  </div>
}