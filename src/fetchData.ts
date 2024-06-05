import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { date, FetchedData } from "./types";

export default function fetchData(date: date, setData:Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>, setError: Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>): {} | void {
  const apiKey: string = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
  let url: string=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  let photoRequest: string = `&date=${date.date}`
  let galleryStartDateRequest: string = `&start_date=${date.startDate}`
  let galleryEndDateRequest:string = `&end_date=${date.endDate}`
  let galleryCount:string  = `&count=${date.count}`
  let request: string = "";
  console.log("end date is: " + date.endDate)
  if(date.date) {
    request = url + photoRequest
  } 
  if(date.startDate && date.endDate) {
      request = url + galleryStartDateRequest + galleryEndDateRequest
  }
  if(date.count) {
      request = url + galleryCount
  }
  
  if (request !== "") {
    axios.get(request).then(data => setData(data.data)).catch(error => setError(error.toJSON()));
  }
}