import axios, {Method} from "axios";
import {IParams} from "../AppType";


type IOption = {
  method: Method
  url: string
  headers: any
}

const options: IOption = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '659e46688amsha761a0f8598a212p14a1b9jsn2ae3729be775'
  }
}


export const ApiRequest = async (params: IParams) => {
  try {
  	const response = await axios.request({...options, params})
  	return (response.data.list)
  } catch (err) {
  	console.error(err)
  }
}



