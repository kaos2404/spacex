export interface News {
  id: number
  title: string
  event_date_utc: string
  event_date_unix: number
  flight_number: number
  details: string
  links: Links
  time?: number
}

export interface Links {
  reddit: null
  article: string
  wikipedia: string
}
