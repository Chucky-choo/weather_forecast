import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DetailedWeather from "./detailedWeather/DetailedWeather";
import {changeWeatherData, setNumberDays} from "../../redux/weather-reducer";
import CardDayWeather from '../cardsDayWeather/CardsDayWeather';
import {appStoreType} from "../../redux/redux-store";
import {CircularProgress} from "@material-ui/core";
import InputNewCity from "./inputNewCity/InputNewCity";

const Info = () => {
  const dispatch = useDispatch()
  const weatherData = useSelector((store: appStoreType) => store.data.weatherData)

  useEffect(() => {
    dispatch(setNumberDays(10))
   if(weatherData !== null && weatherData.length === 4){
      dispatch(changeWeatherData())
    }
  }, [dispatch])


  return (
    <>
      <DetailedWeather/>
      <InputNewCity />
      {weatherData
        ?<CardDayWeather weatherData={weatherData} />
        : <CircularProgress color="secondary"/>
      }
    </>
  );
};

export default Info;
