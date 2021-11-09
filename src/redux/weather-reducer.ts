import {ThunkAction} from "redux-thunk";
import {ApiRequest} from "../API/API";
import {IDayData, IParams, IWeatherData} from "../AppType";
import {appStoreType} from "./redux-store";



const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_CITY = 'SET_CITY'
const SET_NUM_DAYS = 'SET_NUM_DAYS'

export type initialStateType = {
  weatherData: IWeatherData,
  params: IParams
}

type setWeatherDataActionCreateType = {
  type: typeof SET_WEATHER_DATA,
  weatherData: IDayData[]
}

type setNumberDaysActionType = {
  type: typeof SET_NUM_DAYS,
  numberDays: number
}

type setCityAction = {
  type: typeof SET_CITY,
  city: string
}


export const initialState: initialStateType = {
  weatherData: null,
  params: {
    q: 'Minsk',
    cnt: 4,
    units: 'metric',
    lang: 'en'
  }
}


const settingTheDate = (weatherData: IDayData[]): IDayData[] => {
  const now = new Date()
  const nowDate = now.getDate()
  const nowMonth = now.getMonth()
  return weatherData.map((el: IDayData, index: number) => {
    const thisDayData = new Date(2021, nowMonth, nowDate + index);
    return {...el, dayMonth: `${thisDayData.getDate()}/${thisDayData.getMonth() + 1}`}
  })
}

type actionType = setWeatherDataActionCreateType | setCityAction | setNumberDaysActionType

const weatherReducer = (state = initialState, action: actionType): initialStateType => {
  switch (action.type) {
    case SET_WEATHER_DATA: return {...state, weatherData: action.weatherData}
    case SET_CITY: return {...state, params: {...state.params, q: action.city}}
    case SET_NUM_DAYS: return {...state, params: {...state.params, cnt: action.numberDays}}
    default: return state
  }
}

//creating action
export const setCity = (city: string): setCityAction => ({type: SET_CITY, city})
export const setNumberDays = (numberDays: number): setNumberDaysActionType => ({type: SET_NUM_DAYS, numberDays})


//Thunks
export const changeWeatherData = ()
  : ThunkAction<Promise<void>, appStoreType, unknown, actionType> => {
  return async (dispatch, getState) => {
    try {
      const params = getState().data.params
      const weatherDataDateless = await ApiRequest(params)
      const weatherData = settingTheDate(weatherDataDateless)
      dispatch({type: SET_WEATHER_DATA, weatherData})
    }catch (err){
      alert('Did not find this city, established Minsk')
      dispatch(setCity('Minsk'))
      dispatch(changeWeatherData())
    }
  }
}

export default weatherReducer