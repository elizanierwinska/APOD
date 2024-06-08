import { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";

export type FetchedData = Record<'date' | "explanation" | "media_type" | "service_version" | "title" | "url", string>

export type date = Record<"date" | "startDate" | "endDate" | "count", string>

export interface homeProps {
  date: date;
  data: FetchedData | FetchedData[] | any;
  setData: Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>;
  error: AxiosError | null;
  setError: Dispatch<SetStateAction<any>>,
}
export interface headerProps {
  today: string;
  date: date;
  setDate: Dispatch<SetStateAction<date>>;
  setData: Dispatch<SetStateAction<FetchedData | FetchedData[] | any>>;
}

export interface collapsibleProps{
  children: any;
  title: string;
}