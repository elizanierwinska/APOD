import { Dispatch, SetStateAction } from "react";

export type FetchedData = Record<'date' | "explanation" | "media_type" | "service_version" | "title" | "url", string>

export interface date {
  date: string;
  startDate: string;
  endDate: string;
  count: string;
}


export interface Props {
  date: date;
  data: FetchedData | FetchedData[] | any;
  setData: Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>;
  error: any;
  setError: Dispatch<SetStateAction<any>>,
}