export type FetchedData = Record<'date' | "explanation" | "media_type" | "service_version" | "title" | "url", string>

export interface Props {
  today: string;
}