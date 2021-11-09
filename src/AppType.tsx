export interface IWeather {
  description: string
  icon: string
  id: number
  main: string
}

export interface ITemp {
  day: number
  eve: number
  max?: number
  min?: number
  morn: number
  night: number
}

export type IDayData = {
  dayMonth?: string
  clouds: number
  deg: number
  dt: number
  feels_like: ITemp
  gust: number
  humidity: number
  pop: number
  pressure: number
  rain: number
  speed: number
  sunrise: number
  sunset: number
  temp: ITemp
  weather: IWeather[]
}

export interface IParams {
  q: string; //name city
  cnt: number; //how many days
  units: string; //metric systems
  lang: string; //language
}

export type IWeatherData = IDayData[] | null