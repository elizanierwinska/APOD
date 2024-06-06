import "./Home.css";
import { useEffect } from 'react';
import { homeProps } from "../types";
import Error from "./Error";
import { fetchData } from "../fetchData";
import Picture from "./Picture";
import Gallery from "./Gallery";

export default function Home({date, data, setData, error, setError}: homeProps) {

  useEffect(()=> {
    fetchData(date,setData,setError)
  }, [date])

  
  if(error){
    return <div>
        <Error error={error} />
      </div>
  }

  return <div>
    {date.date ? <Picture data={data} /> : 
    (date.startDate && !date.endDate) ? <h2 className="loader">Please enter the end date.</h2> : 
    (!date.startDate && date.endDate) ? <h2 className="loader">Please enter the start date.</h2> : 
    (date.startDate && date.endDate) || date.count ? <Gallery data={data}/> : 
    <h2 className="loader">Loading...</h2>}
  </div>
}