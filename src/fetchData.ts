import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { date, FetchedData } from "./types";

export default function fetchData(date: date, setData:Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>, setError: Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>) {
  const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
  let url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  let photoRequest = `&date=${date.date}`
  let galleryStartDateRequest = `&start_date=${date.startDate}`
  let galleryEndDateRequest = `&end_date=${date.endDate}`
  let galleryCount = `&count=${date.count}`
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

  console.log("request url is: " + request)
  
  if (request !== "") {
    axios.get(request).then(data => setData(data.data)).catch(error => setError(error.toJSON()));
  }
}